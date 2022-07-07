import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './App.css';
import { SearchProvider, PokemonData, BuscadorConsumer } from './context/busqueda';
import { mostrarData } from './context/resultados';
import { Button } from '@mui/material';


export default () => <SearchProvider>
  <BuscadorConsumer/>
  <App />
</SearchProvider>

function App() {
  const buscador = PokemonData();
  const mostrar = mostrarData();
  const [position, setPosition] = useState(0);
  const [positionTwo, setPositionTwo] = useState(10);
  const [infoPokemon, setInfoPokemon] = useState([]);
  const [result, setResult] = useState([]);
  const modalNombre = useRef(null);

  useEffect(() => {
    console.log(mostrar.busquedas);
  }, [mostrar])
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1126`).then(info => {
      setInfoPokemon(info.data.results);
    });
  }, [position]);

 useEffect(() => {
    if(infoPokemon.length > 0){
      infoPokemon.slice(position, positionTwo).filter((elemento) => {
        if(elemento.name.toString().toLowerCase().includes(buscador.busquedas)){
          setResult([]);
          const url = elemento.url.split('/');
          axios.get(`https://pokeapi.co/api/v2/pokemon/${url[6]}`).then(data => {
            setResult((current) => [...current, {data: data.data}]);            
          });
        }
      });    
    }
  }, [buscador]);


  useEffect(() => {
    if(infoPokemon.length > 0){
      infoPokemon.slice(position, positionTwo).map(data => {
        const id = data.url.split('/');
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id[6]}`).then(data => {
          setResult((current) => [...current, data]);
        });
      });
    }
  }, [infoPokemon]);

  useEffect(() => {
    setResult([]);
    infoPokemon.slice(position, positionTwo).map(data => {
      const id = data.url.split('/');
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id[6]}`).then(data => {
        setResult((current) => [...current, data]);
      });
    });
  }, [position]);
 
  return (
    <div className="App">
      <h1 className='titulo'>POKEDEX DE MANUEL</h1>
      <hr></hr><br></br>
      <button className='btn btn-outline-success' onClick={() => {setPosition(position - 10); setPositionTwo(positionTwo - 10);}}>Back</button>
      <button className='btn btn-outline-success' onClick={() => {setPosition(position + 10); setPositionTwo(positionTwo + 10);}}>Next</button>
      <div className='grid'>
        {
          result.length > 0 ? result.slice(0, 10).map((data, index) => (    
            <div key={index} className="card">
              <div className="container">                
                <h4><b>{data.data.name}</b></h4> 
                <img ref={modalNombre} src={data.data.sprites.front_default} alt={data.data.name}/>
              </div>
            </div>
          )): <>
            <Button>Hola</Button>
          </>
        }
      </div>
    </div>
  );
}
