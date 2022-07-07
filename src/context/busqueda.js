import React, { useContext, useEffect } from "react";
import { useState } from "react";

const SearchContext = React.createContext({
    busqueda: "",
    setBusquedas: () => {}, 
});


//Exportamos la fuincion de busqueda.

export function SearchProvider(props) {
    const [busquedas, setBusquedas] = useState("");
    const result = React.useMemo(() => ({
        busquedas, setBusquedas
    }), [busquedas
    ]);

    return (
        <SearchContext.Provider value={result} {...props} />
    )
}

export function BuscadorConsumer(props) {
    const { busqueda, setBusquedas } = useContext(SearchContext);
    return(  
        <div className="buscarP">
            <input className="inputP" type="text" onChange={(e) => setBusquedas(e.target.value)}/>        
        </div>                
    )
}

export function PokemonData() {
    const datos = useContext(SearchContext);
    return datos;
}