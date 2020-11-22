import React, { useContext } from 'react'
import { Context } from '../Context';
import Song from "../Components/Song"

function Home() {
    const { allSongs } = useContext(Context);

    //console.log(allSongs)
    const songList = allSongs.map(song => <Song key={song.id} song={song} />)
    return (
        <div>
            {songList}
        </div>
    )
}

export default Home
