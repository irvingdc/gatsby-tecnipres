import React from 'react';
import classes from './Partners.module.css'
import Title from '../Title/Title'
import { brand2, brand3, brand4, brand5, brand6, brand7, brand8, arrows_right } from '../../images'

let partners = () => {

    let distributors = [ brand8, brand8, brand8 ]
    let brands = [ brand5, brand2, brand4, brand6, brand3, brand7 ]

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