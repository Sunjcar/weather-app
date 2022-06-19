import API_KEY from "./api";
import displayWeather from "./displayWeather";
const weather = (() => {
  async function searchWeather(city) {
    try {
    // GET COORDINATES
    const response= await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`);
    const geoData = await response.json();
    if (!response.ok) throw new Error(`${city} is not a city`);
    // FORECAST DATA
    const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${geoData[0].lat}&lon=${geoData[0].lon}&exclude=hourly,minutely&units=imperial&appid=${API_KEY}`);
    const forecastData = await forecastRes.json();
    console.log(forecastData)
    return { geoData, forecastData };j
          } catch (err) {
            `Couldn't retrieve data for ${city.value}:
      ${err}`;
          }
  };

  return {searchWeather}
})()


export default weather



