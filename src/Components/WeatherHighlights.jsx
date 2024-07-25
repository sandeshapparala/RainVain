import React from 'react'
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";
import humidity from "../assets/humidity.png";
import pressure from "../assets/pressure.png";
import visibility from "../assets/visibility.png";
import feelslike from "../assets/feelslike.png";
import air from "../assets/air.png";

const Highlights = ({highlights}) => {
    return (<div className={"card w-full"}>
        <p className={"card_title"}>Today Highlights</p>

        <div className="flex w-full flex-col gap-2 ">

            <div className={"flex mobile-flex"}>

                <div className="inner_card basis-1/2 ">
                    <p className="inner_title">Air Quality Index</p>
                    <div className="flex items-center my-6 air_quality">
                        <img src={air} alt="" className={"w-12  mx-2"}/>
                        <div className={"mx-2 basis-1/5 flex flex-col text-center gap-3"}>
                            <p className={"sd_text text-center"}>PM2.5</p>
                            <p className={"text-4xl"}>{highlights.airquality.pm2_5}</p>
                        </div>
                        <div className={"mx-2 basis-1/5 flex flex-col text-center gap-3"}>
                            <p className={"sd_text text-center"}>SO2</p>
                            <p className={"text-4xl"}>{highlights.airquality.so2}</p>
                        </div>
                        <div className={"mx-2 basis-1/5 flex flex-col text-center gap-3"}>
                            <p className={"sd_text text-center"}>NO2</p>
                            <p className={"text-4xl"}>{highlights.airquality.no2}</p>
                        </div>
                        <div className={"mx-2 basis-1/5 flex flex-col text-center gap-3"}>
                            <p className={"sd_text text-center"}>O3</p>
                            <p className={"text-4xl"}>{highlights.airquality.o3}</p>
                        </div>
                    </div>
                </div>

                <div className="inner_card basis-1/2 ">
                    <p className="inner_title">Sunrise & Sunset</p>
                    <div className="flex items-center my-6 gap-6">
                        <div className={"flex basis-1/2 items-center gap-2 sunrise"}>
                            <img src={sunrise} alt="" className={"w-12 mx-2 mr-4"}/>
                            <div className={"flex flex-col gap-4 "}>
                                <p className={"sd_text"}>Sunrise</p>
                                <p className={"text-3xl"}>{highlights.sunrise}</p>
                            </div>

                        </div>

                        <div className={"flex basis-1/2 items-center gap-2 sunset"}>
                            <img src={sunset} alt="" className={"w-12 mx-2 mr-4"}/>
                            <div className={"flex flex-col gap-4 "}>
                                <p className={"sd_text"}>Sunset</p>
                                <p className={"text-3xl"}>{highlights.sunset}</p>
                            </div>

                        </div>


                    </div>
                </div>


            </div>

            <div className={"flex "}>
                <div className="flex basis-1/2 weather_card">
                    <div className="inner_card basis-1/2 ">
                        <p className={"inner_title"}>Humidity</p>
                        <div className={"flex items-center justify-between my-6 mx-4"}>
                            <img src={humidity} alt="" className={"w-10 mx-2 mr-4"}/>
                            <p className={"text-4xl"}>{highlights.humidity}%</p>
                        </div>
                    </div>
                    <div className="inner_card basis-1/2 ">
                        <p className={"inner_title"}>Pressure</p>
                        <div className={"flex items-center justify-between my-6 mx-4"}>
                            <img src={pressure} alt="" className={"w-10 mx-2 mr-4"}/>
                            <p className={"text-3xl"}>{highlights.pressure}hPa</p>
                        </div>
                    </div>
                </div>
                <div className="flex basis-1/2 weather_card">
                    <div className="inner_card basis-1/2 ">
                        <p className={"inner_title"}>Visibility</p>
                        <div className={"flex items-center justify-between my-6 mx-4"}>
                            <img src={visibility} alt="" className={"w-10 mx-2 mr-4"}/>
                            <p className={"text-4xl"}>{highlights.visibility}Km</p>
                        </div>
                    </div>
                    <div className="inner_card basis-1/2 ">
                        <p className={"inner_title"}>Feels Like</p>
                        <div className={"flex items-center justify-between my-6 mx-4"}>
                            <img src={feelslike} alt="" className={"w-10 mx-2 mr-4"}/>
                            <p className={"text-4xl"}>{highlights.feelsLike}°c</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>)
}
export default Highlights
