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
describe('POKEMON.pokemon.orderPokemon', () => {
  it('it should be a function', ()=> {
    expect(typeof window.pokemones.orderPokemon).toBe('function');
  });
  it('it should return the pokemon name: Abra from the first array with order A-Z', () => {
    expect(window.pokemones.orderPokemon(POKEMON.pokemon, "name", "az")[0].name).toEqual('Abra');
  });
  it('it should return the pokemon name: Zubat from the first array with order Z-A', () => {
    expect(window.pokemones.orderPokemon(POKEMON.pokemon, "name", "za")[0].name).toEqual('Zubat');
  });
  it('it should return the pokemon num: 001 from the first array with order 1-151', () => {
    expect(window.pokemones.orderPokemon(POKEMON.pokemon, "num", "small-big")[0].num).toEqual('001');
  });
  it('it should return the pokemon num: 151 from the first array with order 151-1', () => {
    expect(window.pokemones.orderPokemon(POKEMON.pokemon, "num", "big-small")[0].num).toEqual('151');
  });
});
 
