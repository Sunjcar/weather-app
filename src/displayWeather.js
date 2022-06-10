import weather from "./weather";

const displayWeather = (()=> {
    function weatherResults (apiData){
        if (!apiData) return
        const display = document.querySelector('.display');
        display.classList.add('active')

        const countryName = document.querySelector('.countryName')
        const cityName = document.querySelector('.cityName')
        const temperature = document.querySelector('.temperature')
       /*  const minTemp = document.querySelector('.minTemp') */
        const feels_like = document.querySelector('.feels-like')
        const humidity = document.querySelector('.humidity')
        const windSpeed = document.querySelector('.windSpeed')
        const weatherType = document.querySelector('.weatherType')
        const weatherIcon = document.querySelector('.icon')

        countryName.textContent =`${apiData.countryName}`
        cityName.textContent = `${apiData.cityName}`
        temperature.textContent = `${apiData.temperature}°C`
      /*   minTemp.textContent = `Low Temp:${apiData.minTemp}°C` */
        feels_like.textContent = `${apiData.feels_like}°C`
        humidity.textContent = `${apiData.humidity}%`
        windSpeed.textContent = `${apiData.windSpeed} km/h`
        weatherType.textContent = `${apiData.weatherType}`
      

        if(weatherType.textContent === 'Rain'){
            document.body.style.backgroundImage='url(images/Rain.jpg)'
            weatherIcon.classList = 'material-symbols-outlined'
            weatherIcon.textContent = 'rainy'
        }
        if (weatherType.textContent === 'Clouds'){
            document.body.style.backgroundImage='url(images/Clouds.jpg)'
            weatherIcon.textContent = 'cloud'
        }
    }
    return {weatherResults}
})()

export default displayWeather;