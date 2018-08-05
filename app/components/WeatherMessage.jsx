var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <p>Is {temp} in {location}</p>
        </div>
    )
}

module.exports = WeatherMessage;