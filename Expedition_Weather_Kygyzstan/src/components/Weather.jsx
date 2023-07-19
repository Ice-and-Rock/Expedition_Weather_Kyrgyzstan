


const Weather = ( fetchedData, loading , title ) => {

  console.log(fetchedData.fetchedData)

  if (loading) {
    return <div>Loading... </div>;
    
  }

  return (  
        <div className="weather-app">
    <h1>{ title }</h1>
    {fetchedData && (
      <div className="weather-grid">
        {fetchedData.fetchedData.map((data, index) => {
          
            const hour = (index) % 24;
            return (
              <div key={index} className="weather-card">
                <p>Time: {hour}:00</p>
                <p>Temperature: {data.temperature} °C</p>
                <p>Rain: {data.hourly.rain[index]} mm</p>
                <p>Wind Speed (10m): {data.hourly.windspeed_10m[index]} km/h</p>
                <p>Wind Speed (180m): {data.hourly.windspeed_180m[index]} km/h</p>
              </div>
            );
          
          
        })}
      </div>
    )}
  </div>
    
  )
};

export default Weather


// {weatherData.hourly.temperature_2m.map((temperature, index) => {
