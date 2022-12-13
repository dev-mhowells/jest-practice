const { get } = require("callback-fetch")

const fetchRepositoryInfo = (urlEnd, callback) => {
    url = `https://api.github.com/repos/${urlEnd}`
    get(url, (body) => { callback(JSON.parse(body) )})
}

module.exports = fetchRepositoryInfo