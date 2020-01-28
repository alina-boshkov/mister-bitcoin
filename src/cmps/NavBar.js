import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
    return <nav className="main-navbar">
        <ul className="nav-container flex clean-list">
            <li><NavLink className= "nav-link flex align-center justify-center" activeClassName="active" to='/'>Homepage</NavLink></li>
            <li><NavLink className= "nav-link flex align-center justify-center" activeClassName="active" to='/contact'>Contacts</NavLink></li>
        </ul>
    </nav>
}