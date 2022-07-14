import React, { useContext, useEffect } from "react";
import { useState } from "react";

const FooterContext = React.createContext({
    busqueda: "UNIVERSIDAD TECNOLOGICA DE AGUASCALIENTES",
    setBusquedas: () => { },
});

export function InfoFooter() {
    const datos = useContext(FooterContext);
    return datos;
}