import React from 'react';
import PropTypes from 'prop-types';
import sunrise from "../assets/sunrise.png";

const WeekForecast = ({ forecast = [] }) => {
    if (!forecast || forecast.length === 0) {
        return <div>No forecast data available.</div>;
    }

    return (
        <div className={"card w-full flex flex-col"}>
            {forecast.map((day, index) => (
                <div key={index} className="flex justify-between items-center my-2">
                    <div className="flex items-center">
                        <img src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} alt="" className={"w-8 mr-2"}/>
                        <p className={"text-xl mt-1"}>{Math.round(day.temp)}°C</p>
                    </div>
                    <p className={"sd_text"}>{day.description}</p>
                    <p className={"sd_text"}>{day.date}</p>
                </div>
            ))}
        </div>
    );
};

WeekForecast.propTypes = {
    forecast: PropTypes.array
};

export default WeekForecast;