import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>KeyStaxx</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/mission-vision">Mission & Vision</Link>
            <Link to="/showcase">Showcase</Link>
            <Link to="/products">Products</Link>
            <Link to="/artisan-keyboards">Artisan Keyboards</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/company-profile">Company Profile</Link>
            <Link to="/developers">Developer Page</Link>
        </nav>
    </header>
);

export default Header;
