import { useState } from 'react'
import useFetch from "./useFetch.jsx";
import Weather from "./Weather.jsx";

const HomePage = () => {
    const [showWeather, setShowWeather] = useState(false)

    const { weatherData, loading } = useFetch();

    const handleClick = () => {
        setShowWeather(true)
}


console.log(loading + "loading on homepage")

console.log(showWeather)
// console.log(weatherData)


return (
    <div>
    <h1>Kyrgystan Climbing Weather Forecaster</h1>
        {/* <GetWeatherButton /> */}

        <button onClick={handleClick}>Get a weather report</button>

        {weatherData && <Weather weatherDataObj={weatherData} loading={loading}  />}
    </div>
)
}

export default HomePage