import React from "react";
import useFetch from "./useFetch";
import Weather from "./Weather";
import GetWeatherButton from "./GetWeatherButton";

const HomePage = () => {
    const { weatherData,
    loading,
} = useFetch();


return (
    <div>
        <GetWeatherButton />
        <Weather />
    </div>
)
}

export default HomePage