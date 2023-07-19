import useFetch from "./useFetch";

const getWeatherButton = () => {
  return (
    <button onClick={useFetch}>
      Get a weather report...
    </button>
  )
};

export default getWeatherButton
