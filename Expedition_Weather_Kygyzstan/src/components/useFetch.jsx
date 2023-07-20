import { useEffect, useState } from "react"

const useFetch = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        
      const fetchWeatherData = async () => {
        try {
          const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=39.8443&longitude=70.316&hourly=temperature_2m,rain,windspeed_10m,windspeed_180m,winddirection_10m,winddirection_180m,temperature_180m&forecast_days=3"
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
    
// PROBLEM SOLVING
// weatherData is being returned as an object  ✅ 
// loading is being returned as boolean ✅
    // console.log(loading + "loading type")
    
    return { weatherData, loading }
    
}

export default useFetch