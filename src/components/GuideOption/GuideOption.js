import React from 'react';
import classes from './GuideOption.module.css'
import { arrows_right } from '../../images'

let guideOption = ({ title, img }) => (
    <div className={ classes.container }>
        <div className={ classes.img } style={{ background: `url(${img}) center / cover no-repeat` }}></div>
        <p>
            <img src={ arrows_right } alt="Arrows Right"/>
            { title }
        </p>
    </div>
)
export default guideOption;