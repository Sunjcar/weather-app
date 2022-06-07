import displayWeather from "./displayWeather"


const weather = (() => {
    //Create Elements
    const container = document.createElement('div')
    container.classList.add('container')
    const header = document.createElement('header')
    const location = document.createElement('input')
    location.classList.add('cityInput')
    const form = document.createElement('form')
    form.classList.add('form')

    const display = document.createElement('div')
    display.classList.add('display')


    document.body.appendChild(container)
    container.appendChild(header)
    container.appendChild(display)
    header.appendChild(form)
    form.appendChild(location)

    //Bind Event to Form
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        async function searchWeather() {
            let city = location.value
            try {
              const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5a0e6c7a85e564f80b2d41579a9a913e`,
                { mode: "cors" });
              if (!response.ok) throw new Error(`City ${city} not found`);
              const weatherData = convertWeatherData(await response.json());
              console.log(weatherData)
              city = ''
            } catch (err) {
              alert(err);
            }
          }searchWeather();
    })

    //Function retrieves data from api object and convert it to object for display
    function convertWeatherData(data){
        const {
            sys: {country: countryName},
            name: cityName,
            main: {temp: temperature, temp_min: minTemp, feels_like: feels_like, humidity},
            wind: {speed: windSpeed},
        } = data
        return {countryName, cityName,temperature, minTemp, feels_like, humidity, windSpeed};
    }

})()


export default weather