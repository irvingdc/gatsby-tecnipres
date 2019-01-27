import React from 'react';
import classes from './Cannon.module.css'
import { arrows_right } from '../../images'

let cannon = ({ title, img }) => (
    <div className={ classes.container }>
        <div className={ classes.img } style={{ background: `url(${img}) center / 90% no-repeat` }}></div>
        <p>
            <img src={ arrows_right } alt="Arrows Right"/>
            { title }
        </p>
    </div>
)
export default cannon;