const {
	getPokemonApi,
	getPokemonDB,
	pokeFilterByName,
	getPokemonApiByID,
	getPokemonDbByID,
} = require('../helpers');

const { Pokemon } = require('../db');

const getAllPokemons = async (name) => {
	const [api, db] = await Promise.all([getPokemonApi(), getPokemonDB()]);
	const allPoke = [...db, ...api];
	if (name) {
		return pokeFilterByName(allPoke, name);
	}
	return allPoke;
};

const getPokemonDetails = async (id) => {
	let poke = null;
	if (id.length < 10) {
		poke = await getPokemonApiByID(id);
	} else {
		poke = await getPokemonDbByID(id);
	}
	return poke;
};

const createPokemon = async (
	name,
	id,
	img,
	hp,
	attack,
	defense,
	speed,
	height,
	weight,
	types
) => {
	let poke = await Pokemon.create({
		name: name.toLowerCase(),
		id,
		hp,
		img,
		attack,
		defense,
		speed,
		height,
		weight,
	});
	await poke.addType(types);
};

module.exports = {
	getAllPokemons,
	getPokemonDetails,
	createPokemon,
};
