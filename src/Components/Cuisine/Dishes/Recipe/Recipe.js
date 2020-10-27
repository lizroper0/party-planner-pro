import React, { useState, useEffect } from 'react';

const Recipe = ({ match }) => {
	const [recipe, setRecipe] = useState();

	

    useEffect(() => {
        const recipeUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;
    
		fetch(recipeUrl)
			.then((res) => res.json())
			.then((res) => {
				setRecipe(res.meals[0]);
            })

            .catch(console.error)
    
    }, [match.params.id]);
    
    if (!recipe) {
		return null;
    }
	return (
		<div>
			<h1>{recipe.strMeal}</h1>
			<img src={recipe.strMealThumb}></img>
			<h3>Ingredients</h3>
			<ul>
				{recipe.strIngredient1 && (
					<li>
						{recipe.strMeasure1} {recipe.strIngredient1}
					</li>
				)}
				{recipe.strIngredient2 && (
					<li>
						{recipe.strMeasure2} {recipe.strIngredient2}
					</li>
				)}
				{recipe.strIngredient3 && (
					<li>
						{recipe.strMeasure3} {recipe.strIngredient3}
					</li>
				)}
				{recipe.strIngredient4 && (
					<li>
						{recipe.strMeasure4} {recipe.strIngredient4}
					</li>
				)}
				{recipe.strIngredient5 && (
					<li>
						{recipe.strMeasure5} {recipe.strIngredient5}
					</li>
				)}
				{recipe.strIngredient6 && (
					<li>
						{recipe.strMeasure6} {recipe.strIngredient6}
					</li>
				)}
				{recipe.strIngredient7 && (
					<li>
						{recipe.strMeasure7} {recipe.strIngredient7}
					</li>
				)}
				{recipe.strIngredient8 && (
					<li>
						{recipe.strMeasure8} {recipe.strIngredient8}
					</li>
				)}
				{recipe.strIngredient9 && (
					<li>
						{recipe.strMeasure9} {recipe.strIngredient9}
					</li>
				)}
				{recipe.strIngredient10 && (
					<li>
						{recipe.strMeasure10} {recipe.strIngredient10}
					</li>
				)}
				{recipe.strIngredient11 && (
					<li>
						{recipe.strMeasure11} {recipe.strIngredient11}
					</li>
				)}
				{recipe.strIngredient12 && (
					<li>
						{recipe.strMeasure12} {recipe.strIngredient12}
					</li>
				)}
				{recipe.strIngredient13 && (
					<li>
						{recipe.strMeasure13} {recipe.strIngredient13}
					</li>
				)}
				{recipe.strIngredient14 && (
					<li>
						{recipe.strMeasure14} {recipe.strIngredient14}
					</li>
				)}
				{recipe.strIngredient15 && (
					<li>
						{recipe.strMeasure15} {recipe.strIngredient15}
					</li>
				)}
				{recipe.strIngredient16 && (
					<li>
						{recipe.strMeasure16} {recipe.strIngredient16}
					</li>
				)}
				{recipe.strIngredient17 && (
					<li>
						{recipe.strMeasure17} {recipe.strIngredient17}
					</li>
				)}
				{recipe.strIngredient18 && (
					<li>
						{recipe.strMeasure18} {recipe.strIngredient18}
					</li>
				)}
				{recipe.strIngredient14 && (
					<li>
						{recipe.strMeasure19} {recipe.strIngredient19}
					</li>
				)}
				{recipe.strIngredient20 && (
					<li>
						{recipe.strMeasure20} {recipe.strIngredient20}
					</li>
				)}
			</ul>
			<h3>Instructions</h3>
			<p>{recipe.strInstructions}</p>
			{recipe.strSource && (
				<a href={recipe.strSource}>Link to Original Recipe</a>
			)}
		</div>
	);
};
export default Recipe;
