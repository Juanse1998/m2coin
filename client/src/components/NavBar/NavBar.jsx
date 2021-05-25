import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';
export default function NavBar() {
    return (
        <header className="navbar">
            <nav>
                <div className="lista">
                    
                        <p> <NavLink exact to="/" > Home </NavLink> </p>
                        <p> <NavLink exact to="/posts" > Posts </NavLink> </p>
                        <p> <NavLink exact to="/addPost"> Add Post </NavLink> </p>
                </div>
            </nav>
        </header>
    )
}