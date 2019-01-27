import React from 'react';
import classes from './Input.module.css'

let input = ({ onChange, value, type, name, icon, placeholder } ) => {

    let inputField = type === 'textarea' 
                    ? <textarea 
                        placeholder={ placeholder }
                        name={ name }
                        value={ value }
                        onChange={ onChange }
                    ></textarea> 
                    : <input 
                        placeholder={ placeholder }
                        name={ name }
                        type={ type } 
                        value={ value }
                        onChange={ onChange } 
                    />
    let size = type === 'textarea' ? classes.large : ""
    
    return (
        <div className={ [classes.container, size].join(' ') }>
            <span>
                <img src={ icon } alt="Icono"/>
            </span>
            { inputField }
        </div>
	)
}

export default input;