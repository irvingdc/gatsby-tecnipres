import React from 'react';
import classes from './ContactDetails.module.css'

let contactDetails = ({ title, icon, children }) => (
    <div className={ classes.container }>
        <h3>
            { title }
            <img src={ icon } alt="Icono"/>
        </h3>
        <p>{ children }</p>
    </div>
)
export default contactDetails;