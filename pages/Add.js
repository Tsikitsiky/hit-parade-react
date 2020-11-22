import React, { useContext, useState } from 'react'
import { Context } from '../Context'

function Add() {
    const {addNewSong} = useContext(Context);
    const [artist, setArtist] = useState('');
    const [title, setTitle] = useState('');
    const [style, setStyle] = useState('');
    const [price, setPrice] = useState(0)
    const [lyrics, setLyrics] = useState('');

    // function handleChange(e) {
    //     const {name, value} = e.target;
    // }

    function handleSubmit(e) {
        e.preventDefault();
        const newSongToAdd = {
            "id": Date.now(),
            "artist": artist,
            "title": title,
            "upvotes": 0,
            "downvotes": 0,
            "isFavourite": false,
            "price": 1000,
            "style": style,
            "lyrics": lyrics
                }
                console.log(newSongToAdd)
        addNewSong(newSongToAdd)
    }
    return (
        <div>
            <h1>🙂 Add a new song</h1>
            <form onSubmit={handleSubmit}>
                <label>Title
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>Artist
                    <input value={artist} onChange={(e) => setArtist(e.target.value) } />
                </label>
                <label>Price
                    <input value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <label>Style
                    <input value={style} onChange={(e) => setStyle(e.target.value)} />
                </label>
                <label>Lyrics
                    <textarea value={lyrics} onChange={(e) => setLyrics(e.target.value)} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add
