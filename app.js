const weather = (() => {
    const location = document.createElement('input')
    const form = document.createElement('form')
    document.body.appendChild(form)
    form.appendChild(location)

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        async function searchWeather(){
           
            try{
                const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=5a0e6c7a85e564f80b2d41579a9a913e`,
                    {mode: 'cors'})
                const weatherData = convertData(await response.json())
                console.log(weatherData)
            }catch{
                console.log('Not a real location')
            }
        }searchWeather();
    })
})()