const apiKey = require('./apiKey')
const {get} = require('callback-fetch')

class WeatherClient {
    fetchWeatherData(city, callback) {
        const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`

        get(url, (body) => {callback(JSON.parse(body))})
    }
}

// client = new WeatherClient()

// client.fetchWeatherData('London', (response) => {console.log(response)})

module.exports = WeatherClient