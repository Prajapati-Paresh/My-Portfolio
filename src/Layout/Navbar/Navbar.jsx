import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img
                    src="public/img/pngtree-software-developer-3d-icon-with-sleek-design-isolated-on-white-background-png-image_15139931-removebg-preview.png"
                    alt="Logo"
                    className="navbar-logo"
                />
                <button className="navbar-toggle" onClick={toggleNavbar}>
                    ☰
                </button>
                <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Lab</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
