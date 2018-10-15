import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
    return forecastData.map((forecast) => (
        <ForecastItem 
            key={ `${forecast.weekDay}_${forecast.hour}` }
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}>
        </ForecastItem>)
    )
}

const renderProgress = () => (
    <h3>Cargando pronóstico extendido...</h3>
)

const ForecastExtended = ({city, forecastData}) => {
    return (
        <div className="forecast-div">
            <h2>Pronóstico Extendido para {city}</h2>
            {
                forecastData ?
                renderForecastItemDays(forecastData) :
                renderProgress()
            }
        </div>
    )
}

ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
    forecastData: PropTypes.array
}

export default ForecastExtended;