import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonCard = ({ pokemon }) => {
  const [details, setDetails] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false); // Local state for expansion

  const fetchPokemonDetails = async () => {
    try {
      const response = await axios.get(pokemon.url);
      setDetails(response.data);
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
    }
  };

  // Fetch details once when the component mounts
  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded); // Toggle expansion state
  };

  return (
    <div className="pokemon-card" onClick={handleCardClick}>
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <img
        src={details ? details.sprites.front_default : 'https://via.placeholder.com/120'} // Show image immediately
        alt={pokemon.name}
        className="pokemon-image"
      />
      {isExpanded && details && ( // Only show details if expanded
        <div className="pokemon-details">
          <p>Height: {details.height / 10} m</p>
          <p>Weight: {details.weight / 10} kg</p>
          <p>Types: {details.types.map((type) => type.type.name).join(', ')}</p>
          {/* You can add more details here */}
        </div>
      )}
    </div>
  );
};

export default PokemonCard;