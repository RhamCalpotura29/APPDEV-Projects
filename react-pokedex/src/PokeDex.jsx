import React, { useState, useEffect } from 'react';
import RegionSelector from './RegionSelector';
import PokemonCard from './PokemonCard';
import { fetchPokemonByRegion } from './api.js';

const PokeDex = () => {
  const [selectedRegion, setSelectedRegion] = useState('kanto');
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      const pokemonData = await fetchPokemonByRegion(selectedRegion);
      setPokemon(pokemonData);
      setLoading(false);
    };

    loadPokemon();
  }, [selectedRegion]);

  return (
    <div>
      <RegionSelector selectedRegion={selectedRegion} onRegionChange={setSelectedRegion} />
      {loading ? (
        <div className="text-center mt-8">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
          {pokemon.map((poke) => (
            <PokemonCard key={poke.id} pokemon={poke} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PokeDex;