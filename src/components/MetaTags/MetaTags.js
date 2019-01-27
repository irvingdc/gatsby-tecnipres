import { Helmet } from "react-helmet"
import React from 'react'
import { logo } from '../../images'

let metaTags = ({ title, canonical, description }) => { 
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{ title }</title>
            <link rel="canonical" href={ canonical }/>
            <meta name="description" content={ description } />
            <link rel="shortcut icon" href={ logo }/>
            <html lang="es" />
        </Helmet>
    )
}

export default metaTags;