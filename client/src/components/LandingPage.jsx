import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../img/1.jpg';
import bgm from '../img/377340.png';
const LandingPage = () => {
	const ContainerLanding = styled.div`
		height: 100vh;
		background: url(${bg});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		@media (max-width: 900px) {
			& {
				background: url(${bgm});
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
			}
		}
	`;

	const LandingH1 = styled.h1`
		font-family: 'Poppins';
		color: #1d1c1c;
		margin: 0 0 100px;
	`;

	const LandingBtn = styled.button`
		font-size: 24px;
		padding: 10px;
		border-radius: 20px;
		background-color: transparent;
		color: #fff;
		border: 1px solid #242323;
		cursor: pointer;
		width: 150px;
		margin: 0 auto;
	`;

	return (
		<ContainerLanding>
			<LandingH1>POKE API</LandingH1>
			<LandingBtn>
				<Link to='/home'>Enter</Link>
			</LandingBtn>
		</ContainerLanding>
	);
};

export default LandingPage;
