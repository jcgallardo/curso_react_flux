import React, {Component} from 'react';
import Location from './Location';
import WeatherData  from './WeatherData';
import { SUN } from '../../constants/weathers';
import './styles.css';

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

/*const data2 = {
    temperature: 12,
    weatherState: WINDY,
    humidity: 20,
    wind: '25 m/s',
};*/

const KEY = 'bfff2827e97e0b54a2d60cf2db8d2209';
const LOCATION = 'Madrid,es';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${KEY}`;

class WeatherLocation extends Component {
    constructor(){
        super();
        this.state = {
            city: "Madrid",
            data: data1
        };
    }

    handleUpdateClick = () => {

        //  PROMISES
        fetch(api_weather)
            .then(res => res.json())
            .then(weatherData => {
                const data = this.getData(weatherData);
                this.setState({
                    data: data // is not neccesary include param city because new value is equal to original value
                });
            });
    }
    getWeatherState = weather => {
        return SUN;
    }

    getData = (weather_data) => {
        const {humidity, temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState = this.getWeatherState(this.weather_data);

        const data =  {
            humidity, // ecmascript simplifica "humidity : humidity"
            temperature: Math.round(temp - 273.15),
            weatherState,
            wind: `${speed} m/s`,
        };
        
        return data;
    }

    render = () => {
        const { city, data } = this.state;
        return (
            <div className="weather-location-cont">
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;