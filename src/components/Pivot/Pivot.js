import React from 'react';
import classes from './Pivot.module.css'

let pivot = ({ title, subtitle, information, img }) => {
    return (
        <div className={ classes.container } style={{ background: `url(${img}) center / cover no-repeat`, }}>
            <div className={ classes.overlay }>
                <h3>{ title }</h3>
                <p>{ information }</p>
            </div>
        </div>
    )
}
export default pivot;