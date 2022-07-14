import React from 'react';
import { InfoFooter } from '../context/footer-context';

export default function Footer() {
    const info = InfoFooter();

    return (
        <div className='centrado' style={{ width: '100vw', height: '80px' }}>
            {info.busqueda}
        </div>
    )
}