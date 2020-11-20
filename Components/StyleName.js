import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../Context';
import {Link} from 'react-router-dom'

function StyleName() {
    const {styleName} = useParams()
    const {filtered} = useContext(Context);
    const songList = filtered.map(song => <div key={song.id} className="song-cart">
                                            <Link to={`/songs/${song.id}`}>
                                                <p className="style-name-p">{song.title} <br /> <small>{song.artist}</small></p>
                                            </Link>
                                        </div>);
    return (
        <div>
            <h2 className="style-name">{styleName}</h2>
            {songList}
        </div>
    )
}

export default StyleName
