import React, { Component } from 'react';
import classes from './Contact.module.css'
import Title from '../Title/Title'
import Input from '../Input/Input'
import SubmitButton from '../SubmitButton/SubmitButton'
import ContactDetails from '../ContactDetails/ContactDetails'
import Toast from '../Toast/Toast'
import { name, email, phone, message, pin } from '../../images'
import Axios from 'axios';

class Contact extends Component {

    state={
        name: "",
        email: "",
        phone: "",
        message: "",
        toastVisible: false,
        toastMessage: ""
    }

    handleChange = event => {
        let { name, value } = event.target 
        this.setState({
            [name] : value
        })
    }

    submit = () => {
        let { name, email, phone, message } = this.state
        if(name !== "" && email !== "" && phone !== "" && message !== ""){

            //this.handleSuccess() // NOTE: just for decorative purposes, remove after really connecting to endpoint

            let url = "/contacto.php" 
            Axios.post(url, { name, email, phone, message }).then(response => {
                if(response.data === "success"){
                    this.handleSuccess()
                }
            })
        }
        else{
            this.showError()
        }
    }

    handleSuccess = () => {
        this.setState({
            toastVisible: true,
            toastMessage: "Gracias, nos pondremos en contacto."
        })
        setTimeout(()=>this.setState({ toastVisible: false }),5000)
    }

    showError = () => {
        this.setState({
            toastVisible: true,
            toastMessage: "Por favor llena todos los campos.",
        })
        setTimeout(()=>this.setState({ toastVisible: false }),5000)
    }

    render(){
        return (
            <div className={ classes.container } id="contacto">
                <Title>Contacto</Title>
                <p className={ classes.description }>
                    Si algo te ha interesado, tienes dudas o buscas una <b>cotización</b>, no dudes en <b>contactarnos</b>.
                </p>
                <span className={ classes.leftLine }></span>
                <span className={ classes.rightLine }></span>
                <div className={ classes.flex }>
                    <div className={ classes.left }>
                        <Input
                            name="name"
                            placeholder="Nombre"
                            value={ this.state.name }
                            type="text"
                            icon={ name }
                            onChange={ this.handleChange }
                        />
                        <Input
                            name="email"
                            placeholder="Correo"
                            value={ this.state.email }
                            type="email"
                            icon={ email }
                            onChange={ this.handleChange }
                        />
                        <Input
                            name="phone"
                            placeholder="Teléfono"
                            value={ this.state.phone }
                            type="number"
                            icon={ phone }
                            onChange={ this.handleChange }
                        />
                        <Input
                            name="message"
                            placeholder="Mensaje"
                            value={ this.state.message }
                            type="textarea"
                            icon={ message }
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className={ classes.right }>
                        <ContactDetails title="Dirección" icon={ pin }>
                            Avenida 11 # 2610 <br/>
                            Entre calles 26 y 28 <br/>
                            Colonia San José <br/>
                            C.P. 94550<br/>
                            Córdoba, Veracruz <br/>
                            México
                        </ContactDetails>
                        <ContactDetails title="E-Mail" icon={ email }>
                            ventas@tecnipres.com
                        </ContactDetails>
                        <ContactDetails title="Teléfono" icon={ phone }>
                            +52 1 (271) 73 696 54
                        </ContactDetails>
                    </div>
                </div>
                <SubmitButton 
                    onClick={ this.submit }
                    sendingLabel="Enviando..."
                >Enviar</SubmitButton>
                <Toast
                    visible={ this.state.toastVisible }
                    message={ this.state.toastMessage }
                />
            </div>
        )
    }
}
export default Contact;