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
        const weatherIcon = document.getElementById('icon')

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
            weatherIcon.textContent = 'rainy'
        } else if (weatherType.textContent === 'Clouds' || weatherType.textContent === 'Clear'){
            document.body.style.backgroundImage='url(images/Clouds.jpg)'
            weatherIcon.textContent = 'cloudy'
        } else if (weatherType.textContent === 'Sunshine'){
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
    }

    return {weatherResults}
})()

export default displayWeather;