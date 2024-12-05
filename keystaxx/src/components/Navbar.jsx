import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>KeyStaxx</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reviews">Reviews</Link></li> 
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/company-profile">Company Profile</Link></li>
        <li><Link to="/developer-page">Developer</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
