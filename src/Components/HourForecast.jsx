import React from 'react';
import PropTypes from 'prop-types';

const HourForecast = ({ forecast = [] }) => {
    const textStyle = {
        fontSize: '14px', // Set the font size to 14px
    };

    const card_flex = {
        flexBasis: '12.5%',
    };

    if (!forecast || forecast.length === 0) {
        return <div>No hourly forecast data available.</div>;
    }

    return (
        <div className={"w-full flex flex-col "}>
            <div className="flex hour">
                {forecast.map((hour, index) => (
                    <div key={index} className="flex flex-col card" style={card_flex}>
                        <p className="text-center " style={textStyle}>{hour.date}</p>
                        <img src={`https://openweathermap.org/img/wn/${hour.icon}@2x.png`} alt=""
                             className={"w-16 mx-auto"}/>
                        <p className="text-center sw_text">{Math.round(hour.temp)}°C</p>
                        <p className="text-center sw_text">{hour.description}</p>
                    </div>
                ))}
            </div>
            <div className="flex hour">
                {forecast.map((hour, index) => (
                    <div key={index} className="flex flex-col card" style={card_flex}>
                        <p className="text-center " style={textStyle}>{hour.date}</p>
                        <p className="text-center sw_text">{Math.round(hour.wind)} Kmph</p>
                        <p className="text-center sw_text">{hour.direction}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

HourForecast.propTypes = {
    hourWeather: PropTypes.array
};

export default HourForecast;