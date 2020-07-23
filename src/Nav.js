import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <nav>
            <ul>
                <Link to="/" > <li>home</li></Link>
                <li> niks</li>
            </ul>
        </nav >
    )
}

export default Nav