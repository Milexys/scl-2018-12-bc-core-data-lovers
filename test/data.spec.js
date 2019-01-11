global.window = global;
global.assert = require('chai').assert;
require('data.spec.js');
require('..src/data/pokemon/pokemon.js');
require('../src/data.js');

describe('POKEMON.pokemon', () => {
  it('debería ser un objeto', () => {
    expect(typeof window.pokemones).toBe('object');
  });
});


 
