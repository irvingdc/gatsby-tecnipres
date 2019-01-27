import React from "react"
import classes from "./AboutUs.module.css"
import Title from "../Title/Title"
import MissionVision from "../MissionVision/MissionVision"
import Values from "../Values/Values"
import { teamWork } from "../../images"

let welcome = () =>{
    return (
        <div className={ classes.container } id="acerca-de">
           <Title>Acerca de Nosotros</Title>
           <div className={ classes.flex }>
                <div className={ classes.left }>
                    <p className={ classes.introduction }>
                        Somos una empresa <b>mexicana</b> que siempre se ha preocupado por las necesidades de todos sus clientes, perseverando en cada momento y brindando la mejor atención y calidad.
                    </p>
                    <span className={ classes.topLine }></span>
                    <p className={ classes.details }>
                        Nos dedicamos a la gestión, diseño y construcción de <b>Sistemas de Riego y Obra Civil</b>, ampliando siempre las expectativas de nuestros clientes.
                    </p>
                    <span className={ classes.bottomLine }></span>
                </div>
                <div className={ classes.right }>
                    <img src={ teamWork } alt="Teamwork"/>
                </div>
           </div>
           <p className={ classes.bottomText }>¡<b>20 años</b> de experiencia nos respaldan!</p>
           <Values/>
           <MissionVision/>
        </div>
    )
}
export default welcome;