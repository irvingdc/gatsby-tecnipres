import React from 'react';
import classes from './CivilWork.module.css'
import Title from '../Title/Title'

let civilWork = () => (
    <div className={ classes.container }>
        <div className={ classes.subtitle }>
            <Title>Obra Civil</Title>
        </div>
        <div className={ classes.details }>
            <h4>Almacenamiento de Agua</h4>
            <ul>
                <li>Ollas: Geomembrana y Concreto</li>
                <li>Jagüey o bordos de tierra</li>
                <li>Desarenadores</li>
                <li>Diseño de sifones: Poliducto y tubería</li>
            </ul>
            <h4>Cajas de captación</h4>
            <ul>
                <li>Presas: Compuertas</li>
                <li>Estanques</li>
                <li>Aljibes</li>
                <li>Aguajes</li>
                <li>Tanques de Almacenamiento</li>
            </ul>
            <h4>Drenaje en terrenos agropecuarios</h4>
            <ul>
                <li>Desagües</li>
                <li>Canales: Compuertas</li>
                <li>Drenes subterráneos</li>
            </ul>
            <h4>Bordos y canales de derivación de escurrimientos</h4>
            <ul>
                <li>Bordos conductores</li>
            </ul>
        </div>
    </div>
)
export default civilWork;