import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../actions';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Components
import Cards from './Cards';
import BtnCreate from './BtnCreate';
import NavBar from './NavBar';
import Header from './Header';

const Home = () => {
	const dispatch = useDispatch();
	const allPokemons = useSelector((state) => state.pokemons);
	useEffect(() => {
		dispatch(getPokemons());
	}, []);

	const ContainerDiv = styled.div`
		background-color: #141414;
		color: #fff;
	`;

	return (
		<ContainerDiv>
			<Header />
			<NavBar />
			<Link to='/pokemons'>
				<BtnCreate />
			</Link>
			<Cards allPokemons={allPokemons} />
		</ContainerDiv>
	);
};

export default Home;
