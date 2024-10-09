import React, { useState } from 'react';

import PokemonDetails from './PokemonDetails';

const PokemonCard = ({ pokemon }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <Card
        className="cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => setShowDetails(true)}
      >
        <CardContent className="p-4">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-32 h-32 mx-auto"
          />
          <h2 className="text-xl font-semibold text-center mt-2 capitalize">
            {pokemon.name}
          </h2>
        </CardContent>
      </Card>
      {showDetails && (
        <PokemonDetails pokemon={pokemon} onClose={() => setShowDetails(false)} />
      )}
    </>
  );
};

export default PokemonCard;