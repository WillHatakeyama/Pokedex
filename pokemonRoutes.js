const express = require('express');
const router = express.Router();
const pokemonController = require('../Controllers/pokemonController');

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);

module.exports = router;