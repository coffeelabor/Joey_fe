import React from 'react'
import {Link} from 'gatsby'

const Header = () => {
    return (
        <header>
            <h1>Header Text</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>about</Link>
                    </li>
                    <li>
                        <Link to='/contact'>contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header 