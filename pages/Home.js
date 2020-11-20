import React, { useContext } from 'react'
import { Context } from '../Context'

function Home() {
    const { songs } = useContext(Context);
    console.log(songs)
    const songList = songs.map(song => <div key={song.id} className="song-cart">
                                        <button onClick={() => toggleFavorite(img.id)} className="favorite"></button>
                                        <p>{song.title} <br /> <small>{song.artist}</small></p>
                                        <div className="votes">{song.upvotes} 
                                            <button className="up-arrow"></button>
                                        </div>
                                        <div className="votes">{song.downvotes} 
                                            <button className="down-arrow"></button>
                                        </div>
                                        <button className="shopping-cart"></button>
                                        <button className="dots">...</button>
                                        </div>)
    return (
        <div>
            {songList}
        </div>
    )
}

export default Home
