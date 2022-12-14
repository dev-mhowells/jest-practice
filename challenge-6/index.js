const apiKey = require('./apiKey')
const {get} = require('callback-fetch')

const city = 'London'
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`

let weatherData = null

// get(apiUrl, (response) => {
//     weatherData = JSON.parse(response)
//     console.log(weatherData)
// })

// fetch(apiUrl)
// .then((data) => { return data.json()})
// .then((response) => {console.log(response)})

// how to get returned data?
// is this the only way/ correct way?
// is there a way to make the data returned available on a global scope?

const getWeather1 = async () => {
    response = await fetch(apiUrl)
    data = await response.json()
    return data
}

const printResult = async () => {
    data = await getWeather1()
    console.log(data)
}

// WHY DOES THIS NOT WORK:

// const getWeather = async () => {
//     let responsey
//     await get(apiUrl, (response) => { responsey = JSON.parse(response) })
//     await console.log(responsey)
// }

// BUT THIS DOES:

const getWeather = () => {
    let responsey
    // first create the function which will act on the returned object
    function test(ting) { 
        responsey = ting; 
        console.log(responsey) 
    }
    // then inside get response, call that function on the returned object
    get(apiUrl, (response) => { test(JSON.parse(response)) })
}

getWeather()
// console.log(getWeather())
// printResult()

console.log('requesting weather data')