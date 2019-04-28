import React from 'react';
import classes from './Pivots.module.css'
import Subtitle from '../Subtitle/Subtitle'
import Pivot from '../Pivot/Pivot'
import { sugargator, alumigator, minigator, miniPivote, remolqueInverso, kwik_tow, arrastre_manguera_dos_ruedas, avance_frontal, movimiento_lateral_pivotable, cuatroruedas, arrastre_maanguera_cuatro_ruedas, } from '../../images'

let pivots = () => {

    let pivotsList = [
        {
            title: "Sugargator",
            subtitle: "La mejor opción para irrigar cultivos altos",
            information: "Uno de los protagonistas con cada vez más popularidad es nuestro modelo de alto perfil en donde el despeje de cultivo crece en 4m y con esto suple el creciente mercado de caña de azúcar y maíces. Su diseño tiene una gran aceptación por el ancho estable de su base y su capacidad de “flotar” en suelos pesados, comunes en campos azucareros.",
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
        {
            title: "Kwik Tow Dos Ruedas",
            subtitle: "Sin rival en la industria",
            information: "Constituye el estándar para sistemas de pivote remolcables de corto alcance. Tiene una opción de elevación hidráulica, y un Kit de remolque Kwik motorizado que le posibilita a mover el sistema lateralmente para distancias cortas.",
            img: kwik_tow,
        },
        {
            title: "Motor de pivote de cuatro ruedas",
            subtitle: "Exclusivo para adaptarse dinámicamente al movimiento en múltiples direcciones",
            information: "El Pivot Mover de cuatro ruedas es muy especial para adaptarse al movimiento y trasladarse en varias direcciones. Los cubos de rueda se ponen en las vigas de base y permiten girar rápidamente en 90°.",
            img: cuatroruedas,
        },
        {
            title: "Enlace Dirección Remolque Inverso",
            subtitle: "Disponible sólo en Reinke",
            information: "Si el sistema requiere ser remolcado desde el extremo del brazo, el Reverse Tow es el que más se adapta.",
            img: remolqueInverso,
        },
        {
            title: "Avance Frontal",
            subtitle: "Funciones personalizadas para necesidades exactas",
            information: "Los sistemas de movimiento lateral Electrogator y Alumigator tienen los mismos materiales de alta calidad y una ingeniería detallada que el resto de la línea de irrigación. El objetivo es irrigar tu campo cuadrado o rectangular mientras conservas el agua, no hay mejor opción, sólo Reinke.",
            img: avance_frontal,
        },
        {
            title: "Arrastre de Manguera de 2 ruedas",
            subtitle: "",
            information: "La opción de dos ruedas brinda una gran versatilidad con características como son de arrastre hacia adelante y de reversa, doble entrada en los sistemas de manguera, válvulas de contención internas y conexiones de ajuste rápido en ambos extremos. De igual manera ofrece la alternativa de alimentación de doble extremo disponible",
            img: arrastre_manguera_dos_ruedas,
        },
        {
            title: "Arrastre de Manguera de 4 ruedas",
            subtitle: "",
            information: "La opción más preferible para campos grandes. Los ejes flotantes sostienen las cuatro llantas en el suelo, lo cual proporciona que esta unidad remolque mangueras grandes (hasta 8 pulgadas) de acuerdo como se lo pidan los sistemas de alto flujo. Una opción es con el cable de alimentación o la otra es una fuente de alimentación a bordo en la mano derecha.",
            img: arrastre_maanguera_cuatro_ruedas,
        },
        {
            title: "Movimiento lateral pivotable",
            subtitle: "",
            information: "Cuenta con la capacidad de irrigar dos lados de un campo rectangular, el movimiento lateral pivotable es el sistema más variable que se presenta. Si se termina con un lado del campo, pivota fácilmente para irrigar al otro lado. Usa únicamente una ruta de carreta, no se necesita transportar y permite irrigar el doble de hectáreas con un solo sistema.",
            img: movimiento_lateral_pivotable,
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