import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async() =>
  {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCharacters(data.results);
  }

  useEffect(()=>
  {
    getCharacters();
  }, [])

  return (
    <>
      <h1>Rickymartin Characters</h1>
      <br />
      {characters.map((character)=>
      {
        console.log(character)
        return(
          <>
            <div className='card'>
              <div>
                <p>{character.name}</p>
                <img src={character.image}/>
              </div>
              <div className='info'>
                <p>
                  Gender: {character.gender}
                </p>
                <p>
                  Status: {character.status}
                </p>
                <p>
                  Location: {character.location.name}
                </p>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default App
