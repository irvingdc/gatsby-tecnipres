import React from 'react';
import classes from './SystemOptions.module.css'
import Subtitle from '../Subtitle/Subtitle'
import SystemOption from '../SystemOption/SystemOption'
import { systemOption1, systemOption2, systemOption3, systemOption4 } from '../../images'

let systemOptions = () => {
    let options = [
        { 
            title: "Cable", 
            img: systemOption1,
            description: "Asegura un movimiento lateral preciso y una distribución uniforme del agua en todo el campo.",
        },
        { 
            title: "Cerca", 
            img: systemOption2,
            description: "No crea obstáculos adicionales en el campo y requiere un mantenimiento mínimo.",
        },
        { 
            title: "Surco", 
            img: systemOption3,
            description: "Utiliza ruedas especialmente diseñadas que rastrean un surco en V paralelo a la trayectoria del recorrido.",
        },
        { 
            title: "Navigator GPS", 
            img: systemOption4,
            description: "Proporciona una precisión extrema en el tiempo y la aplicación.",
        },
    ]
    return (
        <div className={ classes.container }>
            <div className={ classes.subtitle }>
                <Subtitle align="right">Opciones del sistema de Guía</Subtitle>
            </div>
            <div className={ classes.list }>
                {
                    options.map((it,index) => <SystemOption { ...it } key={ index }/>)
                }
            </div>
        </div>
    )
}
export default systemOptions;