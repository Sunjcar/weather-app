const weather = (() => {
    const location = document.createElement('input')
    const form = document.createElement('form')
    document.body.appendChild(form)
    form.appendChild(location)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        async function searchWeather(city) {
            let city = location.value
            try {
              const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5a0e6c7a85e564f80b2d41579a9a913e`,
                { mode: "cors" });
              if (!response.ok) throw new Error(`City ${city} not found`);
              const weatherData = await response.json();
              console.log(weatherData)
            } catch (err) {
              alert(err);
            }
          }searchWeather();
    })
})()