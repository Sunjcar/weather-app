const createDom = (() => {
function createEl(){
     //Container for form and Timezone
    const container = document.createElement('div')
    container.classList.add('container')
    const header = document.createElement('header')
    const timeContent = document.createElement('div')
    timeContent.classList.add('time-content')
    const timezoneText = document.createElement('p')
    timezoneText.classList.add('timezone-text')
    timezoneText.textContent = 'Timezone:'
    const timezone = document.createElement('p')
    timezone.classList.add('timezone')
    timezone.setAttribute('id','timezone')
    const location = document.createElement('input')
    location.classList.add('cityInput')
    location.setAttribute('id','cityInput')
    const searchBtn = document.createElement('button')
    searchBtn.classList.add('search')
    searchBtn.setAttribute('id','search')
    searchBtn.textContent = 'Search'
    const form = document.createElement('div')
    form.classList.add('search-content')

    //display container for current weather
    const display = document.createElement('div')
    display.classList.add('display')

    //Left container displays country,city, and temperature, weather icon
    const displayInfo = document.createElement('div')
    displayInfo.classList.add('weatherInfo')
    const countryName = document.createElement('h1')
    countryName.classList.add('countryName')
    const cityName = document.createElement('h3')
    cityName.classList.add('cityName')
    const temperature = document.createElement('p')
    temperature.classList.add('temperature')
    const weatherType = document.createElement('p')
    weatherType.classList.add('weatherType')
    const weatherIcon = document.createElement('span')
    weatherIcon.classList = 'material-symbols-outlined'
    weatherIcon.setAttribute('id', 'icon')

    //Right Container displays humidity, feels-like, windspeed
    const displayDetails = document.createElement('div')
    displayDetails.classList.add('weatherDetails')
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

    //Displays Sunrise and Sunset time
    const sunrise = document.createElement('div')
    sunrise.setAttribute('id', 'sunrise')
    const sunriseText = document.createElement('p')
    sunriseText.textContent = 'Sunrise:'
    const sunset = document.createElement('div')
    sunset.setAttribute('id', 'sunset')
    const sunsetText = document.createElement('p')
    sunsetText.textContent = 'Sunset:'

    //Append elements to display
    document.body.appendChild(container)
    container.appendChild(header)
    container.appendChild(display)
    header.appendChild(form)
    header.appendChild(timeContent)
    timeContent.appendChild(timezoneText)
    timeContent.appendChild(timezone)
    form.appendChild(location)
    form.appendChild(searchBtn)
    display.appendChild(displayInfo)
    display.appendChild(displayDetails)
    displayInfo.appendChild(countryName)
    displayInfo.appendChild(cityName)
    displayInfo.appendChild(weatherType)
    displayInfo.appendChild(weatherIcon)
    displayInfo.appendChild(temperature)
    displayInfo.appendChild(sunriseText)
    displayInfo.appendChild(sunset)
    displayInfo.appendChild(sunsetText)
    displayInfo.appendChild(sunrise)
 
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

    //Display week forecast
    const displayForecast = document.createElement('div')
    displayForecast.classList.add('display-forecast')
    const forecast = document.createElement('div')
    forecast.classList.add('forecast-container')
    const day = document.createElement('div')
    day.setAttribute('id','day-0')
    const icon = document.createElement('img')
    icon.setAttribute('id','icon-0')
    icon.setAttribute('src', '')
    const  forecastData = document.createElement('div')
    forecastData.classList.add('forecast-data')
    const forecastDay = document.createElement('div')
    forecastDay.textContent = 'Day:' + ' '
    const dayTemp = document.createElement('span')
    dayTemp.setAttribute('id','day-temp-0')
    const forecastNight = document.createElement('div')
    forecastNight.textContent = 'Night:' + ' '
    const nightTemp = document.createElement('span')
    nightTemp.setAttribute('id','night-temp-0')

    container.appendChild(displayForecast)
    displayForecast.appendChild(forecast)
    forecast.appendChild(day)
    forecast.appendChild(icon)
    forecast.appendChild(forecastData)
    forecastData.appendChild(forecastDay)
    forecastDay.appendChild(dayTemp)
    forecastData.appendChild(forecastNight)
    forecastNight.appendChild(nightTemp)

    //Day 2 Forecast
    const forecast1 = document.createElement('div')
    forecast1.classList.add('forecast-container')
    const day1 = document.createElement('div')
    day1.setAttribute('id','day-1')
    const icon1 = document.createElement('img')
    icon1.setAttribute('id','icon-1')
    icon1.setAttribute('src', '')
    const  forecastData1 = document.createElement('div')
    forecastData1.classList.add('forecast-data')
    const forecastDay1 = document.createElement('div')
    forecastDay1.textContent = 'Day:' + ' '
    const dayTemp1 = document.createElement('span')
    dayTemp1.setAttribute('id','day-temp-1')
    const forecastNight1 = document.createElement('div')
    forecastNight1.textContent = 'Night:' + ' '
    const nightTemp1 = document.createElement('span')
    nightTemp1.setAttribute('id','night-temp-1')

    displayForecast.appendChild(forecast1)
    forecast1.appendChild(day1)
    forecast1.appendChild(icon1)
    forecast1.appendChild(forecastData1)
    forecastData1.appendChild(forecastDay1)
    forecastDay1.appendChild(dayTemp1)
    forecastData1.appendChild(forecastNight1)
    forecastNight1.appendChild(nightTemp1)

    //Day 3 Forecast
    const forecast2 = document.createElement('div')
    forecast2.classList.add('forecast-container')
    const day2 = document.createElement('div')
    day2.setAttribute('id','day-2')
    const icon2 = document.createElement('img')
    icon2.setAttribute('id','icon-2')
    icon2.setAttribute('src', '')
    const  forecastData2 = document.createElement('div')
    forecastData2.classList.add('forecast-data')
    const forecastDay2 = document.createElement('div')
    forecastDay2.textContent = 'Day:' + ' '
    const dayTemp2 = document.createElement('span')
    dayTemp2.setAttribute('id','day-temp-2')
    const forecastNight2 = document.createElement('div')
    forecastNight2.textContent = 'Night:' + ' '
    const nightTemp2 = document.createElement('span')
    nightTemp2.setAttribute('id','night-temp-2')

    displayForecast.appendChild(forecast2)
    forecast2.appendChild(day2)
    forecast2.appendChild(icon2)
    forecast2.appendChild(forecastData2)
    forecastData2.appendChild(forecastDay2)
    forecastDay2.appendChild(dayTemp2)
    forecastData2.appendChild(forecastNight2)
    forecastNight2.appendChild(nightTemp2)

    //Day 4 Forecast
    const forecast3 = document.createElement('div')
    forecast3.classList.add('forecast-container')
    const day3 = document.createElement('div')
    day3.setAttribute('id','day-3')
    const icon3 = document.createElement('img')
    icon3.setAttribute('id','icon-3')
    icon3.setAttribute('src', '')
    const  forecastData3 = document.createElement('div')
    forecastData3.classList.add('forecast-data')
    const forecastDay3 = document.createElement('div')
    forecastDay3.textContent = 'Day:' + ' '
    const dayTemp3 = document.createElement('span')
    dayTemp3.setAttribute('id','day-temp-3')
    const forecastNight3 = document.createElement('div')
    forecastNight3.textContent = 'Night:' + ' '
    const nightTemp3 = document.createElement('span')
    nightTemp3.setAttribute('id','night-temp-3')

    displayForecast.appendChild(forecast3)
    forecast3.appendChild(day3)
    forecast3.appendChild(icon3)
    forecast3.appendChild(forecastData3)
    forecastData3.appendChild(forecastDay3)
    forecastDay3.appendChild(dayTemp3)
    forecastData3.appendChild(forecastNight3)
    forecastNight3.appendChild(nightTemp3)

    //Day 5 Forecast
    const forecast4 = document.createElement('div')
    forecast4.classList.add('forecast-container')
    const day4 = document.createElement('div')
    day4.setAttribute('id','day-4')
    const icon4 = document.createElement('img')
    icon4.setAttribute('id','icon-4')
    icon4.setAttribute('src', '')
    const  forecastData4 = document.createElement('div')
    forecastData4.classList.add('forecast-data')
    const forecastDay4 = document.createElement('div')
    forecastDay4.textContent = 'Day:' + ' '
    const dayTemp4 = document.createElement('span')
    dayTemp4.setAttribute('id','day-temp-4')
    const forecastNight4 = document.createElement('div')
    forecastNight4.textContent = 'Night:' + ' '
    const nightTemp4 = document.createElement('span')
    nightTemp4.setAttribute('id','night-temp-4')

    displayForecast.appendChild(forecast4)
    forecast4.appendChild(day4)
    forecast4.appendChild(icon4)
    forecast4.appendChild(forecastData4)
    forecastData4.appendChild(forecastDay4)
    forecastDay4.appendChild(dayTemp4)
    forecastData4.appendChild(forecastNight4)
    forecastNight4.appendChild(nightTemp4)  

    //Day 6 Forecast
    const forecast5 = document.createElement('div')
    forecast5.classList.add('forecast-container')
    const day5 = document.createElement('div')
    day5.setAttribute('id','day-5')
    const icon5 = document.createElement('img')
    icon5.setAttribute('id','icon-5')
    icon5.setAttribute('src', '')
    const  forecastData5 = document.createElement('div')
    forecastData5.classList.add('forecast-data')
    const forecastDay5 = document.createElement('div')
    forecastDay5.textContent = 'Day:' + ' '
    const dayTemp5 = document.createElement('span')
    dayTemp5.setAttribute('id','day-temp-5')
    const forecastNight5 = document.createElement('div')
    forecastNight5.textContent = 'Night:' + ' '
    const nightTemp5 = document.createElement('span')
    nightTemp5.setAttribute('id','night-temp-5')

    displayForecast.appendChild(forecast5)
    forecast5.appendChild(day5)
    forecast5.appendChild(icon5)
    forecast5.appendChild(forecastData5)
    forecastData5.appendChild(forecastDay5)
    forecastDay5.appendChild(dayTemp5)
    forecastData5.appendChild(forecastNight5)
    forecastNight5.appendChild(nightTemp5)  


    //Day 7 Forecast
    const forecast6 = document.createElement('div')
    forecast6.classList.add('forecast-container')
    const day6 = document.createElement('div')
    day6.setAttribute('id','day-6')
    const icon6 = document.createElement('img')
    icon6.setAttribute('id','icon-6')
    icon6.setAttribute('src', '')
    const  forecastData6 = document.createElement('div')
    forecastData6.classList.add('forecast-data')
    const forecastDay6 = document.createElement('div')
    forecastDay6.textContent = 'Day:' + ' '
    const dayTemp6 = document.createElement('span')
    dayTemp6.setAttribute('id','day-temp-6')
    const forecastNight6 = document.createElement('div')
    forecastNight6.textContent = 'Night:' + ' '
    const nightTemp6 = document.createElement('span')
    nightTemp6.setAttribute('id','night-temp-6')

    displayForecast.appendChild(forecast6)
    forecast6.appendChild(day6)
    forecast6.appendChild(icon6)
    forecast6.appendChild(forecastData6)
    forecastData6.appendChild(forecastDay6)
    forecastDay6.appendChild(dayTemp6)
    forecastData6.appendChild(forecastNight6)
    forecastNight6.appendChild(nightTemp6)   
}createEl()


})()

export default createDom