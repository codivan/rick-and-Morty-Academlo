import { useState } from 'react'
import './App.css'
import useRest from './hooks/useRest'
import LocationInfo from './components/LocationInfo'
import ResidentInfo from './components/ResidentInfo'

function App() {

  const [searchInput, setSearchInput] = useState('');

  let randomLocation;

  searchInput===''? randomLocation=Math.floor(Math.random()*127): randomLocation=searchInput;

  const url = `https://rickandmortyapi.com/api/location/${randomLocation}`;

  const results = useRest(url, searchInput);

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchInput(e.target.search.value)
  }

  return (
    <div className="App">
      <div className='title-bg'>
        <div className='title'>Rick<span>and</span>Morty</div>
        <div className='title title-middle'>Rick<span>and</span>Morty</div>
        <div className='title title-bottom'>Rick<span>and</span>Morty</div>
      </div>
      <div className='title-divider'></div>
      <div className='search-bar'>
        <form onSubmit={handleSubmit}>
        <input id='search' type="text" />
        <button>Search</button>
        </form>
      </div>
      <LocationInfo  location={results}/>

      <div className='content'>
        {
          results?.residents.map(url => (
            <ResidentInfo key={url} url={url}/>
          ))
        }
      </div>
    </div>
  )
}

export default App