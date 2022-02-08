import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Weather() {
    const [city, setCity] = useState("");
    const [sofiaWeather, setSofiaWeather] = useState("Weather will be shown here:");
    //your code goes here = useEffect + AXIOS/FETCH
    //git changes
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios('https://meta-weather.vercel.app/api/location/839722/');
            setCity(data.title);
            setSofiaWeather(data.sun_rise);
            console.log(data);
        }
        fetchData();
    }, []);
    return (
        <>
            <h1>{city}</h1>
            <div>{sofiaWeather}</div>
        </>
    );
}