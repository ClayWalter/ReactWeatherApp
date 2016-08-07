var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>
                This is a simple weather app built on React that allows for a user to find the current temperature of any city.
            </p>
            <p>
                Here are some of the tools used to make the application:
            </p>
                <ul>
                    <li>
                        <a href="https://facebook.github.io/react" target="_blank">React</a> - Javascript Framework used.
                    </li>
                    <li>
                        <a href="http://openweathermap.org" target="_blank">Open Weather Map  </a> - Used Open Weather Map API to search for weather data by city name
                    </li>
                </ul>
            </div>
          )
        };

        module.exports = About;
