import React from "react";
import classes from "./CivilWork.module.css";
import Title from "../Title/Title";

let civilWork = () => (
  <div className={classes.container}>
    <div className={classes.subtitle}>
      <Title>Obra Civil</Title>
    </div>
    <div className={classes.details}>
      <div>
        <h4>ALMACENAMIENTO DE AGUA</h4>
        <div>Ollas: Geomembrana y Concreto</div>
        <div>Jagüey o bordos de tierra</div>
        <div>Desarenadores</div>
        <div>Diseño de sifones: Poliducto y tubería</div>
      </div>
      <div>
        <h4>CAJAS DE CAPTACIÓN</h4>
        <div>Presas: Compuertas</div>
        <div>Estanques</div>
        <div>Aljibes</div>
        <div>Aguajes</div>
        <div>Tanques de Almacenamiento</div>
      </div>
      <div>
        <h4>DRENAJE EN TERRENOS AGROPECUARIOS</h4>
        <div>Desagües</div>
        <div>Canales: Compuertas</div>
        <div>Drenes subterráneos</div>
      </div>
      <div>
        <h4>BORDOS Y CANALES DE DERIVACIÓN DE ESCURRIMIENTOS</h4>
        <div>Bordos conductores</div>
      </div>
    </div>
  </div>
);
export default civilWork;
