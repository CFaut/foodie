import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {changeIngredient} from "./ingredientsSlice";
import { selectIngredient } from "./ingredientsSlice";
import { searchIngredients } from "../../api-data/api-data";
import './ingredients.css'

export function Ingredients() {

  const dispatch = useDispatch();
  const [ingredient, setIngredient] = useState('')
  const ingredientFinal = useSelector(selectIngredient)

  console.log(ingredient, ingredientFinal)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('term submitted: ' + ingredient)
  }

  useEffect(() => {
    searchIngredients(ingredient).then(response => {
      console.log('response', response)
      dispatch(
        changeIngredient(response)
      )
    })
    }, [ingredient, dispatch])

    console.log('final', ingredientFinal)

  return(
    <div>
      <header className="ingredients-header">
        <h2>Ingredients</h2>
        <p>Hundreds of ingredients and information at your fingertips!</p>
      </header>
      <form onSubmit={handleSubmit} className='search-bar'>
        <input onChange={(e) => setIngredient(e.target.value)} value={ingredient} className='search-input' type='text' placeholder="Search for Ingredients" />
      </form>
      <section className="ingredients-container">
        {ingredientFinal?.results.map(ingredient => (
          <div className="ingredient-card">
            <p>{ingredient.name}</p>
            <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={`visual of ${ingredient.name}`}/>
          </div>
        ))}
      </section>
    </div>
  )
}