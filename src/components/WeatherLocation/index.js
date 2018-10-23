import React from 'react';
import PropTypes from 'prop-types';
//import { Preloader } from 'react-materialize';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData  from './WeatherData';
import './styles.css';

const WeatherLocation = ({ onWeatherLocationClick, city, data  }) => (
  <div className="weather-location-cont" onClick={onWeatherLocationClick}>
    <Location city={city} />
    {data ? <WeatherData data={data} /> : <CircularProgress  />}
  </div>
)

WeatherLocation.propTypes = {
    city: PropTypes.string,
    data: PropTypes.shape({
      temperature: PropTypes.number.isRequired,
      weatherState: PropTypes.string.isRequired,
      humidity: PropTypes.number.isRequired,
      wind: PropTypes.string.isRequired
    }),
    onWeatherLocationClick : PropTypes.func,
}

export default WeatherLocation;