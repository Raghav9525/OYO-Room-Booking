
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
//login button
import { BiSolidUser } from 'react-icons/bi';
//cross button
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'; // Ensure the correct import
import './style.css';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    // Function to open the side menu
    const openMenu = () => {
        setShowMenu(true);
    };

    // Function to close the side menu
    const closeMenu = () => {
        setShowMenu(false);
    };

    const closeMenuOnItemClick = () => {
        if (showMenu) {
            setShowMenu(false);
        }
    };

    return (
        <div id="header">
            <div className="container">
                <nav>
                    <h2 className="logo">Apna Hotel</h2>
                    {/* <img src="./images/logo.png" alt="" className="logo" /> */}
                    <ul id="sidemenu" style={{ right: showMenu ? '0' : '-200px' }}>
                        <i className="fas" onClick={closeMenu}><AiOutlineClose style={{ fontSize: '32px' }} /> </i>

                        <li><Link to="/" onClick={closeMenuOnItemClick}>Home</Link></li>
                        <li><Link to="/room" onClick={closeMenuOnItemClick}>Rooms</Link></li>
                        <li><Link to="/contact" onClick={closeMenuOnItemClick}>Contact</Link></li>
                        <li><Link to="/about" onClick={closeMenuOnItemClick}>About Us</Link></li>
                        <li><Link to="/login" onClick={closeMenuOnItemClick}><BiSolidUser style={{ fontSize: '32px' }} /></Link></li>
                    </ul>
                    <i className="fas" onClick={openMenu}><GiHamburgerMenu style={{ fontSize: '32px' }} /></i>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
