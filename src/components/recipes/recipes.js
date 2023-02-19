import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchRecipes } from "../../api-data/api-data";
import { changeRecipe } from "./recipesSlice";
import { selectRecipe } from "./recipesSlice";
import { Link } from "react-router-dom";
import './recipes.css'

export function Recipes() {

  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState('')
  const recipeFinal = useSelector(selectRecipe)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('term submitted: ' + recipe)
  }

  useEffect(() => {
    searchRecipes(recipe).then(response => {
      console.log('response', response)
      dispatch(
        changeRecipe(response)
      )
    })
    }, [recipe, dispatch])

    // console.log('final', ingredientFinal)

  return(
    <div>
      <header className="recipes-header">
        <h2>Recipes</h2>
        <p>Hundreds of recipes to keep your culianary life alive!</p>
      </header>
      <form onSubmit={handleSubmit} className='search-bar'>
        <input onChange={(e) => setRecipe(e.target.value)} value={recipe} className='search-input' type='text' placeholder="Search for Recipes" />
      </form>
      <section className="recipes-container">
        {recipeFinal?.results?.map(recipe => (
          <div className="recipe-card">
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={`visual of ${recipe.title}`}/>
            <Link to={'/recipes/{recipe.id}'}>See recipe</Link>
          </div>
        ))}
      </section>
    </div>
  )
}