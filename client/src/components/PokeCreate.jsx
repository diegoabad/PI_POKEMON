import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postPokemon, getTypes, filterByCreatedOrExist } from '../actions';

import { NavLink, useHistory } from 'react-router-dom';

import styles from './createPoke.module.css';

const PokeCreate = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const types = useSelector((state) => state.types);
	const [input, setInput] = useState({
		name: '',
		hp: 0,
		attack: 0,
		defense: 0,
		speed: 0,
		weight: 0,
		height: 0,
		types: [],
		img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg',
	});

	function handleChange(e) {
		e.preventDefault();
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	}

	function handleCheck(e) {
		if (e.target.checked) {
			setInput({
				...input,
				types: [...input.types, parseInt(e.target.value)],
			});
		}
		if (!e.target.checked) {
			setInput({
				...input,
				types: input.types.filter((type) => type !== parseInt(e.target.value)),
			});
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(postPokemon(input));
		alert('Pokémon Created');
		setInput({
			name: '',
			hp: 0,
			attack: 0,
			defense: 0,
			speed: 0,
			weight: 0,
			height: 0,
			types: [],
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg',
		});
		history.push('/home');
	}

	useEffect(() => {
		dispatch(getTypes());
	}, []);

	return (
		<div className={styles.container}>
			<NavLink to='/home' className={styles.exit}>
				<svg
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
						d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
					/>
				</svg>
			</NavLink>
			<div className={styles.containerForm}>
				<h1 className={styles.title}>Create Pokémon</h1>
				<form onSubmit={(e) => handleSubmit(e)}>
					<input
						className={styles.inputForm}
						type='text'
						name='name'
						placeholder='Name'
						onChange={(e) => handleChange(e)}
					></input>
					<input
						className={styles.inputForm}
						type='number'
						min='0'
						name='hp'
						placeholder='HP'
						onChange={(e) => handleChange(e)}
					></input>
					<input
						className={styles.inputForm}
						type='number'
						min='0'
						name='attack'
						placeholder='Attack'
						onChange={(e) => handleChange(e)}
					></input>
					<input
						className={styles.inputForm}
						type='number'
						min='0'
						name='defense'
						placeholder='Defense'
						onChange={(e) => handleChange(e)}
					></input>
					<input
						className={styles.inputForm}
						type='number'
						min='0'
						name='speed'
						placeholder='Speed'
					></input>
					<input
						className={styles.inputForm}
						type='number'
						min='0'
						name='weight'
						placeholder='Weight'
						onChange={(e) => handleChange(e)}
					></input>
					<input
						className={styles.inputForm}
						type='number'
						min='0'
						name='height'
						placeholder='Height'
						onChange={(e) => handleChange(e)}
					></input>
					<input
						className={styles.inputForm}
						type='text'
						name='img'
						placeholder='URL img'
						onChange={(e) => handleChange(e)}
					></input>
					<div className={styles.containerTypes}>
						{types.map((type) => {
							return (
								<div>
									<label className={styles.lbl}>
										<input
											className={styles.check}
											onChange={(e) => handleCheck(e)}
											type='checkbox'
											name='types'
											value={type.id}
										/>
										{type.name}
									</label>
								</div>
							);
						})}
					</div>

					<button className={styles.btn}>Create</button>
				</form>
			</div>
		</div>
	);
};

export default PokeCreate;
