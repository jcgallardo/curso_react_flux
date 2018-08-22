import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => { // Destructuring --> pasa todos los parámetros de un objeto a varias variables con sus respectivos nombres
    return (
        <div className="location-cont">
            <h1>{city}</h1>
        </div>
    )
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;