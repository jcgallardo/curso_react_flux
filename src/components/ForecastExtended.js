import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import transformForecast from '../services/transformForecast';

/*const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes'
];  
*/

/*const data = {
    temperature : 10,
    humidity: 100,
    weatherState: 'normal',
    wind: '10 m/s'
}*/

const KEY = 'bfff2827e97e0b54a2d60cf2db8d2209';
const URL = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component{

    constructor(){
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount(){
        this.updateCity(this.props.city); // it's neccesary because componentWillReceiveProps not executes at start load.
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({
                forecastData : null
            });

            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        // fetch or axios
        const url_forecast = `${URL}?q=${city}&appid=${KEY}`;
        
        fetch(url_forecast)
            .then((data) => data.json())
            .then((weatherData) => {
                const forecastData = transformForecast(weatherData);
                console.log(forecastData);
                this.setState({forecastData});
            });
    }

    renderForecastItemDays(forecastData){
        return forecastData.map((forecast) => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}>
            </ForecastItem>)
        )
    }

    renderProgress = () => {
    return (<h3>Cargando pronóstico extendido...</h3>);
    }

    render(){
        const {city} = this.props;
        const {forecastData} = this.state;
        
        return (
            <div className="forecast-div">
                <h2>Pronóstico Extendido para {city}</h2>
                {
                    forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
                }
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired
}

export default ForecastExtended;