import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from ".//Navbar.module.css"

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies" >
                        Movies
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
