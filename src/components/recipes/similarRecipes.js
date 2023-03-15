import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectRecipeId, selectSimilarRecipes, setSimilarRecipes } from "./recipesSlice";
import { useSelector } from "react-redux";
import { getSimilarRecipes } from "../../api-data/api-data";
import { Link } from "react-router-dom";
import './similarRecipes.css'

export function SimilarRecipes() {

  const dispatch = useDispatch()
  const id = useSelector(selectRecipeId)
  const recipes = useSelector(selectSimilarRecipes)

  useEffect(() => {
    getSimilarRecipes(id).then(response => {
      console.log('response', response)
      dispatch(
        setSimilarRecipes(response)
      )
    })
    }, [id, dispatch])

    console.log('similar' ,recipes)

  return(
    <section className="similar-recipes-page">
      <h4>Similar recipes</h4>
      <div className="similar-recipes-section">
      {recipes?.map(recipe => (
        <div className='similar-recipes-card'>
          <img src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`} alt={`${recipe.title}`} />
          {/* <p>{recipe.title}</p> */}
          <Link to={`/recipes/${recipe.id}`} className='recipe-link'>{recipe.title}</Link>
        </div>
      ))}
      </div>
    </section>
  )
}