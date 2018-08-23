import { CLOUDY, SUN, RAIN, SNOW, WINDY, THUNDER, DRIZZLE } from '../constants/weathers';
import convert from 'convert-units';

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(0));
}

const getWeatherState = weather => {
    const {id} = weather[0];

    if(id < 300){
        return THUNDER;
    } else if(id < 400){
        return DRIZZLE;
    } else if(id < 600){
        return RAIN;
    } else if (id < 700){
        return SNOW;
    } else if( id === 800){
        return SUN;
    } else{
        return CLOUDY;
    }
}

const transformWeather = (weather_data) => {
    const { weather } = weather_data;
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather);

    const data =  {
        humidity, // ecmascript simplifica "humidity : humidity"
        temperature: getTemp(temp),
        weatherState,
        wind: `${speed} m/s`,
    };
    
    return data;
}

export default transformWeather;