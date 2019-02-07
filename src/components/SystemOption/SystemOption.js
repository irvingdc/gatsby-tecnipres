import React from 'react';
import classes from './SystemOption.module.css'

let systemOption = ({ title, img, description  }) => (
    <div className={ classes.container }>
        <div className={ classes.img } style={{ background: `url(${img}) center / cover no-repeat` }}></div>
        <div className={ classes.content }>
            <h4>{ title }</h4>
            <p>{ description }</p>
        </div>
    </div>
)
export default systemOption;