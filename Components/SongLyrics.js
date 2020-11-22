import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context';

function SongLyrics() {
    const {allSongs} = useContext(Context);
    const {songId} = useParams();
    let song = allSongs.find(song => song.id === Number(songId))
    return (
        <div>
            <h2>{song.title} : {song.artist}</h2>
            <div className="lyrics">
                <h3>Lyrics</h3>
                {/* <textarea value={song.lyrics} readOnly /> */}
                <p> {song.lyrics} </p>
            </div>
        </div>
    )
}

export default SongLyrics
