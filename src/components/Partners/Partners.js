import React from 'react';
import classes from './Partners.module.css'
import Title from '../Title/Title'
import { brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, arrows_right, partner1, partner2, partner3 } from '../../images'

let partners = () => {

    let distributors = [ partner1, partner2, partner3 ]
    let brands = [ brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10 ]

    return (
        <div className={ classes.container } id="socios">
            <Title>Socios Estratégicos</Title>
            <p className={ classes.distributorsText }>
                <img src={ arrows_right } alt="Arrows Right"/>
                Somos distribuidores exclusivos
            </p>
            <div className={ classes.row }>
                {
                    distributors.map((it, key) => <img src={ it } alt="Socio Estratégico" key={ key }/> )
                }
            </div>
            <p className={ classes.brandsText }>
                <img src={ arrows_right } alt="Arrows Right"/>
                Y contamos con las mejores marcas
            </p>
            <div className={ classes.row }>
                {
                    brands.map((it, key) => <img src={ it } alt="Socio Estratégico" key={ key }/> )
                }
            </div>
        </div>
    )
}
export default partners;