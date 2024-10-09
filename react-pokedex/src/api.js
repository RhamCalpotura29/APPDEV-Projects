const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonByRegion = async (region) => {
  const regionData = {
    kanto: { offset: 0, limit: 151 },
    johto: { offset: 151, limit: 100 },
    hoenn: { offset: 251, limit: 135 },
    sinnoh: { offset: 386, limit: 107 },
    unova: { offset: 493, limit: 156 },
    kalos: { offset: 649, limit: 72 },
  };

  const { offset, limit } = regionData[region];
  const response = await fetch(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);
  const data = await response.json();

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon) => {
      const detailResponse = await fetch(pokemon.url);
      return await detailResponse.json();
    })
  );

  return pokemonDetails;
};