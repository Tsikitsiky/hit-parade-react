import React, { useContext } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { Context } from '../Context';

function SongLyrics() {
    const {allSongs} = useContext(Context);
    const {songId} = useParams();
    let song = allSongs.find(song => song.id === Number(songId));
    const history = useHistory();

    return (
        <div>
            {/* <Link to="/">Back</Link> */}
            <i style={{cursor:"pointer"}} onClick={() =>history.goBack()}>←</i>
            <h2>{song.title} : {song.artist}</h2>
            <div className="lyrics">
                <h3>Lyrics</h3>
                {/* <textarea value={song.lyrics} readOnly /> */}
                <pre> {song.lyrics} </pre>
            </div>
        </div>
    )
}

export default SongLyrics
