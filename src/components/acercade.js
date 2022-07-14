import React from 'react'
import foto from '../sources/yos.jpg'
import { useTranslation } from "react-i18next";



function Acercade() {
    const { t, i18n } = useTranslation(['idioma']);

    return (
        <div className='containerpok'>
            <div className="card" style={{ width: '25rem' }}>
                <div>
                    <img src={foto} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{t("name")}: Jose Manuel Tiscareño Moreno</h5>
                    <p className="card-text">{t("id")}:191382</p>
                </div>

            </div>
        </div>
    );
}

export default Acercade;