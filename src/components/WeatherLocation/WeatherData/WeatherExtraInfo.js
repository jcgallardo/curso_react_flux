import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind}) => (
    <div class="weather-extrainfo-cont">
        <span class="extraInfoText">{`Humedad: ${humidity} %`}</span>
        <span class="extraInfoText">{`Viento: ${wind}`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;