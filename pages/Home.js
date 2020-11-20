import React, { useContext } from 'react'
import { Context } from '../Context';
import Song from "../Components/Song"

function Home() {
    const { songs } = useContext(Context);

    console.log(songs)
    const songList = songs.map(song => <Song key={song.id} song={song} />)
    return (
        <div>
            {songList}
        </div>
    )
}

export default Home
