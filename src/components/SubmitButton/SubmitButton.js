import React from 'react'
import classes from './SubmitButton.module.css'
import { send } from "../../images"

let submitButton = ({ loading, sendingLabel, onClick, children }) => {

	const handleClick = event => {
		if (!loading && onClick) {
			onClick(event)
		}
		else {
			event.preventDefault()
		}
	}

	let content = loading ? sendingLabel : children
	let icon = loading ? "" : <img src={ send } alt="Icono"/>
	return (
		<button onClick={ handleClick } className={ classes.button }>
			{ content }
			{ icon }
		</button>
	)
}

export default submitButton;