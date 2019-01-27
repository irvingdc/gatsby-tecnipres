import React from "react"
import classes from "./Welcome.module.css"

let welcome = () =>{
    return (
        <div className={ classes.container } id="inicio">
           <div></div>
           <h1>Tecnipres</h1>
        </div>
    )
}
export default welcome;