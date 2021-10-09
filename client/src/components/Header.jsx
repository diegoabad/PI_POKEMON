import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';
import BtnCreate from './BtnCreate';
import { Link } from 'react-router-dom';

const Header = () => {
	const LogoImg = styled.img`
		width: 150px;

		@media (max-width: 900px) {
			& {
				width: 150px;
			}
		}
	`;

	const SVG = styled.svg`
		height: 25px;
		@media (min-width: 900px) {
			& {
				display: none;
			}
		}
	`;

	const Container = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #1e2125;
		padding: 20px 80px;
		@media (max-width: 900px) {
			& {
				padding: 20px 35px;
				position: sticky;
				top: -0.5px;
				z-index: 1;
			}
		}
	`;

	return (
		<Container>
			<LogoImg src={logo} />
			<Link to='/pokemons'>
				<BtnCreate flag={true} />
			</Link>
			<SVG
				xmlns='http://www.w3.org/2000/svg'
				class='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
					d='M4 6h16M4 12h16m-7 6h7'
				/>
			</SVG>
		</Container>
	);
};

export default Header;
