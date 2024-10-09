import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokemonList = ({ selectedRegion, searchTerm }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div>Loading Pokémon...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filteredPokemons = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="pokemon-list">
      {filteredPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
