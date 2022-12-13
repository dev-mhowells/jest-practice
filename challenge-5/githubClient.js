const { get } = require("callback-fetch");

class GithubClient {
    fetchRepositoryData(urlEnd, callback) {
        const url = `https://api.github.com/repos/${urlEnd}`
        get(url, (body) => { callback(JSON.parse(body) )})
    }
}

module.exports = GithubClient

// const client = new GithubClient()

// client.fetchRepositoryData('sinatra/sinatra', (response) => {console.log( "TEST", response)})