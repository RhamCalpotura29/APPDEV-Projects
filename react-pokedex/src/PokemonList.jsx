// PokemonList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokemonList = ({
  selectedRegion,
  searchTerm,
  currentPage,
  itemsPerPage,
  sortOrder, // Accept sortOrder prop
  onPageChange,
}) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false); // State for Pokémon not found

  useEffect(() => {
    const fetchPokemonsByRegion = async () => {
      let regionUrl;

      switch (selectedRegion) {
        case 'kanto':
          regionUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
          break;
        case 'johto':
          regionUrl = 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=100';
          break;
        case 'hoenn':
          regionUrl = 'https://pokeapi.co/api/v2/pokemon?offset=251&limit=135';
          break;
        case 'sinnoh':
          regionUrl = 'https://pokeapi.co/api/v2/pokemon?offset=386&limit=107';
          break;
        default:
          return;
      }

      setLoading(true);
      setError(null);
      setNotFound(false); // Reset notFound state on region change

      try {
        const response = await axios.get(regionUrl);
        setPokemonList(response.data.results);
      } catch (error) {
        setError('Error fetching Pokémon data');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonsByRegion();
  }, [selectedRegion]);

  // Filter Pokémon based on search term
  const filteredPokemons = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  // Sort Pokémon based on sortOrder
  const sortedPokemons = [...filteredPokemons].sort((a, b) => {
    if (sortOrder === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === 'id') {
      // Extract ID from the URL for comparison
      const idA = parseInt(a.url.split('/')[6], 10);
      const idB = parseInt(b.url.split('/')[6], 10);
      return idA - idB;
    }
    return 0; // Default to no sorting if invalid sortOrder
  });

  // Check if searched Pokémon exists in the current region
  useEffect(() => {
    if (searchTerm && sortedPokemons.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [searchTerm, sortedPokemons]);

  if (loading) {
    return <div>Loading Pokémon...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const indexOfLastPokemon = currentPage * itemsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
  const currentPokemons = sortedPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
  const totalPages = Math.ceil(sortedPokemons.length / itemsPerPage);

  return (
    <div>
      {notFound && (
        <div className="error-message">
          This Pokémon is not found in the {selectedRegion.charAt(0).toUpperCase() + selectedRegion.slice(1)} region.
        </div>
      )}

      <div className="pokemon-grid">
        {currentPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination-buttons">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => onPageChange(index + 1)} // Call the page change handler
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
