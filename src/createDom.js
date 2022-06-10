const createDom = (() => {
    function createEl(){
    const container = document.createElement('div')
    container.classList.add('container')
    const header = document.createElement('header')
    const location = document.createElement('input')
    location.classList.add('cityInput')
    const form = document.createElement('form')
    form.classList.add('form')
    const display = document.createElement('div')
    display.classList.add('display')
    const displayInfo = document.createElement('div')
    displayInfo.classList.add('weatherInfo')
    const displayDetails = document.createElement('div')
    displayDetails.classList.add('weatherDetails')
    const countryName = document.createElement('h1')
    countryName.classList.add('countryName')
    const cityName = document.createElement('h3')
    cityName.classList.add('cityName')
    const temperature = document.createElement('p')
    temperature.classList.add('temperature')
    /* const minTemp = document.createElement('p')
    minTemp.classList.add('minTemp') */
    const feels_like = document.createElement('p')
    feels_like.classList.add('feels-like')
    const feelsContent = document.createElement('div')
    feelsContent.classList.add('weather-content')
    const feelsIcon = document.createElement('span')
    feelsIcon.classList.add('material-symbols-outlined')
    feelsIcon.textContent = 'thermostat'
    const feelsText = document.createElement('p')
    feelsText.classList.add('feels-text')
    feelsText.textContent = 'Feels Like:'

    const humidity = document.createElement('p')
    humidity.classList.add('humidity')
    const humidityContent = document.createElement('div')
    humidityContent.classList.add('weather-content')
    const humidityIcon = document.createElement('span')
    humidityIcon.classList.add('material-symbols-outlined')
    humidityIcon.textContent = 'humidity_mid'
    const humidityText = document.createElement('p')
    humidityText.classList.add('humidity-text')
    humidityText.textContent = 'Humidity:'

    const windSpeed = document.createElement('p')
    windSpeed.classList.add('windSpeed')
    const windContent = document.createElement('div')
    windContent.classList.add('weather-content')
    const windIcon = document.createElement('span')
    windIcon.classList.add('material-symbols-outlined')
    windIcon.textContent = 'air'
    const windText = document.createElement('p')
    windText.classList.add('wind-text')
    windText.textContent = 'Wind Speed'   

    /* const weatherContent = document.createElement('div')
    weatherContent.classList.add('weather-content') */
    const weatherType = document.createElement('p')
    weatherType.classList.add('weatherType')
    const weatherIcon = document.createElement('span')
    weatherIcon.classList.add('icon')

    document.body.appendChild(container)
    container.appendChild(header)
    container.appendChild(display)
    header.appendChild(form)
    form.appendChild(location)
    display.appendChild(displayInfo)
    display.appendChild(displayDetails)
    displayInfo.appendChild(countryName)
    displayInfo.appendChild(cityName)
    displayInfo.appendChild(weatherType)
    displayInfo.appendChild(weatherIcon)
    displayInfo.appendChild(temperature)
  /*   display.appendChild(minTemp) */
    displayDetails.appendChild(feelsContent)
    feelsContent.appendChild(feelsIcon)
    feelsContent.appendChild(feelsText)
    displayDetails.appendChild(feels_like)
    displayDetails.appendChild(humidityContent)
    humidityContent.appendChild(humidityIcon)
    humidityContent.appendChild(humidityText)
    displayDetails.appendChild(humidity)
    displayDetails.appendChild(windContent)
    windContent.append(windIcon)
    windContent.append(windText)
    displayDetails.appendChild(windSpeed)
}createEl();

})()

export default createDom;