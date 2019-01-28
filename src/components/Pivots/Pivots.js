import React from 'react';
import classes from './Pivots.module.css'
import Subtitle from '../Subtitle/Subtitle'
import Pivot from '../Pivot/Pivot'
import {electrogator, sugargator, alumigator, minigator, miniPivote, } from '../../images'

let pivots = () => {

    let pivotsList = [
        {
           title: "Electrogator II",
           subtitle: "Mayor durabilidad, resistencia y flotación",
           information: "Está diseñado para soportar la fuerza y la tensión con el sistema de pivote en todas las circunstancias de campo. Lleva consigo un acero de alta resistencia en los pivotes y sistemas de movimiento lateral. El acero utilizando llega a ser 50% más fuerte que el de los sistemas de riego de la competencia.",
           img: electrogator,
        },
        {
            title: "Sugargator",
            subtitle: "La mejor opción para irrigar cultivos altos",
            information: "Uno de los protagonistas con cada vez más popularidad es nuestro modelo de alto perfil en donde el despeje de cultivo crece en 4ft (1.20m) y con esto suple el creciente mercado de caña de azúcar y maíces. Su diseño tiene una gran aceptación por el ancho estable de su base y su capacidad de “flotar” en suelos pesados, comunes en campos azucareros.",
            img: sugargator,
        },
        {
            title: "Alumigator",
            subtitle: "El más exclusivo sistema de aluminio de la industria",
            information: "Es la mejor opción para los diferentes tipos de suelo difíciles, considerándose como una gran alternativa en el trabajo de granjas por su peso liviano de mayor flotación y por apenas eliminar las huellas de las ruedas, conteniendo un diseño muy flexible con el aluminio de calidad marina, combinando la misma tubería de agua y la estructura de sistema galvanizado de mayor resistencia, soportando la corrosión y evitando gran peso en comparación con un sistema completamente de acero.",
            img: alumigator,
        },
        {
            title: "Minigator",
            subtitle: "La mejor opción para campos chicos y pozos de reducido galonaje",
            information: "Ofrece el beneficio de satisfacer los pequeños campos, ya sean irregulares, esquinas de campo y suministros de agua, gracias a su centro de pivote compacto y duradero, así mismo los tramos de tubería logran cubrir de manera fácil y ahorrando costos en todas las áreas.",
            img: minigator,
        },
        {
            title: "Mini Pivote",
            subtitle: "Perfecto para campos pequeños y áreas donde el ingreso a la potencia es limitado",
            information: "Accionado por motor de Reinke, es un sistema de un solo tramo ideal para pequeños campos y áreas donde el acceso a la potencia es limitada.",
            img: miniPivote,
        },
    ]

    return (
        <div className={ classes.container }>
            <div className={ classes.subtitle }>
                <Subtitle>Pivotes</Subtitle>
            </div>
            <div className={ classes.list }>
                {
                    pivotsList.map((it, key) => <Pivot { ...it } key={ key }/>)
                }
            </div>
        </div>
    )
}

export default pivots;