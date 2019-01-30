import React, { Component } from 'react'
import { logo, arrows_right, close_white, menu } from '../../images'
import classes from './Nav.module.css'
import { throws } from 'assert';

class Nav extends Component {

    state = {
        open: false,
    }

    componentDidMount(){
        document.querySelectorAll("a.navigation").forEach(it => {
            it.addEventListener("click", (event)=>{
                event.preventDefault()
                this.scrollToTarget(document.querySelector(it.getAttribute("href")))
                this.setState({
                    open: false,
                })
            }, false)
        })
    }

    scrollToTarget = target => {
        if(target){
            window.scroll({
                top: target.offsetTop - 60,
                behavior: 'smooth',
            })
        }
    }

    openMenu = () => {
        this.setState({
            open: true
        })
    }
    
    closeMenu = () => {
        this.setState({
            open: false
        })
    }

    render(){

        let options = [
            {
                href: "#acerca-de",
                title: "Acerca de nosotros",
            },
            {
                href: "#socios",
                title: "Socios",
            },
            {
                href: "#productos",
                title: "Productos",
            },
            {
                href: "#galeria",
                title: "Galería",
            },
            {
                href: "#contacto",
                title: "Contacto",
            },
        ]

        return(
            <nav className={ [classes.nav, (this.state.open ? classes.open : "")].join(' ') }>
                <a href="#inicio" className="navigation">
                    <img src={ logo } alt="logo" className={ classes.logo }/>
                </a>
                <img 
                    src={ menu } 
                    alt="Abrir Menu" 
                    className={ classes.menu }
                    onClick={ this.openMenu }
                />
                <img 
                    src={ close_white } 
                    alt="Cerrar Menu" 
                    className={ classes.close }
                    onClick={ this.closeMenu }
                />
                <div className={ classes.content }>
                    <ul className={ classes.list }>
                        {
                            options.map((it, index) => (
                                <li key={ index }>
                                    <img src={ arrows_right } alt="Arrows Right"/>
                                    <a href={ it.href } className="navigation">{ it.title }</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Nav;