import React from 'react';
import classes from './Subtitle.module.css'

let title = ({ children, align }) => (
    <h2 className={ classes.title } style={{ textAlign: align }}>{ children }</h2>
)
export default title;