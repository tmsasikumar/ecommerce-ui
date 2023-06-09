// Create a nav component with icons for the following routes: Home, About, Contact, Blog

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaEdit } from 'react-icons/fa';
import './Nav.css'
import Search from './Search';

const suggestions = [
    {
        id: 1,
        title: 'Fridge',
    },
    {
        id: 2,
        title: 'Freezer',
    },
    {
        id: 3,
        title: 'Oven',
    }
]

const Nav = () => {
    return (
        <div className='main-nav-container'>
            <nav className='nav-container'>
                <NavLink to="/" exact={true} activeClassName="active" className="nav-link-item">
                    <FaHome style={{ fontSize: '1.75em', marginRight: '0.75em', color: 'red' }} />
                    Home
                </NavLink>
                <NavLink to="/about" activeClassName="active" className="nav-link-item">
                    <FaUser style={{ fontSize: '1.75em', marginRight: '0.75em', color: 'green' }} />
                    About
                </NavLink>
                <NavLink to="/contact" activeClassName="active" className="nav-link-item">
                    <FaEnvelope style={{ fontSize: '1.75em', marginRight: '0.75em', color: 'blue' }} />
                    Contact
                </NavLink>
                <NavLink to="/blog" activeClassName="active" className="nav-link-item">
                    <FaEdit style={{ fontSize: '1.75em', marginRight: '0.75em', color: 'orange' }} />
                    Blog
                </NavLink>

            </nav>
            <Search suggestions={suggestions} handleSuggestionClick={() => { }} handleSearch={() => { }} />

        </div>
    )
}

export default Nav;