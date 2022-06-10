import weather from "./weather";
import displayWeather from "./displayWeather";
import createDom from "./createDom";

const form = document.querySelector('.form')
const location = document.querySelector('.cityInput')
const feels = document.querySelector('.feels-text')
const feelsIcon = document.querySelectorAll('material-symbols-outlined')

form.addEventListener('submit',async (e)=>{
  e.preventDefault();
  if (location.value === '')return;
  const apiData = await weather.searchWeather(location.value)
  displayWeather.weatherResults(apiData)
  location.value = ' '

})

async function defaultCity(){
  const apiData = await weather.searchWeather('Portland')
  displayWeather.weatherResults(apiData)
}defaultCity();