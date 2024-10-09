import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Welcome to My Profile</h1>
      <nav>
        <ul>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#hobbies">Hobbies</a></li> 
        </ul>
      </nav>
    </header>
  );
}
