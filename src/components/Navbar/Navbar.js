import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="create-character">Create Character</Link>
                </li>
                <li>
                <Link to="protected">Protected</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
