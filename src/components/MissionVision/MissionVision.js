import React from 'react';
import classes from './MissionVision.module.css'
import { quotes } from '../../images'

let misionVission = () => (
    <div className={ classes.container }>
        <div className={ classes.mission }>
            <img src={ quotes } alt="Quotes"/>
            <h3>Misión</h3>
            <p>
                Gestionar, diseñar y consturir tecnologías de riego y de obra civil de retención de agua innovadoras de calidad,
                que sean la mejor opción en el aprovechamiento del recurso hídrico y de energía, que cumplan y rebasen las expectativas del cliente,
                brindando la mejor atención en asesoría, siendo así la alternativamás competitiva del mercado.
            </p>
        </div>
        <span className={ classes.centerLine }></span>
        <div className={ classes.vision }>
        <img src={ quotes } alt="Quotes"/>
            <h3>Visión</h3>
            <p>
                Ser la empresa lider en la construcción y diseño de tecnologías de riego y obra civil de retención de agua,
                a través del profesionalismo y equipo de trabajo, mediante la sinergia, innovación y calidad, dedicando el mejor esfuerzo a
                para brindar siempre a nuestros clientes asesoría altamente especializada y servicio para proveer soluciones integrales,
                con el fin de consolidarnos en el sector agrícola e industrial.
            </p>
        </div>
    </div>
)
export default misionVission;