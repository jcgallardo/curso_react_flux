import { SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY }  from '../actions';
import { createSelector } from 'reselect'
import { toPairs } from 'lodash'

export const cities = (state = {}, action) => {
    switch(action.type){
        case SET_FORECAST_DATA: {
            const  { city, forecastData } = action.valor; 
            return { ...state, [city]: {forecastData }}
        }
        case GET_WEATHER_CITY: {
            const city = action.payload
            return {...state, [city]: {weather: null}}
        }
        case SET_WEATHER_CITY: {
            const { city, weather } = action.payload
            return { ...state, [city]: {weather}}
        }
        default:
            break;
    }
    return state;
}

export const getForecastDataFromCities = createSelector(
    (state, city) => state[city] && state[city].forecastData,
    forecastData => forecastData
)

const fromObjectToArray = cities => (
    toPairs(cities).map(([key, value]) => ({
        key, name : key, data: value.weather
    }))
)

export const getWeatherCities = createSelector(
    state  => fromObjectToArray(state),
    cities => cities
)