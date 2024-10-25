const pokemons = [
    {id: 1, nome: 'Bulbassoauro', tipo: 'Vegetal/Veneno'},
    {id: 2, nome: 'Squirtle', tipo: 'Agua'},
    {id: 3, nome: 'Charmander', tipo: 'Fogo'},
];

const getPokemons = () => getPokemons;
const getPokemonById = (id) => getPokemons.find(p => p.id === parseInt(id));
const createPokemon = (nome, tipo) => getPokemons.push(pokemons.length+1, nome, tipo)

module.exports = {getPokemons, getPokemonById, createPokemon};
