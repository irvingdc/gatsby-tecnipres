import React from 'react';
import classes from './Cannons.module.css'
import Subtitle from '../Subtitle/Subtitle'
import Cannon from '../Cannon/Cannon'
import { cannon1, cannon2, cannon3, cannon4, cannon5, cannon6, cannon7, cannon8, cannon9, cannon10, cannon11, cannon12, cannon13, cannon14, cannon15, cannon16, cannon17 } from '../../images'

let cannons = () => {
    let cannons = [
        { title: "Series 400", img: cannon1 },
        { title: "Series 500", img: cannon2 },
        { title: "Series 650", img: cannon3 },
        { title: "Series 750", img: cannon4 },
        { title: "Series 830", img: cannon5 },
        { title: "Series 850", img: cannon6 },
        { title: "Series 900", img: cannon7 },
        { title: "Series 1200", img: cannon8 },
        { title: "Series 2050", img: cannon9 },
        { title: "Series 2110", img: cannon10 },
        { title: "Series 2250", img: cannon11 },
        { title: "Series 2310", img: cannon12 },
        { title: "Series 2800", img: cannon13 },
        { title: "Series 2900", img: cannon14 },
        { title: "Series 3000", img: cannon15 },
        { title: "Series 3200", img: cannon16 },
        { title: "Series 3500", img: cannon17 },
    ]
    return (
        <div className={ classes.container }>
            <div className={ classes.subtitle }>
                <Subtitle>Cañones</Subtitle>
            </div>
            <div className={ classes.list }>
                {
                    cannons.map((it,index) => <Cannon { ...it } key={ index }/>)
                }
            </div>
        </div>
    )
}
export default cannons;