import React, { useContext } from 'react'
import { Context } from '../Context'

function CartSong({song}) {
    const {removeFromCart} = useContext(Context);
    return (
        <div className="song-cart">
            <div style={{display: "flex"}}>
                <i onClick={() => removeFromCart(song.id)} className="delete"></i>
                <p style={{paddingLeft: "2rem"}}>{song.title} <br /> <small>{song.artist}</small></p>
            </div>
            <p style={{color: '#FFD803'}}>{song.price}Ar</p>
        </div>
    )
}

export default CartSong
