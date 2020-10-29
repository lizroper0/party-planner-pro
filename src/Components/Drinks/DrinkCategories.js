import React from 'react';
import { Link } from 'react-router-dom';
import AlcoholPic from '../../imgs/alcoholic.jpeg'
import NonAlcoholPic from '../../imgs/nonalcoholic.jpg';
import './drinks.scss';

const DrinkCategories = () => {
	return (
		<div className='drink-category-container'>
			<div className='alc'>
				<Link to='/drinks/alcoholic'>
					<h1>Alcoholic</h1>
					<img src={AlcoholPic} alt='alcohol' />
				</Link>
			</div>
			<div className='nonalc'>
				<Link to='/drinks/nonalcoholic'>
					<h1>Non-Alcoholic</h1>
					<img src={NonAlcoholPic} alt='nonalcohol' />
				</Link>
			</div>
		</div>
	);
};
export default DrinkCategories;
