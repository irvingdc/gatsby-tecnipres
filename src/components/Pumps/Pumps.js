import React from 'react';
import classes from './Pumps.module.css'
import Pump from '../Pump/Pump'
import PumpDetails from '../PumpDetails/PumpDetails'
import Subtitle from '../Subtitle/Subtitle'
import { pump_hot_oil, pump_stx, pump_sth, pump_stl, pump_series_w_y_r_h, pump_series_v, pump_series_mx, pump_edge_pistol, pump_vertical_turbine, pump_cut, pump_series_n, pump_duraprime, pump_hidraulic_transport, pump_chopper, pump_series_ht, pump_series_cb, pump_sumergible, pump_sumergible_2, pump_turbina_hidraulica, pump_reaccion, pump_pelton, pumps_agriculture, pumps_food_process, pumps_industrial, pumps_municipal } from '../../images'

let pumps = () => {
    let pumpsList = [
        {
            title: "Bomba de aceite caliente",
            branch: "Aceite caliente",
            usage: "Alimenticio e industrial",
            img: pump_hot_oil,
        },
        {
            title: "Serie STX",
            branch: "Autocebantes",
            usage: "Alimenticio, municipal, agrícola e industrial",
            img: pump_stx,
        },
        {
            title: "Serie STH",
            branch: "Autocebantes",
            usage: "Alimenticio, municipal, agrícola e industrial",
            img: pump_sth,
        },
        {
            title: "Serie STL",
            branch: "Autocebantes",
            usage: "Alimenticio, municipal, agrícola e industrial",
            img: pump_stl,
        },
        {
            title: "Serie W Y R & H",
            branch: "Líquido claro",
            usage: "Alimenticio, municipal, agrícola e industrial",
            img: pump_series_w_y_r_h,
        },
        {
            title: "Serie V",
            branch: "Líquido claro",
            usage: "Alimenticio, municipal, agrícola e industrial",
            img: pump_series_v,
        },
        {
            title: "Serie MX",
            branch: "Líquido claro",
            usage: "Alimenticio, municipal, agrícola e industrial",
            img: pump_series_mx,
        },
        {
            title: "Refuerzo para pistolas Edge",
            branch: "Líquido claro",
            usage: "Alimenticio, municipal, agrícola e industrial",
            img: pump_edge_pistol,
        },
        {
            title: "Turbina vertical ciclón",
            branch: "Líquido claro",
            usage: "Alimenticio, municipal, agrícola e industrial",
            img: pump_vertical_turbine,
        },
        {
            title: "Bomba de corte",
            branch: "Corte",
            usage: "Municipal, agrícola e industrial",
            img: pump_cut,
        },
        {
            title: "Serie N",
            branch: "Manejo de sólidos",
            usage: "Alimenticio, municipal, agrícola e industrial",
            img: pump_series_n,
        },
        {
            title: "Duraprime",
            branch: "Manejo de sólidos",
            usage: "Alimenticio, municipal, agrícola e industrial",
            img: pump_duraprime,
        },
        {
            title: "Transporte Hidráulico",
            branch: "Manejo de sólidos",
            usage: "Alimenticio, municipal, agrícola e industrial",
            img: pump_hidraulic_transport,
        },
        {
            title: "Chopper",
            branch: "Manejo de sólidos",
            usage: "Alimenticio, municipal, agrícola e industrial",
            img: pump_chopper,
        },
        {
            title: "Arctic King HT",
            branch: "Refrigeración",
            usage: "Alimenticio e industrial",
            img: pump_series_ht,
        },
        {
            title: "Accionamiento abierto serie CB",
            branch: "Refrigeración",
            usage: "Alimenticio e industrial",
            img: pump_series_cb,
        },
        {
            title: "Sumergible",
            branch: "Sumergibles",
            usage: "Municipal e industrial",
            img: pump_sumergible,
        },
        {
            title: "Sumergible",
            branch: "Sumergibles",
            usage: "Municipal",
            img: pump_sumergible_2,
        },
        {
            title: "Turbina hidráulica",
            branch: "Turbinas",
            usage: "Municipal",
            img: pump_turbina_hidraulica,
        },
        {
            title: "Turbina de reacción",
            branch: "Turbinas",
            usage: "Municipal",
            img: pump_reaccion,
        },
        {
            title: "Turbina pelton",
            branch: "Turbinas",
            usage: "Municipal",
            img: pump_pelton,
        },
    ]
 

    return (
        <div className={ classes.container }>
            <div className={ classes.subtitle }>
            <Subtitle>Bombas</Subtitle>
            </div>
            <PumpDetails img={ pumps_agriculture } title="Agricultura" align="right">
                Cornell comenzó a fabricar <b>bombas</b> para la <b>agricultura</b> cuando la empresa se lanzó en 1946. Desde entonces, los ingenieros de Cornell han continuado realizando mejoras en el diseño y la función de las bombas. 
                <br/><br/>
                Características únicas de <b>Cornell</b> bombas, como <b>Cycloseal</b>, <b>Run-Dry ®</b>, y <b>Redi-Prime ®</b>, permiten que las bombas Cornell para manejar las aplicaciones más exigentes. Estas características, junto con eficiencias de hasta el 89%, son la razón por la que Cornell se considera el punto de referencia en bombas agrícolas.
            </PumpDetails>
            <PumpDetails img={ pumps_industrial } title="Industrial" align="left">
                Las bombas de líquido claro y de suspensión de Cornell proporcionan la confiabilidad y la capacidad de intercambio exigidas por la industria. 
                <br/><br/>
                Cornell ofrece una multitud de bombas que pueden adaptarse a los sistemas existentes. También trabajaremos con usted para crear un sistema personalizado que satisfaga sus necesidades.
            </PumpDetails>
            <PumpDetails img={ pumps_municipal } title="Municipal" align="right">
                Las aplicaciones municipales para aguas claras, aguas residuales y aguas grises se encuentran con la garantía de las bombas Cornell. 
                <br/><br/>
                Nuestra nueva bomba de corte es especialmente eficiente para reducir el desgaste de las aguas residuales, lo que conlleva un mayor tiempo de actividad y una reducción de los costos de mantenimiento. 
                <br/><br/>
                En las bombas municipales de Cornell, busque la apariencia distintiva del armazón angular y muscular para saber que es una bomba de Cornell de alta calidad.
            </PumpDetails>
            <PumpDetails img={ pumps_food_process } title="Proceso Alimenticio" align="left">
                Cornell introdujo la primera bomba de procesamiento de alimentos <b>Hydro-Transport</b> a la industria hace casi 40 años, y ha mantenido su reputación desde entonces con bombas que pueden transportar una amplia gama de productos alimenticios, desde papas hasta tomates, con un daño mínimo.
                <br/><br/>
                Además de las bombas de la serie P y PP, muchas otras bombas Cornell se utilizan en la industria alimentaria para aplicaciones como aguas residuales, aceite caliente y líquidos transparentes.
                <br/><br/>
                Las bombas Food Process utilizan bastidores de cojinetes con un diseño reconocible al instante que incorpora superficies de montaje en lugar de patas de montaje, lo que le permite saber que es un bastidor de bomba de Cornell de calidad.
            </PumpDetails>
            <div className={ classes.list }>
                {
                    pumpsList.map((it,index) => <Pump {...it} key={ index }/>)
                }
            </div>
        </div>
    )
}
export default pumps;