import React from 'react';
import classes from './Products.module.css'
import Pivots from '../Pivots/Pivots'
import Cannons from '../Cannons/Cannons'
import Title from '../Title/Title'

let products = () => (
    <div className={ classes.container } id="productos">
        <Title>Productos</Title>
        <Pivots/>
        <Cannons/>
    </div>
)
export default products;