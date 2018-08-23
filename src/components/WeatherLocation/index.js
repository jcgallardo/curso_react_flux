import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { Preloader } from 'react-materialize';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData  from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const KEY = 'bfff2827e97e0b54a2d60cf2db8d2209';
const URL = 'http://api.openweathermap.org/data/2.5/weather';

class WeatherLocation extends Component {
    constructor({city}){
        super();
        this.state = {
            city,
            data: null
        };
    }

    componentWillMount = () => { // execute once
        //console.log("1) componentWillMount")
        const { city } = this.state;
        const api_weather = `${URL}?q=${city}&appid=${KEY}`;

        //  PROMISES
        fetch(api_weather)
            .then(res => res.json())
            .then(weatherData => {
                const data = transformWeather(weatherData);
                this.setState({
                    data: data // is not neccesary include param city because new value is equal to original value
                });
            });
    }

    componentDidMount = () => { // execute once
        //console.log("3) componentDidMount");
    }
    componentWillUpdate = () => { // execute few times
        //console.log("4) componentWillUpdate");
    }
    componentDidUpdate = () => { // execute few times
        //console.log("6) componentDidUpdate");
    }
    
    render = () => { // execute few times
        //console.log("2), 5)render");
        const { city, data } = this.state;
        return (
            <div className="weather-location-cont">
                <Location city={city} />
                {data ? <WeatherData data={data} /> : <CircularProgress  />}
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
}

export default WeatherLocation;