const WeatherClient = require("./weatherClient")


class Weather {
    constructor(client) {
        this.client = client
        this.body = []
        this.param = ''
    }
    fetch(city) {
        this.param = city
        // this.client.fetchWeatherData(city, (body) => { this.body = body })
        this.client.fetchWeatherData(city, (body) => { return body })
    }
    getWeatherData() {
        fetch(this.param)
    }
}

client = new WeatherClient()
weather = new Weather(client)
weather.fetch('London')
setTimeout(() => {console.log(weather.getWeatherData())}, 2000)

module.exports = Weather