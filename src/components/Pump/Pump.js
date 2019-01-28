import React from 'react';
import classes from './Pump.module.css'
import { arrows_right } from '../../images'

let pump = ({ title, img, branch, usage }) => (
    <div className={ classes.container }>
        <div className={ classes.img } style={{ background: `url(${img}) center / 90% no-repeat` }}></div>
        <p className={ classes.title }>
            <img src={ arrows_right } alt="Arrows Right"/>
            { title }
        </p>
        <p className={ classes.branch }>
            { branch }
        </p>
        <p className={ classes.usage }>
            { usage }
        </p>
    </div>
)
export default pump;