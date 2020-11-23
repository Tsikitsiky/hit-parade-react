import React, { useState, useEffect } from 'react';
import Songs from './songsData';

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

    function initSongs() {
        const lsAllSongs = JSON.parse(localStorage.getItem('AllSongs'));
        if(lsAllSongs) {
            setAllSongs(lsAllSongs);
        }

        const lsCartSongs = JSON.parse(localStorage.getItem('CartSongs'));
        if(lsCartSongs) {
            setCartSongs(lsCartSongs);
        }
    }

    // On mount
    useEffect(() => {
        initSongs();
    }, [])
    
    // On update
    useEffect(() => {
        if(allSongs.length > 0) {
            localStorage.setItem('AllSongs', JSON.stringify(allSongs));
        }
    }, [allSongs]) 

    useEffect(() => {
            localStorage.setItem('CartSongs', JSON.stringify(cartSongs));
    }, [cartSongs])
	

    //console.log(allSongs)
    return (
        <Context.Provider value={{allSongs, toggleFavorite, upvote, downvote, addToCart, cartSongs, removeFromCart, emptyCart, filtering, filtered, addNewSong}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context} 
