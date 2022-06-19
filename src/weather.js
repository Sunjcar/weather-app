import API_KEY from "./api";
import displayWeather from "./displayWeather";
const weather = (() => {
  const units = document.querySelector('.temp-units')
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

  units.addEventListener('click', (data) => {
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
  return {searchWeather}
})()


export default weather



