import React, { useContext } from 'react'
import { Context } from '../Context';
import Song from "../Components/Song"

function Home() {
    const { allSongs } = useContext(Context);
    function sortSong(songA, songB) {
		const rateSongA = songA.upvotes - songA.downvotes;
		const rateSongB = songB.upvotes - songB.downvotes;
		return rateSongB - rateSongA;
	}

    //console.log(allSongs)
    const songList = allSongs.sort(sortSong).map(song => <Song key={song.id} song={song} />)
    return (
        <div>
            {songList}
        </div>
    )
}

export default Home
