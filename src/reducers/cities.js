import { SET_FORECAST_DATA }  from '../actions';

export const cities = (state = {}, action) => {
    switch(action.type){
        case SET_FORECAST_DATA:
            const  { city, forecastData } = action.valor; 
            return { ...state, [city]: {forecastData }}
        default:
            break;
    }
    return state;
}