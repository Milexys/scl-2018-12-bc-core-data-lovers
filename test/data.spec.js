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
  it('it should return arrays with a condition type Water', () => {
    expect(window.pokemones.filterPokemon(POKEMON.pokemon, "Water")[0].name).toEqual('Squirtle');
  });
  
});

 
