import React from 'react';
import classes from './Values.module.css'
import Subtitle from '../Subtitle/Subtitle'
import { calidad, perseverancia, innovacion, sinergia, compromiso } from '../../images'

let values = () => {
    
    let valuesList = [
        {
            title: "calidad",
            icon: calidad
        },{
            title: "sinergia",
            icon: sinergia
        },{
            title: "compromiso",
            icon: compromiso
        },{
            title: "perseverancia",
            icon: perseverancia
        },{
            title: "innovación",
            icon: innovacion
        },
    ]

    return (
        <div className={ classes.container }>
            <Subtitle>Valores</Subtitle>
            <span className={ classes.bottomLine }></span>
            <ul className={ classes.list }>
                {
                    valuesList.map((it, key)=>(
                        <li key={ key }>
                            <img src={ it.icon } alt={ it.title}/>
                            <p>{ it.title }</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default values;