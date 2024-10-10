import React, { useState } from 'react';
import PokemonList from './PokemonList';
import Navbar from './Navbar'; // Consolidated Navbar component
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component
import './index.css';

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState('kanto');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app">
      <Header />
      <Navbar 
        selectedRegion={selectedRegion} 
        setSelectedRegion={setSelectedRegion} 
        searchQuery={searchTerm} 
        setSearchQuery={setSearchTerm} 
      />
      <PokemonList selectedRegion={selectedRegion} searchTerm={searchTerm} />
      <Footer />
    </div>
  );
};

export default App;
