const GithubClient = require("./githubClient")
const Github = require('./github')

describe('Github', () => {
    it('gets the repo data fetched by the GithubClient class', () => {
        // mock client class
        const mockedClient = {
            // mock method
            fetchRepositoryData: (repoName, callback) => {
                // calls callback function
                callback({
                    name: 'sinatra/sinatra',
                    description: 'Some fake description',
                })
            }
        }
    //     We can now call
    //    `mockedClient.fetchRepositoryData('repo-name', callbackFunction)`
    //     and get the expected behaviour (our callbackFunction will be called 
    //     with the fake repo data)
        const github = new Github(mockedClient);

        github.fetch('sinatra/sinatra')

        expect(github.getRepoData()).toEqual({
            name: 'sinatra/sinatra',
            description: 'Some fake description'
        })
    })
})