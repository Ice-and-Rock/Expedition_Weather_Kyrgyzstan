
import './App.css'
import { useState, useEffect } from 'react';

 

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
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  console.log(weatherData)

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-app">
    <h1>Weather App</h1>
    {weatherData && (
      <div className="weather-grid">
        {weatherData.hourly.temperature_2m.map((temperature, index) => {
          if (index % 4 === 0) {
            const hour = (index) % 24;
            return (
              <div key={index} className="weather-card">
                <p>Time: {hour}:00</p>
                <p>Temperature: {temperature} °C</p>
                <p>Rain: {weatherData.hourly.rain[index]} mm</p>
                <p>Wind Speed (10m): {weatherData.hourly.windspeed_10m[index]} km/h</p>
                <p>Wind Speed (180m): {weatherData.hourly.windspeed_180m[index]} km/h</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    )}
  </div>
  );
};

export default App;
