const Weather = require('./weather')

describe('Weather', () => {
    it('returns the weather in London', () => {
        const mockedWeatherClient = {
            fetchWeatherData: (city, callback) => {
                //callback fetches this:
                callback({
                    city: 'London',
                    weather: 'cloudy'
                })
            }
        }
        const weather = new Weather(mockedWeatherClient)

        weather.fetch('London')
        expect(weather.getWeatherData()).toEqual({
            city: 'London',
            weather: 'cloudy'
        })
    })
})