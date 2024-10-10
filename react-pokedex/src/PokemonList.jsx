import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokemonList = ({ selectedRegion, searchTerm }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchPokemonsByRegion = async () => {
      const regionUrls = {
        kanto: 'https://pokeapi.co/api/v2/pokemon?limit=151',
        johto: 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=100',
        hoenn: 'https://pokeapi.co/api/v2/pokemon?offset=251&limit=135',
        sinnoh: 'https://pokeapi.co/api/v2/pokemon?offset=386&limit=107',
      };

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(regionUrls[selectedRegion]);
        setPokemonList(response.data.results);
      } catch (error) {
        setError('Error fetching Pokémon data');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonsByRegion();
  }, [selectedRegion]);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredPokemons = pokemonList
    .filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm))
    .sort((a, b) => {
      return sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });

  if (loading) {
    return <div>Loading Pokémon...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="pokemon-list-container">
      <div className="sort-container">
        <label>Sort by: </label>
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="asc">A to Z</option>
          <option value="desc">Z to A</option>
        </select>
      </div>
      <div className="pokemon-list">
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))
        ) : (
          <div className="error-message">No Pokémon found in this region with the name "{searchTerm}".</div>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
