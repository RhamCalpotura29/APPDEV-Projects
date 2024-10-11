import React, { useState } from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, pokemonNames }) => {
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    const matchedSuggestions = pokemonNames.filter(name =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    
    setSuggestions(matchedSuggestions.slice(0, 5)); // Show top 5 suggestions
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search Pokémon..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion) => (
            <li key={suggestion}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
