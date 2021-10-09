import React from 'react';
import styled from 'styled-components';
import BtnCreate from './BtnCreate';

const NavBar = () => {
	const NavFilter = styled.nav`
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30px 80px 40px;
		background: #141414;
		@media (max-width: 900px) {
			& {
				position: sticky;
				top: 94px;
				z-index: 1;
				padding: 10px 20px;
				display: block;
			}
		}
	`;

	const Search = styled.input`
		padding: 10px 20px;
		border-radius: 5px;
		border: 1px solid #7e7e7e;
		background: #1e2125;
		color: #e2dddd;
		font-size: 16px;
		margin: 10px 0 10px;
		letter-spacing: 1px;
		flex-basis: 40%;
		@media (max-width: 900px) {
			& {
				width: 75vw;
			}
		}
	`;

	const ContainerFilter = styled.div`
		flex-basis: 60%;
		display: flex;
		justify-content: flex-end;
		padding-left: 30px;
		align-items: center;
	`;

	const Select = styled.select`
		width: 150px;
		padding: 10px 5px;
		border-radius: 5px;
		border: 1px solid #7e7e7e;
		background: #1e2125;
		color: #e2dddd;
		font-size: 16px;
		margin-left: 40px;
		letter-spacing: 1px;
		cursor: pointer;

		@media (max-width: 900px) {
			& {
				display: none;
			}
		}
	`;

	const BtnClear = styled.p`
		cursor: pointer;
		margin-right: 30px;
		font-size: 18px;
		letter-spacing: 2px;
		margin: 0;
		padding: 10px;
		border-radius: 5px;
		&:hover {
			background-color: #c0bbbb5e;
		}
		@media (max-width: 900px) {
			& {
				display: none;
			}
		}
	`;

	return (
		<NavFilter>
			<Search placeholder='Search Your Favourite Pokémon'></Search>
			<ContainerFilter>
				<BtnClear>Clear Filter</BtnClear>
				<Select>
					<option>Types</option>
					<option>Exist</option>
					<option>DB</option>
				</Select>
				<Select>
					<option value='all'>All</option>
					<option value='exist'>Exist</option>
					<option value='created'>Created</option>
				</Select>
				<Select>
					<option>Order By</option>
					<option>A - Z</option>
					<option>Z - A</option>
					<option>Attack +</option>
					<option>Attack -</option>
				</Select>
			</ContainerFilter>
		</NavFilter>
	);
};
export default NavBar;
