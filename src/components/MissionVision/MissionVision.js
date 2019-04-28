import React from "react";
import classes from "./MissionVision.module.css";
import { quotes } from "../../images";

let misionVission = () => (
  <div className={classes.container}>
    <div className={classes.mission}>
      <img src={quotes} alt="Quotes" />
      <h3>Misión</h3>
      <p>
        Gestionar, diseñar y consturir tecnologías de riego y de obra civil de
        retención de agua innovadoras de calidad, que sean la mejor opción en el
        aprovechamiento del recurso hídrico y de energía, que cumplan y rebasen
        las expectativas del cliente, brindando la mejor atención en asesoría,
        siendo así la alternativa más competitiva del mercado.
      </p>
    </div>
    <span className={classes.centerLine} />
    <div className={classes.vision}>
      <img src={quotes} alt="Quotes" />
      <h3>Visión</h3>
      <p>
        Ser la empresa líder en Sistemas de Riego Presurizado y Obra Civil de
        retención de agua, a través del profesionalismo y equipo de trabajo,
        dedicando el mejor esfuerzo para brindar y proveer siempre a nuestros
        clientes el mayor servicio especializado con soluciones integrales, a
        fin de consolidarnos en el sector agrícola e industrial.
      </p>
    </div>
  </div>
);
export default misionVission;
