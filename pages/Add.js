import React, { useContext, useState } from 'react'
import { Context } from '../Context'

function Add() {
    const {addNewSong} = useContext(Context);
    const [artist, setArtist] = useState('');
    const [title, setTitle] = useState('');
    const [style, setStyle] = useState('');
    const [price, setPrice] = useState()
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

        addNewSong(newSongToAdd);
        e.target.reset();
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
                    <input type="next" value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <label>
                    {/* <input value={style} onChange={(e) => setStyle(e.target.value.toLocaleLowerCase())} /> */}
                    <select value={style} onChange={(e) => setStyle(e.target.value)}>
                        <option value=''>Styles</option>
                        <option value='salegy'>Salegy</option>
                        <option value='rock'>Rock</option>
                        <option value='folk'>Folk</option>
                        <option value='reggea'>Reggae</option>
                        <option value='r&b'>R&B</option>
                    </select>
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
