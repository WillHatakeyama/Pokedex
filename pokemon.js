/*
escreva o modelo Pokemon que represente um pokemon(Nome, tipo, altura,
peso e nível de poder).
*/

// Definindo um Pokémon como um objeto
class Pokemon {
    constructor(nome, tipo, altura, peso, nivelDePoder) {
        this.nome = nome;
        this.tipo = tipo;
        this.altura = altura;
        this.peso = peso;
        this.nivelDePoder = nivelDePoder;
    }

    // Método para exibir informações do Pokémon
    exibirInfo() {
        return `Nome: ${this.nome}\nTipo: ${this.tipo}\nAltura: ${this.altura} m\nPeso: ${this.peso} kg\nNível de Poder: ${this.nivelDePoder}\n`;
    }
}

// Cria um Pokémon
const pikachu = new Pokemon('Pikachu', 'Elétrico', 0.4, 6, 90);
const charmander = new Pokemon('Charmander', 'Fogo', 0.5, 7, 100);
const bulbasaur = new Pokemon('Bulbasaur', 'Folha', 0.6, 9, 70);

// Exibindo as informações do Pokémon
console.log(pikachu.exibirInfo());
console.log(charmander.exibirInfo());

////////////////////////////////////////////////////////////////////////////////////////
// Definindo um Treinador
class Treinador {
    constructor(nome, pokemons) {
        if (pokemons.length === 0) {
            throw new Error("Um treinador deve ter pelo menos um Pokémon.");
        }
        this.nome = nome;
        this.pokemons = pokemons;
    }

    // Método para exibir informações do treinador e seus Pokémons
    exibirInfo() {
        let info = `Treinador: ${this.nome}\nPokémons:\n`;
        this.pokemons.forEach(pokemon => {
            info += pokemon.exibirInfo() + '\n';
        });
        return info;
    }
}

// Cadastro de treinadores com lista de Pokémons
try {
    const treinador1 = new Treinador('Ash Ketchum', [pikachu, charmander]);
    const treinador2 = new Treinador('Misty', [bulbasaur]);

    // Exibindo informações dos treinadores e seus Pokémons
    console.log(treinador1.exibirInfo());
    console.log(treinador2.exibirInfo());

    // Tentativa de cadastrar um treinador sem Pokémon
    const treinadorSemPokemon = new Treinador('Brock', []); 
} catch (error) {
    console.error(error.message);
}