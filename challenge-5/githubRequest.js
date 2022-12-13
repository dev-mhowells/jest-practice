// load get function
const { get } = require('callback-fetch');
const fetchJson = require('./fetchJson');
const fetchRepositoryInfo = require('./fetchRepositoryInfo');

// create handler callback
const handleReceivedResponse = (body) => {
    console.log('body', body)
}

const url = 'https://api.github.com/repos/sinatra/sinatra';

// get(url, handleReceivedResponse)

// get(url, (body) => {
//     console.log('body:', JSON.parse(body))
// })

const stringValue = '{ "name": "John" }'
const objectValue = JSON.parse(stringValue)

// console.log(stringValue)
// console.log(objectValue.name)

// const fetcher = (url, callback) => {
//     get(url, (body) => { callback(JSON.parse(body)) })
// }

// fetcher('https://jsonplaceholder.typicode.com/todos', (response) => {
//   console.log(response);
// })

// fetchRepositoryInfo('sinatra/sinatra', (response) => {console.log( "TEST", response)})