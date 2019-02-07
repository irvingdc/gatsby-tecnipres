import React from 'react';
import classes from './Pieces.module.css'
import Subtitle from '../Subtitle/Subtitle'
import Piece from '../Piece/Piece'
import { piece1, piece2, piece3, piece4, piece5, piece6, piece7A, piece7B, piece8, piece9, piece10, piece11A, piece11B, piece11C, piece11D, piece12, piece13, } from '../../images'

let pieces = () => {
    let piezas = [
        { title: "Aspersores", img: piece1, large: true },
        { title: "Bomba de sobrecarga", img: piece2 },
        { title: "Caja de cambio de ruedas", img: piece3 },
        { title: "Caja de cambios remolcable", img: piece4 },
        { title: "Caja de torre", img: piece5 },
        { title: "Carrete de colectores", img: piece6 },
        { title: "Contactores", img: [piece7A, piece7B] },
        { title: "Lubricante de riego", img: piece8 },
        { title: "Neumaticos", img: piece9 },
        { title: "Páneles de control principal", img: piece10, large: true },
        { title: "Pistola final", img: [piece11A, piece11B, piece11C, piece11D] },
        { title: "Sello v ring", img: piece12 },
        { title: "Unidad central", img: piece13 },
    ]
    return (
        <div className={ classes.container }>
            <div className={ classes.subtitle }>
                <Subtitle align="right">Piezas</Subtitle>
            </div>
            <div className={ classes.list }>
                {
                    piezas.map((it,index) => <Piece { ...it } key={ index }/>)
                }
            </div>
        </div>
    )
}
export default pieces;