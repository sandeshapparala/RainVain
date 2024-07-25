import {useEffect, useState} from 'react'
import {API_KEY, API_KEY2, BASE_URL} from '../config.jsx';


const UseWeather = (location) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`${BASE_URL}weather?q=${location}&APPID=0b39141a7d4faa38852f1b91243bdb11&units=metric`);
                const data = await response.json();

                const response2 = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY2}&q=${location}&aqi=yes`);
                const data2 = await response2.json();

                const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=0b39141a7d4faa38852f1b91243bdb11&units=metric`);
                const forecastData = await forecastResponse.json();

                const forecast = forecastData.list.filter((item, index) => index % 8 === 0).map(forecastItem => ({
                    date: new Date(forecastItem.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
                    temp: forecastItem.main.temp,
                    description: forecastItem.weather[0].description,
                    icon: forecastItem.weather[0].icon,
                }));

                const hourweather = forecastData.list.slice(0, 8).map(forecastItem => ({
                    date: new Date(forecastItem.dt * 1000).toLocaleTimeString('en-US', {weekday:'short', hour: 'numeric',hour12: true }),
                    temp: forecastItem.main.temp,
                    description: forecastItem.weather[0].description,
                    icon: forecastItem.weather[0].icon,
                    wind: forecastItem.wind.speed*3.6,
                    direction: degToCompass(forecastItem.wind.deg)
                }));


                setWeather({
                    current: {
                        temp: data.main.temp,
                        condition: data.weather[0].main,
                        icon: data.weather[0].icon,
                        date: new Date(data.dt * 1000).toLocaleDateString(),
                        location: `${data.name}, ${data.sys.country}`
                    },

                    highlights: {
                        airquality: {
                            pm2_5: data2.current.air_quality.pm2_5,
                            no2: data2.current.air_quality.no2,
                            o3: data2.current.air_quality.o3,
                            so2: data2.current.air_quality.so2,
                        },
                        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
                        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
                        visibility: data.visibility / 1000,  // Convert meters to kilometers
                        feelsLike: data.main.feels_like,
                        humidity: data.main.humidity,
                        pressure: data.main.pressure,
                    },

                    forecast: forecast,
                    hourweather: hourweather,

                })




            } catch (error) {
                console.log("City not found, Enter a valid city name");
            }
        };

        fetchWeather();
    }, [location]);

    return weather;
}

const degToCompass = (num) => {
    const val = Math.floor((num / 22.5) + 0.5);
    const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
};

export default UseWeather
