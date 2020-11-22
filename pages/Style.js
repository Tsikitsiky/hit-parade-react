import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../Context'

function Styles() {
    const {filtering} = useContext(Context);
    return (
        <div>
            <ul>
                <li>
                    <Link to='/styles/salegy'>
                        <button value='salegy' onClick={filtering}>Salegy</button>
                    </Link>
                </li>
                <li>
                    <Link to='/styles/rock'>
                        <button value='rock' onClick={filtering}>Rock</button>
                    </Link>
                </li>
                <li>
                <Link to='/styles/folk'>
                        <button value='folk' onClick={filtering}>Folk</button>
                    </Link>
                </li>
                <li>
                <Link to='/styles/reggae'>
                        <button value='reggae' onClick={filtering}>Reggae</button>
                </Link>
                </li>
                <li>
                <Link to='/styles/r&b'>
                        <button value='r&b' onClick={filtering}>R&B</button>
                </Link>
                </li>
            </ul>
        </div>
    )
}

export default Styles
