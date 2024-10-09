import React, { useState } from 'react';
import PokemonList from './PokemonList';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component
import './index.css';

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState('kanto');
  const [searchTerm, setSearchTerm] = useState('');

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="app">
      <Header />
      <nav className="navbar">
        <h1 className="navbar-title">PokeDex</h1>
        <div className="navbar-controls">
          <div className="navbar-buttons">
            {['kanto', 'johto', 'hoenn', 'sinnoh'].map((region) => (
              <button
                key={region}
                className={`navbar-button ${selectedRegion === region ? 'active' : ''}`}
                onClick={() => handleRegionChange(region)}
              >
                {region.charAt(0).toUpperCase() + region.slice(1)}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search Pokémon..."
            className="search-bar"
            onChange={handleSearchChange}
          />
        </div>
      </nav>
      <PokemonList selectedRegion={selectedRegion} searchTerm={searchTerm} />
      <Footer />
    </div>
  );
};

export default App;
