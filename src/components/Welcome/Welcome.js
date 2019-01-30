import React from "react"
import classes from "./Welcome.module.css"

let welcome = () =>{
    return (
        <div className={ classes.container } id="inicio">
           <div></div>
           <h1>Tecnipres</h1>
           <h2>Tecnología de Riego Presurizado S.A. de C.V.</h2>
        </div>
    )
}
export default welcome;