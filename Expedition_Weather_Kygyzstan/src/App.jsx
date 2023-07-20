import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-app">
    <h2>Rebecca and Nick - Kygystan Trip</h2>
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
                  <div key={index} className={`weather-card ${rain > 2 || windSpeed10m > 30 || windSpeed180m > 30 ? 'red-box' : ''}`}>
                    <p>{hour}:00</p>
                    <p>{temperature} °C</p>
                    <p className={rain > 1 ? 'bold-warning' : ''}>{weatherData.hourly.rain[index]} mm</p>
                    <p className={windSpeed10m > 12 ? 'bold-warning' : ''}>{weatherData.hourly.windspeed_10m[index]} km/h</p>
                    <p className={windSpeed180m > 15 ? 'bold-warning' : ''}>{weatherData.hourly.windspeed_180m[index]} km/h</p>
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
            {weatherData.hourly.temperature_2m.map((temperature, index) => {
              const rain = weatherData.hourly.rain[index];
              const windSpeed10m = weatherData.hourly.windspeed_10m[index];
              const windSpeed180m = weatherData.hourly.windspeed_180m[index]; 

              if (index % 4 === 0 && index + 28 <= 48) {
                const hour = (index + 4) % 24; // Adjusted the starting hour for Day 2
                return (
                  <div key={index} className={`weather-card ${rain > 2 || windSpeed10m > 30 || windSpeed180m > 30 ? 'red-box' : ''}`}>
                    <p>{hour}:00</p>
                    <p>{weatherData.hourly.temperature_2m[index + 28]} °C</p>
                    <p className={rain > 1 ? 'bold-warning' : ''}>{weatherData.hourly.rain[index + 28]} mm</p>
                    <p className={windSpeed10m > 12 ? 'bold-warning' : ''}>{weatherData.hourly.windspeed_10m[index + 28]} km/h</p>
                    <p className={windSpeed180m > 15 ? 'bold-warning' : ''}>{weatherData.hourly.windspeed_180m[index + 28]} km/h</p>
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
            {weatherData.hourly.temperature_2m.map((temperature, index) => {
              const rain = weatherData.hourly.rain[index];
              const windSpeed10m = weatherData.hourly.windspeed_10m[index];
              const windSpeed180m = weatherData.hourly.windspeed_180m[index]; 

              if (index % 4 === 0 && index + 52 <= 72) {
                const hour = (index + 4) % 24; // Adjusted the starting hour for Day 3
                return (
                  <div key={index} className="weather-card">
                    <p>{hour}:00</p>
                    <p>{weatherData.hourly.temperature_2m[index + 8]} °C</p>
                    <p className={rain > 1 ? 'bold-warning' : ''}>{weatherData.hourly.rain[index + 8]} mm</p>
                    <p className={windSpeed10m > 12 ? 'bold-warning' : ''}>{weatherData.hourly.windspeed_10m[index + 8]} km/h</p>
                    <p className={windSpeed180m > 15 ? 'bold-warning' : ''}>{weatherData.hourly.windspeed_180m[index + 8]} km/h</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
