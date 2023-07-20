import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);


  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=39.8443&longitude=70.316&hourly=temperature_2m,rain,windspeed_10m,windspeed_180m,winddirection_10m,winddirection_180m,temperature_180m&forecast_days=3`
        );
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);





  return (
    <div className="weather-app">
    <h2>Rebecca and Nick - Kygystan climbing Trip</h2>
    <h3>** Ak-su Region Base-camp **</h3>
    {!buttonClicked && (
      <button onClick={() => setButtonClicked(true)}>Get Weather Report</button>
    )}
    {buttonClicked && loading ? (
      <div>Loading...</div>
    ) : buttonClicked && weatherData ? (
    <>
      <h1>Weather App</h1>
      {weatherData && (
        <div className="three-day-weather"> 
          {/* Day 1 - Row */}
          <div className="day-title">Today</div>
          <div className="weather-grid">
            <div className="weather-card header">
              <p>Time</p>
              <p>Temperature</p>
              <p>Rain</p>
              <p>Wind Speed (10m)</p>
              <p>Wind Speed (180m)</p>
            </div>
            {weatherData.hourly.temperature_2m.map((temperature, index) => {
              const rain = weatherData.hourly.rain[index];
              const windSpeed10m = weatherData.hourly.windspeed_10m[index];
              const windSpeed180m = weatherData.hourly.windspeed_180m[index]; 

              

              if (index % 4 === 0 && index + 4 <= 24) {
                const hour = (index + 4) % 24;
                return (
                  <div key={index} className={`weather-card ${rain > 2 || windSpeed10m > 15 || windSpeed180m > 15 ? 'red-box' : ''}`}>
                    <p>{hour}:00</p>
                    <p>{temperature} °C</p>
                    <p className={rain > 1 ? 'bold-warning' : ''}>{weatherData.hourly.rain[index]} mm</p>
                    <p className={windSpeed10m > 14 ? 'bold-warning' : ''}>{weatherData.hourly.windspeed_10m[index]} km/h</p>
                    <p className={windSpeed180m > 14 ? 'bold-warning' : ''}>{weatherData.hourly.windspeed_180m[index]} km/h</p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Day 2 - Row */}
          <div className="day-title">Tomorrow</div>
          <div className="weather-grid">
            <div className="weather-card header">
              <p>Time</p>
              <p>Temperature</p>
              <p>Rain</p>
              <p>Wind Speed (10m)</p>
              <p>Wind Speed (180m)</p>
            </div>
            {weatherData.hourly.temperature_2m.slice(27, 48).map((temperature, index) => {
              const rain = weatherData.hourly.rain[index + 27];
              const windSpeed10m = weatherData.hourly.windspeed_10m[index + 27];
              const windSpeed180m = weatherData.hourly.windspeed_180m[index + 27]; 

              if (index % 4 === 0 ) {
                // The starting hour
                const hour = (index + 4) % 24; 
                return (
                  <div key={index} className={`weather-card ${rain > 2 || windSpeed10m > 15 || windSpeed180m > 15 ? 'red-box' : ''}`}>
                    <p>{hour}:00</p>
                    <p>{weatherData.hourly.temperature_2m[index + 27]} °C</p>
                    <p className={rain > 1 ? 'bold-warning' : ''}>{weatherData.hourly.rain[index + 27]} mm</p>
                    <p className={windSpeed10m > 14 ? 'bold-warning' : ''}>{weatherData.hourly.windspeed_10m[index + 27]} km/h</p>
                    <p className={windSpeed180m > 14 ? 'bold-warning' : ''}>{weatherData.hourly.windspeed_180m[index + 27]} km/h</p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Day 3 - Row */}
          <div className="day-title">Following day</div>
          <div className="weather-grid">
            <div className="weather-card header">
              <p>Time</p>
              <p>Temperature</p>
              <p>Rain</p>
              <p>Wind Speed (10m)</p>
              <p>Wind Speed (180m)</p>
            </div>
            {weatherData.hourly.temperature_2m.slice(51, 72).map((temperature, index) => {
              const rain = weatherData.hourly.rain[index + 51];
              const windSpeed10m = weatherData.hourly.windspeed_10m[index + 51];
              const windSpeed180m = weatherData.hourly.windspeed_180m[index + 51]; 

              if (index % 4 === 0 ) {
                // The starting hour
                const hour = (index + 4) % 24; 
                return (
                  <div key={index} className={`weather-card ${rain > 2 || windSpeed10m > 15 || windSpeed180m > 15 ? 'red-box' : ''}`}>
                    <p>{hour}:00</p>
                    <p>{weatherData.hourly.temperature_2m[index + 51]} °C</p>
                    <p className={rain > 1 ? 'bold-warning' : ''}>{weatherData.hourly.rain[index + 51]} mm</p>
                    <p className={windSpeed10m > 10 ? 'bold-warning' : ''}>{weatherData.hourly.windspeed_10m[index + 51]} km/h</p>
                    <p className={windSpeed180m > 12 ? 'bold-warning' : ''}>{weatherData.hourly.windspeed_180m[index + 51]} km/h</p>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
    )}
    </>
    
    ) : null }
    
    </div>
  );
};

export default App;
