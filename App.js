import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Style from './pages/Style'
import Add from './pages/Add'
import Cart from './pages/Cart'
import StyleName from './Components/StyleName';
import SongLyrics from './Components/SongLyrics';

function App() {
    return (
        <div>
            <header>
                <h1>Hit Parade</h1>
                <nav className="navigation">
                    <Link to = '/'> Popular Songs</Link>
                    <Link to = '/styles'>Styles</Link>
                    <Link to = '/add'>Add</Link>
                    <Link to = '/cart'>Cart</Link>
                </nav>
            </header>
            <Switch>
                <Route exact path = '/'>
                   <Home />
                </Route>
                <Route exact path = '/styles'>
                    <Style />
                </Route>
                <Route path = '/styles/:styleName'>
                    <StyleName />
                </Route>
                <Route path = '/songs/:songId'>
                    <SongLyrics />
                </Route>
                <Route path = '/add'>
                    <Add />
                </Route>
                <Route path = '/cart'>
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export default App
