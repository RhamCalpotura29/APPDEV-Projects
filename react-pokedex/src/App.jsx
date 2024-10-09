import React from 'react';
import PokeDex from './Pokedex';


const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">PokeDex</h1>
        <PokeDex />
      </div>
    </div>
  );
};

export default Index;