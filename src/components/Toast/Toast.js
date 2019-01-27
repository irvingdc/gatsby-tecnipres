import React from 'react';
import classes from './Toast.module.css';

let toast = ({ visible, message }) => {
    
		let visibilityClass = visible ? classes.visible : null;
		return (
			<div className={[classes.toast, visibilityClass].join(" ")}> { message } </div>
		)
}

export default toast;