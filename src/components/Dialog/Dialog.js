import React from "react"
import classes from "./Dialog.module.css"
import { close } from "../../images"

let dialog = ({ display, onClose, children }) =>{
    return (
        <div className={ [classes.container, (display ? classes.displayed : "")].join(" ") }>
            <div className={ classes.background } onClick={ onClose ? onClose : ()=>console.log(":v") }></div>
            <div className={ classes.content }>
                { children }
            </div>
        </div>
    )
}
export default dialog;