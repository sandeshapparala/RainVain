
import {IoLocationOutline} from "react-icons/io5";
import {CiCalendarDate} from "react-icons/ci";


const CurrentWeather = ({weather}) => {
    return (
        <div className="card w-full">
            <p className="card_title">Now</p>
            <div className={"flex justify-between items-center mt-2"}>
                <div>
                    <p className="text-6xl">{weather.temp}°<span className={"text-4xl items-start"}>C</span></p>
                    <p className="mt-2 text-lg">{weather.condition}</p>
                </div>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" className={"w-28 mr-2 mb-2"}/>
                </div>

            </div>


            <hr className={"mt-2 mb-3 "}/>

            <div className={"flex justify-start items-center mb-4"}>
                <CiCalendarDate className={"text-2xl mr-2 "}/>
                <p className={"text2"}>{weather.date}</p>
            </div>
            <div className={"flex justify-start items-center mb-4"}>
                <IoLocationOutline className={"text-2xl mr-2"}/>
                <p className={"text2"}>{weather.location}</p>
            </div>


        </div>
    )
}
export default CurrentWeather
