import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	const ContainerDiv = styled.div`
		height: 60px;
		background-color: #0f0f0f;
		display: Flex;
		align-items: center;
		justify-content: center;
	`;

	const SVG = styled.svg`
		height: 25px;
		margin-left: 10px;
	`;
	const Parrafo = styled.p`
		word-spacing: 2px;
	`;

	const Span = styled.span`
		color: #f1ab14;
		font-weight: 500;
	`;
	return (
		<ContainerDiv>
			<Parrafo>
				Hecho por <Span>Diego Abad </Span>
			</Parrafo>
			<SVG
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
				/>
			</SVG>
		</ContainerDiv>
	);
};

export default Footer;
