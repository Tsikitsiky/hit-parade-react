import React, { useContext } from 'react'
import CartSong from '../Components/CartSong';
import {Context} from '../Context'

function Cart() {
    const {cartSongs, emptyCart} = useContext(Context);
    const songList = cartSongs.map(song => <CartSong key={song.id} song={song} />)
    let totalCost = 0;
    for(let i = 0; i < cartSongs.length; i++) {
        totalCost += cartSongs[i].price;
    }
    return (
        <div className="cart-list">
            {songList}
            {cartSongs.length > 0 ?
             <div className="buy-total">
                <button onClick={() => emptyCart(totalCost)}>Buy</button>
                <p>Total: {totalCost}Ar </p>
            </div> : 
            <p>No song added to cart</p>}
        </div>
    )
}

export default Cart
