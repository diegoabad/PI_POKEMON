import axios from 'axios';

export function getPokemons() {
	return async function (dispatch) {
		const pokemons = await axios.get('http://localhost:3001/pokemons');
		dispatch({
			type: 'GET_POKEMONS',
			payload: pokemons.data,
		});
	};
}

export function getPokemonsByName(payload) {
	return async function (dispatch) {
		try {
			const pokemon = await axios.get(
				'http://localhost:3001/pokemons?name=' + payload
			);
			dispatch({
				type: 'GET_POKEMONS_BY_NAME',
				payload: pokemon.data,
			});
		} catch (err) {
			console.log(err);
		}
	};
}

export function postPokemon(payload) {
	return async function (dispatch) {
		const response = await axios.post(
			'http://localhost:3001/pokemons',
			payload
		);
		return response;
	};
}

export function getTypes() {
	return async function (dispatch) {
		const types = await axios.get('http://localhost:3001/types');
		dispatch({
			type: 'GET_TYPES',
			payload: types.data,
		});
	};
}

export function filterByCreatedOrExist(payload) {
	return async function (dispatch) {
		dispatch({
			type: 'CREATED_OR_EXIST',
			payload,
		});
	};
}

export function filterByTypes(payload) {
	return async function (dispatch) {
		dispatch({
			type: 'FILTER_BY_TYPES',
			payload,
		});
	};
}

export function orderBy(payload) {
	return async function (dispatch) {
		dispatch({
			type: 'ORDER_BY',
			payload,
		});
	};
}
