express = require('express')
apiKey = require('./apiKey')
const {get} = require('callback-fetch')
const app = express()
const port = 5000

// make a thing with 2 pages  - view weather, where you can enter city and save
// current weather, - view saved weather where you can view and delete saved
// weather
// keep simple - use routes, models, react
// find out how to test it
// add controllers

function fetchWeatherData(city, callback) {
        const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
        get(url, (body) => {callback(JSON.parse(body))})
    }    

app.get('/', (req, res) => {
    res.send('this is a simple server')
})

app.get('/api/:country', (req, res) => {
    console.log("this is params", req.params.country)
    fetchWeatherData(req.params.country, (body) => { res.json([body]) })
})

console.log(`Server listening on localhost:${port}`)
app.listen(port)