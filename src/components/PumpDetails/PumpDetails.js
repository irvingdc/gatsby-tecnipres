import React from 'react';
import classes from './PumpDetails.module.css'

let pumpDetails = ({ title, align, img, children }) => (
    <div className={ [classes.container, (align === "left" ? classes.alignLeft : classes.alignRight)].join(' ') }>
        <div>
            <h3>{ title }</h3>
            <p>{ children }</p>
        </div>
        <img src={ img } alt="Bomba"/>
    </div>
)
export default pumpDetails;