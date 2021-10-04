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
