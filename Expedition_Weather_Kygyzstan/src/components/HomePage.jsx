import { useState } from 'react'
import useFetch from "./useFetch.jsx";
import Weather from "./Weather.jsx";

const HomePage = () => {
    const [showWeather, setShowWeather] = useState(false)

    const { 
    weatherData: fetchedData,
    loading,
} = useFetch();

    const handleClick = () => {
        setShowWeather(true)
}


console.log(showWeather)


return (
    <div>
    <h1>Kyrgystan Climbing Weather Forecaster</h1>
        {/* <GetWeatherButton /> */}

        <button onClick={handleClick}>Get a weather report</button>

        {fetchedData && <Weather fetchedData={fetchedData} loading={loading} title="Here is today's weather..."/>}
    </div>
)
}

export default HomePage