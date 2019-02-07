import React from 'react';
import classes from './GuideOptions.module.css'
import Subtitle from '../Subtitle/Subtitle'
import GuideOption from '../GuideOption/GuideOption'
import { guideOption1, guideOption2, guideOption3, guideOption4, guideOption5, guideOption6, guideOption7, guideOption8, guideOption9 } from '../../images'

let guideOptions = () => {
    let options = [
        { title: "Control de sistema RPM", img: guideOption1 },
        { title: "Dispositivo de gestión remota", img: guideOption2 },
        { title: "Navigator", img: guideOption3 },
        { title: "Opciones de VRI de movimiento lateral", img: guideOption4 },
        { title: "Reincloud", img: guideOption5 },
        { title: "RPM avanzado", img: guideOption6 },
        { title: "RPM básico", img: guideOption7 },
        { title: "RPM estándar", img: guideOption8 },
        { title: "Tasa variable", img: guideOption9 },
    ]
    return (
        <div className={ classes.container }>
            <div className={ classes.subtitle }>
                <Subtitle>Opciones de Guía</Subtitle>
            </div>
            <div className={ classes.list }>
                {
                    options.map((it,index) => <GuideOption { ...it } key={ index }/>)
                }
            </div>
        </div>
    )
}
export default guideOptions;