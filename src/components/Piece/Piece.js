import React, { Component } from 'react';
import classes from './Piece.module.css'
import { arrows_right, expand } from '../../images'

class Piece extends Component {

    state = {
        currentImg: "",
        index: 0
    }

    componentDidMount(){
        let { img } = this.props
        let multiple = typeof img === "object" && img.length
        this.setState({ 
            multiple,
            currentImg: multiple ? img[0] : img,
            index: 0
        })
    }

    previousImage = () => {
        let index = this.state.index === 0 ? this.props.img.length - 1 : this.state.index - 1
        console.log("index", index)
        this.setState({
            index,
            currentImg: this.props.img[index],
        })
    }

    nextImage = () => {
        let index = this.state.index === this.props.img.length - 1 ? 0 : this.state.index + 1
        console.log("index", index)
        this.setState({
            index,
            currentImg: this.props.img[index],
        })
    }

    render(){
        let { title, large } = this.props
        let { multiple, currentImg } = this.state
        
        return (
            <div className={ classes.container }>
                <div className={ classes.img } style={{ background: `url(${ currentImg }) center / ${ large ? "cover" : "65%" } no-repeat` }}>
                    { multiple 
                        ? <img 
                            src={ expand } 
                            alt="izquierda" 
                            className={ classes.left }
                            onClick={ this.previousImage }
                        /> 
                        : null }
                    { multiple 
                        ? <img 
                            src={ expand } 
                            alt="derecha" 
                            className={ classes.right }
                            onClick={ this.nextImage }
                        /> 
                        : null }
                </div>
                <p>
                    <img src={ arrows_right } alt="Arrows Right"/>
                    { title }
                </p>
            </div>
        )
    }
}
export default Piece;