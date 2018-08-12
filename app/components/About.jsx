var React = require('react');

var About = (props) => {
    return(
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application built on React.</p>
            <p> Here are some of the tools I used</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open weather map</a> - Open weather map api was used to get
                    weather information via city name.
                </li>
            </ul>
        </div>
    )
};


module.exports = About;