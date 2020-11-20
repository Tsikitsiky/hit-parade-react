import React, { useState } from 'react';
import Songs from './songs.json';

const Context = React.createContext();

function ContextProvider({children}) {
    const [songs, setSongs] = useState(Songs);
    console.log(songs)
    return (
        <Context.Provider value={{songs}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context} 
