import React, { useContext } from 'react'
import { Context } from '../Context'

function Song({song}) {
    const { toggleFavorite, upvote, downvote, cartSongs , addToCart, removeFromCart } = useContext(Context);
    const favouriteClass = song.isFavourite ? "favorite-fill" : "favorite";
    function cartIcon() {
        const alreadyInCard = cartSongs.some(cart => cart.id === song.id);
       if(alreadyInCard) {
        return <i onClick={() => removeFromCart(song.id)} className="shopping-cart-fill"></i>
       }else {
           return  <i onClick={() => addToCart(song)} className="shopping-cart"></i>
       }
    }
    return (
        <div className="song-cart">
            <i onClick={() => toggleFavorite(song.id)} className={favouriteClass}></i>
            <p>{song.title} <br /> <small>{song.artist}</small></p>
            <div className="votes">{song.upvotes} 
                <i onClick={() => upvote(song.id)} className="up-arrow"></i>
            </div>
            <div className="votes">{song.downvotes} 
                <i onClick={() => downvote(song.id)} className="down-arrow"></i>
            </div>
            {cartIcon()}
            <button className="dots">...</button>
        </div>
    )
}

export default Song
