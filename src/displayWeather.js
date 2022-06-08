const displayWeather = (()=> {
    function weatherResults (apiData){
        if (!apiData) return
        const display = document.querySelector('.display');
        display.classList.add('active')

        const countryName = document.querySelector('.countryName')
        const cityName = document.querySelector('.cityName')
        const temperature = document.querySelector('.temperature')
        const minTemp = document.querySelector('.minTemp')
        const feels_like = document.querySelector('.feels-like')
        const humidity = document.querySelector('.humidity')
        const windSpeed = document.querySelector('.windSpeed')

        countryName.textContent =`${apiData.countryName}`
        cityName.textContent = `${apiData.cityName}`
        temperature.textContent = `Temp: ${apiData.temperature}`
        minTemp.textContent = `Low Temp:${apiData.minTemp}`
        feels_like.textContent = `Feels Like:${apiData.feels_like}`
        humidity.textContent = `Humidity: ${apiData.humidity}`
        windSpeed.textContent = `Wind: ${apiData.windSpeed} km/h`
    }
    return {weatherResults}
})()

export default displayWeather;