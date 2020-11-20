import React, { useState } from 'react';
import Songs from './songs.json';

const Context = React.createContext();

function ContextProvider({children}) {
    const [songs, setSongs] = useState(Songs);

    function toggleFavorite(id) {
        const newSongsList = songs.map(song => {
            if(song.id === id) {
                return {
                    ...song,
                    isFavourite: !song.isFavourite 
                }
            }
            //console.log(photo)
            return song;
        })
        setSongs(newSongsList);
        //localStorage.setItem('photos', JSON.stringify(photos));
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    function emptyCart() {
        setCartItems([]);
	}
	

    console.log(songs)
    return (
        <Context.Provider value={{songs, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context} 
