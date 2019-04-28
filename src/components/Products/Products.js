import React from 'react';
import classes from './Products.module.css'
import Pivots from '../Pivots/Pivots'
import Cannons from '../Cannons/Cannons'
import Title from '../Title/Title'
import Pumps from '../Pumps/Pumps'
import GuideOptions from '../GuideOptions/GuideOptions'
import SystemOptions from '../SystemOptions/SystemOptions'
import Pieces from '../Pieces/Pieces';

let products = () => (
    <div className={ classes.container } id="productos">
        <Title>Productos</Title>
        <Pivots/>
        <GuideOptions/>
        <Pieces/>
        <SystemOptions/>
        <Cannons/>
        <Pumps/>
    </div>
)
export default products;