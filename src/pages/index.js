import React, { Fragment } from 'react'
import classes from './index.module.css'
import Nav from '../components/Nav/Nav'
import MetaTags from '../components/MetaTags/MetaTags'
import Welcome from '../components/Welcome/Welcome'
import AboutUs from '../components/AboutUs/AboutUs'
import Partners from '../components/Partners/Partners'
import Products from '../components/Products/Products'
import Contact from '../components/Contact/Contact'
import Gallery from '../components/Gallery/Gallery'
import CelebrationDialog from '../components/CelebrationDialog/CelebrationDialog'
import '../styles.css'

let index = () => {
    return (
        <Fragment>
            <MetaTags
                description="Tecnología de Riego Presurizado S.A. de C.V."
                title="Tecnipres"
                canonical="https://www.tecnipres.com/"
            />
            <Nav/>
            <CelebrationDialog/>
            <div className={ classes.container }>
                <Welcome/>
                <AboutUs/>
                <Partners/>
                <Products/>
                <Gallery/>
                <Contact/>
            </div>
        </Fragment>
    )

}
export default index;