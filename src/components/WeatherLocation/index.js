import React, {Component} from 'react';
//import { Preloader } from 'react-materialize';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData  from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const KEY = 'bfff2827e97e0b54a2d60cf2db8d2209';
const LOCATION = 'Madrid,es';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${KEY}`;

class WeatherLocation extends Component {
    constructor(){
        super();
        this.state = {
            city: "Madrid",
            data: null
        };
    }

    componentWillMount = () => { // execute once
        //console.log("1) componentWillMount")
        this.handleUpdateClick();
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

    handleUpdateClick = () => {

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
}

export default WeatherLocation;