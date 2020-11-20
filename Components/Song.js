import React, { useContext } from 'react'
import { Context } from '../Context'

function Song({song}) {
    const { toggleFavorite } = useContext(Context);
    const favouriteClass = song.isFavourite ? "favorite-fill" : "favorite";
    return (
        <div className="song-cart">
            <i onClick={() => toggleFavorite(song.id)} className={favouriteClass}></i>
            <p>{song.title} <br /> <small>{song.artist}</small></p>
            <div className="votes">{song.upvotes} 
                <i className="up-arrow"></i>
            </div>
            <div className="votes">{song.downvotes} 
                <i className="down-arrow"></i>
            </div>
            <i className="shopping-cart"></i>
            <button className="dots">...</button>
        </div>
    )
}

export default Song
