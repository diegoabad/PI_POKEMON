import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../actions';
import { Link } from 'react-router-dom';

const Home = () => {
	const dispatch = useDispatch();
	const allPokemons = useSelector((state) => state.pokemons);
	useEffect(() => {
		dispatch(getPokemons());
	}, []);

	return (
		<div>
			<Link to='/pokemons'>Create Poke</Link>
			<h1>POKEMON API HENRY</h1>
			{/* Alfabeticamente*/}
			<select>
				<option value='asc'>Ascendente</option>
				<option value='desc'>Descendente</option>
			</select>
			{/*Por Fuerza*/}
			<select>
				<option value='asc'>Ascendente</option>
				<option value='desc'>Descendente</option>
			</select>

			{/*Por Tipo*/}
			{/*Por DB / API*/}
		</div>
	);
};

export default Home;
