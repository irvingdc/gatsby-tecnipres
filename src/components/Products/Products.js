import React from 'react';
import classes from './Products.module.css'
import Pivots from '../Pivots/Pivots'
import Cannons from '../Cannons/Cannons'
import Title from '../Title/Title'
import Pumps from '../Pumps/Pumps';

let products = () => (
    <div className={ classes.container } id="productos">
        <Title>Productos</Title>
        <Pivots/>
        <Cannons/>
        <Pumps/>
    </div>
)
export default products;