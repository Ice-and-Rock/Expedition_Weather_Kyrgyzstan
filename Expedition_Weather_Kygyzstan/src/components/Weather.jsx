


const Weather = ({ weatherData, loading }) => {

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
    
  )
};

export default Weather
