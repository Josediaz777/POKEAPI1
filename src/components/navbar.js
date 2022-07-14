import React from "react";

export default function Navbar() {
    return (
        <div className="topnav" id="myTopnav">
            <a href="/" className="active">Pokemons</a>
            <a href="/191382">Acerca de </a>
            <a className="icon">
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )
}
