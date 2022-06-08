import weather from "./weather";
import displayWeather from "./displayWeather";
import createDom from "./createDom";

const form = document.querySelector('.form')
const location = document.querySelector('.cityInput')

form.addEventListener('submit',async (e)=>{
  e.preventDefault();
  if (location.value === '')return;
  const apiData = await weather.searchWeather(location.value)
  displayWeather.weatherResults(apiData)
})