import Header from "../Components/Header.jsx";
import CurrentWeather from "../Components/CurrentWeather.jsx";
import WeekForecast from "../Components/WeekForecast.jsx";
import Highlights from "../Components/WeatherHighlights.jsx";
import HourForecast from "../Components/HourForecast.jsx";
import {useState} from "react";
import useWeather from "../hooks/useWeather.jsx";

const HomePage = () => {


    const [location, setLocation] = useState("Hyderabad");
    const weather = useWeather(location);




    const handleSearch = (searchTerm) => {
        setLocation(searchTerm);
    }


    if (!weather) {
        return <div className={"align-middle text-center loading"}>Loading...</div>
    }



    return (
        <>
            <Header onSearch={handleSearch}/>
            <div className={"flex w-full mt-16 justify-center gap-4 mobile-flex "}>
                <div className={"flex flex-col left"}>
                    <CurrentWeather weather={weather.current}/>
                    <p className={"card_title pl-4"}>5 Day Weather</p>
                    <WeekForecast forecast = {weather.forecast}/>

                </div>

                <div className={"flex flex-col right"}>
                    <Highlights highlights={weather.highlights}/>
                    <p className={"card_title pl-4"}>Today at</p>
                    <HourForecast forecast = {weather.hourweather}/>

                </div>

            </div>
        </>
    )
}
export default HomePage
