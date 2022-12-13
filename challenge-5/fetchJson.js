const {get} = require('callback-fetch')

const fetchJson = (url, callback) => {
    const response = get(url, (body) => { return JSON.parse(body) })
    console.log(response)
    callback(response)
}

module.exports = fetchJson