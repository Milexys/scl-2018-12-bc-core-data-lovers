global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data.js');

describe('POKEMON.pokemon', () => {
  it('debería ser un objeto', () => {
    expect(typeof window.pokemones).toBe('object');
  });
});

describe('POKEMON.pokemon.filterPokemon', () => {
  it('it should be a function', ()=> {
    expect(typeof window.pokemones.filterPokemon).toBe('function');
  });
  it('it should return as first pokemon with a condition type Water Squirtle', () => {
    expect(window.pokemones.filterPokemon(POKEMON.pokemon, "Water")[0].name).toEqual('Squirtle');
  });
  it('it should return as second pokemon with a condition type Fighting Primeape', () => {
    expect(window.pokemones.filterPokemon(POKEMON.pokemon, "Fighting")[1].name).toEqual('Primeape');
  });
});

 
