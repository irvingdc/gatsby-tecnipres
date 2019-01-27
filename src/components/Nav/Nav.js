import React, { Component } from 'react'
import { logo } from '../../images'
import classes from './Nav.module.css'

class Nav extends Component {

    state = {
        open: false,
    }

    componentDidMount(){
        document.querySelectorAll("a.navigation").forEach(it => {
            it.addEventListener("click", (event)=>{
                event.preventDefault()
                this.scrollToTarget(document.querySelector(it.getAttribute("href")))
            }, false)
        })
    }

    scrollToTarget = target => {
        if(target){
            window.scroll(0, target.offsetTop - 60)
        }
    }

    render(){

        return(
            <nav className={ classes.nav }>
                <a href="#inicio" className="navigation">
                    <img src={ logo } alt="logo" className={ classes.logo }/>
                </a>
                <ul className={ classes.list }>
                    <li>
                        <a href="#acerca-de" className="navigation">Acerca de nosotros</a>
                    </li>
                    <li>
                        <a href="#socios" className="navigation">Socios</a>
                    </li>
                    <li>
                        <a href="#productos" className="navigation">Productos</a>
                    </li>
                    <li>
                        <a href="#galeria" className="navigation">Galería</a>
                    </li>
                    <li>
                        <a href="#contacto" className="navigation">Contacto</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Nav;