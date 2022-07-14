import React from 'react'
import foto from '../sources/yos.jpg'

function Acercade() {
    return (
        <div className='containerpok'>
            <div className="card" style={{ width: '25rem' }}>
                <div>
                    <img src={foto} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Nombre: Jose Manuel Tiscareño Moreno</h5>
                    <p className="card-text">Matricula:191382</p>
                </div>

            </div>
        </div>
    );
}

export default Acercade;