import React, { Fragment } from 'react'
import classes from './Services.module.css'
import Title from '../Title/Title'

let servicios = () => {
    let services = [
        "Sistemas de Riego.",
        "Obra Civil de captación de agua.",
        "Asesoría, Gestión y Diseño.",
        "Construcción y Mantenimiento.",
        "Levantamiento Topográfico.",
        "Gestión de Financiamientos Agrícolas.",
        "Gestión de Subsidios.",
        "Refacciones Agrícolas.",
        "Equipos y Sistemas.",
        "Industria, Casa y Jardín.",
    ]
    return (
        <Fragment>
            <Title>Nuestros Servicios</Title>
            <div className={ classes.container }>
                {
                    services.map((it,index) => <span key={ index }>{ it }</span>)
                }
            </div>
        </Fragment>
    )
}
export default servicios;