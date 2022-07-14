import React from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t, i18n } = useTranslation(['idioma']);
    return (
        <div className="topnav" id="myTopnav">
            <button className="btn" style={{ color: 'white' }} onClick={(e) => i18n.changeLanguage('es')}>Español</button>
            <button className="btn" style={{ color: 'white' }} onClick={(e) => i18n.changeLanguage('en')}>Ingles</button>
            <a href="/" className="active">{t("pokemons")}</a>
            <a href="/191382">{t("acercade")}</a>
            <a className="icon">
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )
}
