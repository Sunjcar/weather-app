import createDom from "./createDom";
import weather from "./weather";
import displayWeather from "./displayWeather";
import API_KEY from "./api";

const units = document.querySelector('.temp-units')
const searchInput = document.getElementById('cityInput');
const btnSearch = document.getElementById('search');

// SEARCH WITH CLICK
btnSearch.addEventListener('click', () => {
  weather.searchWeather(searchInput.value)
    .then((result) => {
      searchInput.value = '';
      displayWeather.renderAll(result);
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
    })
    .catch((error) => {
      alert(`Couldn't retrieve data for ${searchInput.value}:
      ${error}`);
    });;
  }
});


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
      })
      .catch((error) => {
        alert(`Couldn't retrieve data for your location:
        ${error}`);  
      });
  });
};


getLocalWeather();