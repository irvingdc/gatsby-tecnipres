import React from 'react'
import classes from './Gallery.module.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24, gallery25, gallery26, gallery27, gallery28, gallery29, gallery30, gallery31, gallery32, gallery33 } from '../../images'
import Title from '../Title/Title'

let gallery = () => {

    let images = [ gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24, gallery25, gallery26, gallery27, gallery28, gallery29, gallery30, gallery31, gallery32, gallery33 ]

    return (
        <div id="galeria" className={ classes.container }>
            <Title>Galería</Title>
            <div className={ classes.gallery }>
                <Carousel showArrows swipeable={ false } showStatus={false}>
                    {
                        images.map((it, index) => (
                            <div key={ index }>
                                <img src={ it } alt="Galería"/>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default gallery;