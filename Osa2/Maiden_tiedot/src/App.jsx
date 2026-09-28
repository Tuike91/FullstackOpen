import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ filter, handleFilterChange}) => {
  return (
    <div>
      Filter: <input
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  )
}

const Countries =({countries}) => {
  if (countries.length > 10) {
    return <p>Too many matches, spesify another filter</p>
  }
  if (countries.length === 1) {
    const country = countries[0]
    console.log(country)
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>capital: {country.capital}</p>
        <p>area: {country.area}</p>
        <h2>languages</h2>
          <ul>
            {Object.values(country.languages).map(language =>
              <li key={language}>{language}</li>
            )}
          </ul>

          <img
            src={country.flags.png}
            alt={`Flag og ${country.name.common}`}
          />
      </div>
    )
  }
  return (
    <div>
      {countries.map(country =>
        <p key={country.name.common}> {country.name.common}</p>
      )}
    </div>
  )

}

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)

      })
  }, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const countriesToShow = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )
  console.log(countriesToShow)


  return (
    <div>
      <Filter
          filter={filter}
          handleFilterChange={handleFilterChange}
      />

      <Countries countries= {countriesToShow} />
    </div>

  )
}
export default App