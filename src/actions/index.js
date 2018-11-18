import transformForecast from '../services/transformForecast';
import transformWeather from '../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER = 'SET_WEATHER'

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY'
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY'

// action creator --> it is a great way to separate action creator from component
const setCity = (payload) => ({ type: SET_CITY, payload});
const setForecastData = (payload) => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});
const KEY = 'bfff2827e97e0b54a2d60cf2db8d2209';
const URL = 'http://api.openweathermap.org/data/2.5/forecast';
const URL_WEATHER = 'http://api.openweathermap.org/data/2.5/weather'

export const setSelectedCity = payload => {
    return (dispatch, getState) => {
        // fetch or axios
        const url_forecast = `${URL}?q=${payload}&appid=${KEY}`;
        
        // activar en el estado un indicador de búsqueda de datos
        dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;

        const now = new Date();

        if(date && (now - date) < 1 * 60 * 1000){
            return ;
        }

        return fetch(url_forecast)
            .then((data) => data.json())
            .then((weatherData) => {
                const forecastData = transformForecast(weatherData);
                
                // modificar el estado con el resultado de la promise
                dispatch(setForecastData({city: payload, forecastData}));
            });
    }
}

export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {

      dispatch(getWeatherCity(city))

      const api_weather = `${URL_WEATHER}?q=${city}&appid=${KEY}`;
      fetch(api_weather)
        .then(res => res.json())
        .then(weatherData => {
          const weather = transformWeather(weatherData);

          dispatch(setWeatherCity({ city, weather }))
        });
    })
  }
}