import React, {useEffect, useState} from 'react'

export default function App() {

  const [backendData, setBackendData] = useState('')
  const [country, setCountry] = useState('London')

  useEffect(() => {
    // this is actually a get request to the backend api
    // need axios for post req?
    fetch(`/api/${country}`).then(
      response => response.json()
    ).then(data => {setBackendData(data)})
  }, [country])

  const getSeoul = () => {
    setCountry('Seoul')
  }

  const getLondon = () => {
    setCountry('London')
  }

  const weatherData = backendData && backendData.map((data) => {
  return (
  <div>
    <p>city: {data.name}</p>
    <p>visibility: {data.visibility}</p>
    <p>temperature: {data.main.temp}</p>
    <p>weather: {data.weather[0].main}</p>
  </div>)})

  return (
    <div>
      <h1>weather</h1>
      {!weatherData ? 'loading' : weatherData}
      {country === 'London' ? 
            <button onClick={getSeoul}>view weather in Seoul</button>
            :
            <button onClick={getLondon}>view weather in London</button>
          }
    </div>
  )
}