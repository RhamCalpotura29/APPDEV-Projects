import React, { useState } from 'react';
import PokemonList from './PokemonList';
import Header from './Header';
import Footer from './Footer';
import SortDropdown from './SortDropdown';
import './index.css';

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState('kanto');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('name'); // State for sort order

  const itemsPerPage = 20;

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setCurrentPage(1); // Reset to first page on region change
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value); // Update sort order based on selection
  };

  return (
    <div className="app">
      <Header />
      <nav className="navbar">
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
          {/* Sort dropdown */}
          <select value={sortOrder} onChange={handleSortChange} className="sort-dropdown">
            <option value="name">Sort by Name</option>
            <option value="id">Sort by ID</option>
          </select>
        </div>
      </nav>
      <PokemonList
        selectedRegion={selectedRegion}
        searchTerm={searchTerm}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        sortOrder={sortOrder} // Pass sortOrder to PokemonList\
        onPageChange={handlePageChange}  /* Pass down the page change handler */
      />
      <Footer />
    </div>
  );
};

export default App;
