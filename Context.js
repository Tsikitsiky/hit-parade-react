import React, { useState } from 'react';
import Songs from './songs';

const Context = React.createContext();

function ContextProvider({children}) {
    const [allSongs, setAllSongs] = useState(Songs);
    const [cartSongs, setCartSongs] = useState([]);
    const [filtered, setFiltered] = useState([])

    function toggleFavorite(id) {
        const newSongsList = allSongs.map(song => {
            if(song.id === id) {
                return {
                    ...song,
                    isFavourite: !song.isFavourite 
                }
            }
            return song;
        })
        setAllSongs(newSongsList);
        //localStorage.setItem('photos', JSON.stringify(photos));
    }

    function upvote(id) {
        const newSongsList = allSongs.map(song => {
            if(song.id === id) {
                return {
                    ...song,
                    upvotes: song.upvotes + 1 
                }
            }
            return song;
        })
        setAllSongs(newSongsList);
        //localStorage.setItem('photos', JSON.stringify(photos));
    }

    function downvote(id) {
        const newSongsList = allSongs.map(song => {
            if(song.id === id) {
                return {
                    ...song,
                    downvotes: song.downvotes + 1 
                }
            }
            return song;
        })
        setAllSongs(newSongsList);
        //localStorage.setItem('photos', JSON.stringify(photos));
    }

    function addToCart(song) {
        setCartSongs(prevItems => [...prevItems, song])
    }

    function addNewSong(song) {
        setAllSongs(prevItems => [...prevItems, song])
    }

    function removeFromCart(id) {
        setCartSongs(prevItems => prevItems.filter(item => item.id !== id));
    }

    function emptyCart(total) {
        setCartSongs([]);
        console.log(`your songs cost ${total}Ar`);
    }
    
    function filtering(e) {
        const filterSong = allSongs.filter(song => song.style === e.target.value);
        setFiltered(filterSong);
    }
	

    //console.log(allSongs)
    return (
        <Context.Provider value={{allSongs, toggleFavorite, upvote, downvote, addToCart, cartSongs, removeFromCart, emptyCart, filtering, filtered, addNewSong}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context} 
