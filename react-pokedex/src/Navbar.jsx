import React from 'react';
import SearchBar from './SearchBar';

const Navbar = ({ selectedRegion, setSelectedRegion, searchQuery, setSearchQuery }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">PokeDex</h1>
      <div className="navbar-controls">
        <div className="navbar-buttons">
          <button
            className={`navbar-button ${selectedRegion === 'kanto' ? 'active' : ''}`}
            onClick={() => setSelectedRegion('kanto')}
          >
            Kanto
          </button>
          <button
            className={`navbar-button ${selectedRegion === 'johto' ? 'active' : ''}`}
            onClick={() => setSelectedRegion('johto')}
          >
            Johto
          </button>
          <button
            className={`navbar-button ${selectedRegion === 'hoenn' ? 'active' : ''}`}
            onClick={() => setSelectedRegion('hoenn')}
          >
            Hoenn
          </button>
          <button
            className={`navbar-button ${selectedRegion === 'sinnoh' ? 'active' : ''}`}
            onClick={() => setSelectedRegion('sinnoh')}
          >
            Sinnoh
          </button>
        </div>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </nav>
  );
};

export default Navbar;
