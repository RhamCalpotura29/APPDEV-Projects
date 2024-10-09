import React from 'react';


const PokemonDetails = ({ pokemon, onClose }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold capitalize">{pokemon.name}</DialogTitle>
          <DialogDescription>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-32 h-32 mx-auto"
            />
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="font-semibold">Type:</span>
            <span className="capitalize">{pokemon.types.map(type => type.type.name).join(', ')}</span>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="font-semibold">Height:</span>
            <span>{pokemon.height / 10} m</span>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="font-semibold">Weight:</span>
            <span>{pokemon.weight / 10} kg</span>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="font-semibold">Abilities:</span>
            <span className="capitalize">{pokemon.abilities.map(ability => ability.ability.name).join(', ')}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonDetails;