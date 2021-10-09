import React from 'react';
import styled from 'styled-components';

export default function Card({ id, name, img, types }) {
	function colorPicker(mainType) {
		switch (mainType) {
			case 'grass':
				return '#109617be';
				break;
			case 'fire':
				return '#e0830add';
				break;

			case 'water':
				return '#0a79e0e1';
				break;

			case 'bug':
				return '#08410ce2';
				break;

			case 'electric':
				return '#e9da07c5';
				break;

			case 'poison':
				return '#8006c7c8';
				break;

			case 'fairy':
				return '#e25ae2e1';
				break;
			case 'normal':
				return '#b6b6b6dd';
				break;
			case 'ground':
				return '#7c3303e1';
				break;
			default:
				return '#000';
		}
	}

	const Containercard = styled.div`
		text-transform: capitalize;
		font-family: 'Poppins';
		background-color: ${colorPicker(types[0])};
		display: flex;
		padding: 20px 10px;
		border-radius: 10px;
		justify-content: space-around;
		align-items: center;
		height: 130px;
		position: relative;

		&:hover {
			transform: translateY(-5px);
			transition: 0.4s ease-in-out;
		}
	`;

	const Infocard = styled.div`
		color: #fff;
		flex-basis: 60%;
		height: 120px;
	`;

	const ContainerImg = styled.div`
		flex-basis: 40%;
	`;

	const PokeImg = styled.img`
		width: 100px;
		height: 100px;
	`;

	const InfoH3 = styled.h3`
		font-size: 24px;
		text-decoration: none;
		letter-spacing: 2px;
		margin: 20px 0;
	`;

	const InfoType = styled.p`
		font-size: 14px;
		margin: 12px 5px;
		background-color: #ffffff42;
		border-radius: 15px;
		display: inline;
		padding: 5px 15px;
	`;

	const ID = styled.span`
		position: absolute;
		top: 7px;
		left: 12px;
		color: white;
		font-weight: 500;
		font-size: 16px;
		letter-spacing: 1px;
	`;

	const TypeContainer = styled.div``;

	return (
		<Containercard>
			<ID>{typeof id === 'number' ? `# ${id}` : 'CREATED'}</ID>
			<Infocard>
				<InfoH3>{name}</InfoH3>
				<TypeContainer>
					{types.map((type) => {
						type = type[0].toUpperCase() + type.slice(1);

						return <InfoType>{type}</InfoType>;
					})}
				</TypeContainer>
			</Infocard>
			<ContainerImg>
				<PokeImg src={img} />
			</ContainerImg>
		</Containercard>
	);
}
