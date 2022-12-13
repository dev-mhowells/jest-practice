const GithubClient = require('./githubClient')

class Gitub {
    constructor(client) {
        this.client = client
        this.body = []
    }
    fetch(urlEnd) {
        this.client.fetchRepositoryData(urlEnd, (body) => { this.body = body })
    }
    getRepoData() {
        return this.body
    }
}

module.exports = Gitub

// const client = new GithubClient()

// const github = new Gitub(client)

// github.fetch('sinatra/sinatra')

// setTimeout(() => { console.log(github.getRepoData()) }, 1000)


