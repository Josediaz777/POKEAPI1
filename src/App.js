import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [position, setPosition] = useState(0);
  const [infoPokemon, setInfoPokemon] = useState([]);
  const [result, setResult] = useState([]);
  const modalNombre = useRef(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${position}&limit=10`).then(info => {
      setInfoPokemon(info.data.results);
    });
  }, [position]);

  useEffect(() => {
    infoPokemon.map(data => {
      const id = data.url.split('/');
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id[6]}`).then(data => {
        setResult((current) => [...current, data]);
      });
    });
  }, [infoPokemon]);

  useEffect(() => {
    setResult([]);
    infoPokemon.map(data => {
      const id = data.url.split('/');
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id[6]}`).then(data => {
        setResult((current) => [...current, data]);
      });
    });
  }, [position]);
 
  return (

    <div className="App">
      <h1 className='titulo'>POKEDEX DE MANUEL</h1>
      <hr></hr>
      <button className='btn btn-outline-success' onClick={() => {setPosition(position - 10); console.log(modalNombre.current.alt);}}>Back</button>
      <button className='btn btn-outline-success' onClick={() => {setPosition(position + 10); console.log(modalNombre.current.alt);}}>Next</button>
      <div className='grid'>
        {
          result.length > 0 ? result.slice(0, 10).map((data, index) => (    
            <div key={index} className="card">
              <div className="container">                
                <h4><b>{data.data.name}</b></h4> 
                <img ref={modalNombre} src={data.data.sprites.front_default} alt={data.data.name}/>
              </div>
            </div>
          )): null
        }
      </div>
    </div>
  );
}

export default App;
