import React from 'react';
import classes from './Title.module.css'

let title = ({ children }) => (
    <h2 className={ classes.title }>{ children }</h2>
)
export default title;