import createDom from "./createDom";
import weather from "./weather";
import displayWeather from "./displayWeather";
import API_KEY from "./api";

const searchInput = document.getElementById('cityInput');
const btnSearch = document.getElementById('search');
const units = document.querySelector('.temp-units')
const temperature = document.querySelector('.temperature');
const windSpeed = document.querySelector('.windSpeed');
const feels_like = document.querySelector('.feels-like');
const dayTemp = document.querySelectorAll('.day')
const nightTemp = document.querySelectorAll('.night')

// SEARCH WITH CLICK
btnSearch.addEventListener('click', () => {
  weather.searchWeather(searchInput.value)
    .then((result) => {
      searchInput.value = '';
      displayWeather.renderAll(result);
      units.textContent = '°F'
    })
    .catch((error) => {
      alert(`Couldn't retrieve data for ${searchInput.value}:
      ${error}`);
    });
});

// SEARCH WITH ENTER
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    weather.searchWeather(searchInput.value)
    .then((result) => {
      searchInput.value = '';
      displayWeather.renderAll(result)
      units.textContent = '°F'
    })
    .catch((error) => {
      alert(`Couldn't retrieve data for ${searchInput.value}:
      ${error}`);
    });;
  }
});


units.addEventListener('click', () => {
  let day;
  let night;
  let tempC
  let feelsC 
  let windKm
  if(units.textContent === '°F'){
    tempC = displayWeather.convertFtoC(parseFloat(temperature.textContent)).toFixed(2) + '°C';
    feelsC = displayWeather.convertFtoC(parseFloat(feels_like.textContent)).toFixed(2) + '°C'
    windKm = displayWeather.convertMphToKmh(parseFloat(windSpeed.textContent)).toFixed(2) + ' km/h'
    temperature.textContent = tempC
    feels_like.textContent = feelsC
    windSpeed.textContent = windKm
    units.textContent = '°C'
  for (let i = 0; i< dayTemp.length; i++){
    day = displayWeather.convertFtoC(dayTemp[i].textContent).toFixed(1)
    dayTemp[i].textContent = day
  }
  for (let i = 0; i < nightTemp.length; i++){
    night = displayWeather.convertFtoC(nightTemp[i].textContent).toFixed(1) 
    nightTemp[i].textContent = night
  }
} else if (units.textContent === '°C'){
  tempC = displayWeather.convertCtoF(parseFloat(temperature.textContent))
  temperature.textContent = tempC.toFixed(2) + '°F';
  feelsC = displayWeather.convertCtoF(parseFloat(feels_like.textContent))
  feels_like.textContent = feelsC.toFixed(2) + '°F';
  windKm = displayWeather.convertKmhToMph(parseFloat(windSpeed.textContent))
  windSpeed.textContent = windKm.toFixed(2) + ' mp/h'

  for (let i = 0; i< dayTemp.length; i++){
    day = displayWeather.convertCtoF(dayTemp[i].textContent).toFixed(1)
    dayTemp[i].textContent = day
  }
  for (let i = 0; i < nightTemp.length; i++){
    night = displayWeather.convertCtoF(nightTemp[i].textContent).toFixed(1) 
    nightTemp[i].textContent = night
  }
  units.textContent = '°F'
}
}) 

//Default Location
function getLocalWeather () {
  let unit = 'imperial'
  // GET GEOLOCATION
  navigator.geolocation.getCurrentPosition((local) => {
    // GET API DATA BASE ON GEOLOCATION COORDINATES
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${local.coords.latitude}&lon=${local.coords.longitude}&exclude=hourly,minutely&units=${unit}&appid=${API_KEY}`
    )
      .then((resolution) => resolution.json())
      .then((data) => {  
        displayWeather.weatherResults(data);
        displayWeather.displayWeatherForecast(data.daily);
        console.log(data)
        console.log(data.daily)
      })
      .catch((error) => {
        alert(`Couldn't retrieve data for your location:
        ${error}`);  
      });
  });
};


getLocalWeather();