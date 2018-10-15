import transformForecast from '../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

// action creator --> it is a great way to separate action creator from component
const setCity = (valor) => ({ type: SET_CITY, valor});
const setForecastData = valor => ({ type: SET_FORECAST_DATA, valor })

const KEY = 'bfff2827e97e0b54a2d60cf2db8d2209';
const URL = 'http://api.openweathermap.org/data/2.5/forecast';

export const setSelectedCity = payload => {
    return dispatch => {
        // fetch or axios
        const url_forecast = `${URL}?q=${payload}&appid=${KEY}`;
        
        // activar en el estado un indicador de búsqueda de datos
        dispatch(setCity(payload));

        fetch(url_forecast)
            .then((data) => data.json())
            .then((weatherData) => {
                const forecastData = transformForecast(weatherData);
                
                // modificar el estado con el resultado de la promise
                dispatch(setForecastData({city: payload, forecastData}));
            });

        return;
    }
}