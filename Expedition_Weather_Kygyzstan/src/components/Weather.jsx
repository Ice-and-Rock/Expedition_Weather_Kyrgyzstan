import React from "react";



const Weather = ({ weatherDataObj, loading }) => {

  const { hourly } = weatherDataObj;
  
  // check loading is being passed as props ✅
  // console.log(loading + "loading in weather page")
  // check the type of weatherDataObj
  console.log(weatherDataObj)
  
    if (loading) {
      return <div>Loading... </div>;
    }
  
  return (
    <div className="weather-app">
      <h1>Weather Data</h1>
      {hourly && hourly.rain && (
        <div className="weather-grid">
          {hourly.rain.map((rain, index) => (
            <div key={index} className="weather-card">
              <p>Hour {index}: {rain} mm</p>
             
            </div>
          ))}
        </div>
      )}
      </div>
      )
    };
    
    export default Weather;
      


{/* 
{weatherData && (
        <div className="weather-grid">
          {weatherData.hourly.map((time, index) => (
            <div key={index} className="weather-card">
              <p>Time: {time}</p>
              <p>Temperature: {weatherData.temperature_2m[index]} °C</p>
              <p>Rain: {weatherData.rain[index]} mm</p>
              <p>Wind Speed (10m): {weatherData.windspeed_10m[index]} km/h</p>
              <p>Wind Speed (180m): {weatherData.windspeed_180m[index]} km/h</p>
            </div>
          ))}
        </div>
      )} */}

      {/* {weatherData && (
        <div className="weather-grid">
          {weatherData.weatherData.temperature_2m.map((temperature, index) => {
            const hourIndex = index * 4; // Get the index of the desired hour
            const hour = weatherData.time[hourIndex].split("T")[1].slice(0, 5);

            return (
              <div key={index} className="weather-card">
                <p>Time: {hour}</p>
                <p>Temperature: {temperature} °C</p>
                <p>Rain: {weatherData.rain[hourIndex]} mm</p>
                <p>Wind Speed (10m): {weatherData.windspeed_10m[hourIndex]} km/h</p>
                <p>Wind Speed (180m): {weatherData.windspeed_180m[hourIndex]} km/h</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  ); */}


// {weatherData.hourly.temperature_2m.map((temperature, index) => {
