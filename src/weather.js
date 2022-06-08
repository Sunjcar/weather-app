const weather = (() => {

    //Bind Event to Form
    async function searchWeather(city) {
            try {
              const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5a0e6c7a85e564f80b2d41579a9a913e`,
                { mode: "cors" });
              if (!response.ok) throw new Error(`City ${city} not found`);
              const weatherData = convertWeatherData(await response.json());
              console.log(weatherData)
              return weatherData
            } catch (err) {
              alert(err);
            }
    }return {searchWeather};

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