import React from 'react'
import PropTypes from 'prop-types'

const weatherStatus = ({ icon, main, description }) => (
    <div>
        <img className="img-fluid"
             src={`http://openweathermap.org/img/w/${icon}.png`}
             alt="weather icon"/>
        <h2 className="m-0" style={{lineHeight: 0.8}}>{main}</h2>
        <p>{description}</p>
    </div>
);

weatherStatus.protoTypes = {
    icon: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default weatherStatus;
