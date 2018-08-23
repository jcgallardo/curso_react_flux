import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => {
    return (
        <div>
            <WeatherLocation city={'Madrid,es'} />
            <WeatherLocation city={'Granada,es'} />
            <WeatherLocation city={'Córdoba,es'} />
            <WeatherLocation city={'Puertollano,es'} />
        </div>
    )
}

export default LocationList;