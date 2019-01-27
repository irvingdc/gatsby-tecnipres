import React, { Component } from 'react';
import classes from './CelebrationDialog.module.css'
import Dialog from '../Dialog/Dialog'
import { celebration } from '../../images'

class CelebrationDialog extends Component {
    
    state = {
        display: false,
    }

    handleClose = () => {
        this.setState({ display: false })
    }

    componentDidMount(){
        setTimeout(() => this.setState({ display: true }), 1000)
    }

    render(){
        return(
            <Dialog display={ this.state.display } onClose={ this.handleClose }>
                <div className={ classes.flex }>
                    <div style={{ background: `url(${ celebration }) center / cover no-repeat` }}></div>
                    <div>
                        <h3>¡20 AÑOS!</h3>
                        <p>
                            El mes de Enero de 2019 estamos celebrando, pues cumplimos 20 años de brindarte el mejor servicio.
                        </p>
                        <button onClick={ this.handleClose }>Cerrar</button>
                    </div>
                </div>
            </Dialog>
        )
    }
    
}
export default CelebrationDialog;