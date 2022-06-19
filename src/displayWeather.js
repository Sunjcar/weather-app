import weather from "./weather"

const displayWeather = (()=> {
    const units = document.querySelector('.temp-units')
    const timezone = document.getElementById('timezone');
    const city = document.querySelector('.cityName');
    const country = document.querySelector('.countryName')
    const temperature = document.querySelector('.temperature');
    const weatherType = document.querySelector('.weatherType');
    const windSpeed = document.querySelector('.windSpeed');
    const humidity = document.querySelector('.humidity');
    const feels_like = document.querySelector('.feels-like');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');
    const weatherIcon = document.getElementById('icon')
    const dayTemp = document.querySelectorAll('.day')
    const nightTemp = document.querySelectorAll('.night')

  function weatherResults (data) {

      timezone.textContent = data.timezone;
      temperature.textContent = `${data.current.temp} °F`;
      weatherType.textContent = data.current.weather[0].main;
      windSpeed.textContent = `${data.current.wind_speed} mp/h`;
      humidity.textContent = `${data.current.humidity}%`;
      feels_like.textContent = `${data.current.feels_like}°F`;
      sunrise.textContent = window
        .moment((data.current.sunrise + data.timezone_offset - 7200) * 1000)
        .format('HH:mm a');
      sunset.textContent = window
        .moment((data.current.sunset + data.timezone_offset - 7200) * 1000)
        .format('HH:mm a');

        if(weatherType.textContent === 'Rain'){
          document.body.style.backgroundImage='url(images/Rain.jpg)'
          weatherIcon.textContent = 'rainy'
      } else if (weatherType.textContent === 'Clouds'){
          document.body.style.backgroundImage='url(images/Clouds.jpg)'
          weatherIcon.textContent = 'cloudy'
      } else if (weatherType.textContent === 'Sunshine' || weatherType.textContent === 'Clear'){
          document.body.style.backgroundImage='url(images/Sunny.jpg)'
          weatherIcon.textContent = 'sunny'
      } else if (weatherType.textContent === 'Foggy' || weatherType.textContent === 'Haze'
          || weatherType.textContent === 'Mist'){
          document.body.style.backgroundImage ='url(images/Foggy.jpg)'
          weatherIcon.textContent = 'foggy'
      } else if (weatherType.textContent === 'Storm'){
          document.body.style.backgroundImage='url(images/Storm.jpg)'
          weatherIcon.textContent = 'cloudy'
      } 
      units.addEventListener('click', () => {
        let day;
        let night;
        let tempC
        let feelsC 
        let windKm
        if(units.textContent === '°F'){
          tempC = convertFtoC(data.current.temp).toFixed(2) + '°C';
          feelsC = convertFtoC(data.current.feels_like).toFixed(2) + '°C'
          windKm = convertMphToKmh(data.current.wind_speed).toFixed(2) + ' km/h'
          temperature.textContent = tempC
          feels_like.textContent = feelsC
          windSpeed.textContent = windKm
          units.textContent = '°C'
        for (let i = 0; i< dayTemp.length; i++){
          day = convertFtoC(dayTemp[i].textContent).toFixed(1)
          dayTemp[i].textContent = day
        }
        for (let i = 0; i < nightTemp.length; i++){
          night = convertFtoC(nightTemp[i].textContent).toFixed(1) 
          nightTemp[i].textContent = night
        }
      } else if (units.textContent === '°C'){
        tempC = convertCtoF(parseFloat(temperature.textContent))
        console.log(tempC)
        temperature.textContent = tempC.toFixed(2) + '°F';
        feelsC = convertCtoF(parseFloat(feels_like.textContent))
        feels_like.textContent = feelsC.toFixed(2) + '°F';
        windKm = convertKmhToMph(parseFloat(windSpeed.textContent))
        windSpeed.textContent = windKm.toFixed(2) + ' mp/h'

        for (let i = 0; i< dayTemp.length; i++){
          day = convertCtoF(dayTemp[i].textContent).toFixed(1)
          dayTemp[i].textContent = day
        }
        for (let i = 0; i < nightTemp.length; i++){
          night = convertCtoF(nightTemp[i].textContent).toFixed(1) 
          nightTemp[i].textContent = night
        }
        units.textContent = '°F'
      }
      }) 
  }

  function displayWeatherForecast (data) {
    for (let i = 0; i < (data.length - 1); i++) {
      document.getElementById(`day-${i}`).textContent = window.moment(data[i].dt*1000).format('ddd');
      document.getElementById(`day-temp-${i}`).textContent = data[i].temp.day;
      document.getElementById(`night-temp-${i}`).textContent = data[i].temp.night;
      document.getElementById(`icon-${i}`).src = `https://openweathermap.org/img/wn/${data[i].weather[0].icon}@2x.png`;
 
  };
  }

  function convertFtoC(tempInF) {
    const tempInC = (tempInF - 32) * (5 / 9);
    return tempInC;
  }

  function convertCtoF(temp) {
    const tempInF = (temp * 1.8) + 32;
    return tempInF;
  }

  function convertKmhToMph(kmh) {
    const mph = kmh * 0.6213711922;
    return mph;
  }

  function convertMphToKmh(mph) {
    const kmph = mph * 1.609344;
    return kmph;
  }

  function renderAll(data) {
    city.textContent = data.geoData[0].name
    country.textContent = data.geoData[0].country;
    weatherResults(data.forecastData);
    displayWeatherForecast(data.forecastData.daily);
  }

  
  return {weatherResults,displayWeatherForecast,renderAll}
})()

export default displayWeather;