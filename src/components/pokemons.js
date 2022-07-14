import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tooltip from '@mui/material/Tooltip';

function Pokemon() {
    const url = window.location.pathname.split('/');
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${url[2]}`).then(data => {
            setPokemon(data.data);
        });
    }, []);
    return (
        <div className='containerpok'>
            {
                pokemon.types && (

                    <div className="card poke-card" style={pokemon.types[0].type.name === "steel" ? { background: '#e1e1e1' } : pokemon.types[0].type.name === "water" ? { background: '#B0E2FF' } : pokemon.types[0].type.name === "bug" ? { background: '#bed493' } : pokemon.types[0].type.name === "dragon" ? { background: -'#b2a0d4' } : pokemon.types[0].type.name === "electric" ? { background: '#f1e49d' } : pokemon.types[0].type.name === "ghost" ? { background: '#a1b7cc' } : pokemon.types[0].type.name === "fire" ? { background: '#fbd7b3' } : pokemon.types[0].type.name === "fairy" ? { background: '#ffd6ff' } : pokemon.types[0].type.name === "ice" ? { background: '#c9e4ed' } : pokemon.types[0].type.name === "fighting" ? { background: '#f9bcbc' } : pokemon.types[0].type.name === "regular" ? { background: '#DDCCAA' } : pokemon.types[0].type.name === "plant" ? { background: '#cdf2bb' } : pokemon.types[0].type.name === "psychic" ? { background: '#ffd4de' } : pokemon.types[0].type.name === "rock" ? { background: '#edcfb1' } : pokemon.types[0].type.name === "sinister" ? { background: '#A9A9A9' } : pokemon.types[0].type.name === "ground" ? { background: '#A9A9A9' } : pokemon.types[0].type.name === "poison" ? { background: '#CC88BB' } : pokemon.types[0].type.name === "flying" ? { background: '#BAAAFF' } : { background: 'white' }}>
                        <div>
                            <img src={pokemon.sprites && pokemon.sprites.front_default} width={200} height={200} alt="..." />
                        </div>
                        <div className="card-body" style={{ textAlign: 'center' }}>
                            <h5 className="card-title">{pokemon && pokemon.name}</h5>
                            <Tooltip title={
                                pokemon.moves.length > 0 ? pokemon.moves.slice(0, 10).map((data, index) => (
                                    <li key={index}>{data.move.name}</li>
                                )) : (
                                    <li>No hay movimientos</li>
                                )
                            } placement='top'>
                                <button className='btn btn-outline-dark'>Movimientos</button>
                            </Tooltip>
                            <Tooltip title={
                                pokemon.abilities.length > 0 ? pokemon.abilities.slice(0, 10).map((data, index) => (
                                    <li key={index}>{data.ability.name}</li>
                                )) : (
                                    <li>No hay habilidades</li>
                                )
                            } placement='top'>
                                <button className='btn btn-outline-success'>Habilidades</button>
                            </Tooltip>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

export default Pokemon;