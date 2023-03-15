import React from "react";
import './individualRecipe.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getRecipeInformation } from "../../api-data/api-data";
import { setIndividualRecipe, setRecipeId } from "./recipesSlice";
import { selectIndividualRecipe } from "./recipesSlice";
import { SimilarRecipes } from "./similarRecipes";

export function IndividualRecipe() {

  const dispatch = useDispatch()
  let recipeId = useParams()
  const individualRecipe = useSelector(selectIndividualRecipe)
  console.log(individualRecipe)
  console.log(individualRecipe.image)

  useEffect(() => {
    getRecipeInformation(recipeId.recipeId).then(response => {
      console.log('response', response)
      dispatch(
        setIndividualRecipe(response)
      )
    })
    }, [recipeId, dispatch])

    dispatch(
      setRecipeId(recipeId.recipeId)
    )

  return(
      <div>
        <div className='recipe-page'>
          <section className='recipe-header'>
            <h2>{individualRecipe.title}</h2>
            <img src={individualRecipe.image} alt={recipeId.title}/>
          </section>
          <section className="recipe-info">
            <div className="serving-info">
              <p>Serves {individualRecipe.servings}</p>
              <p>Ready In: {individualRecipe.readyInMinutes} minutes.</p>
              <p>${individualRecipe.pricePerServing} per serving</p>
            </div>
            <div className='health-info'>
              {individualRecipe.veryHealthy? <p>Very Healthy</p> : <p></p>}
              {individualRecipe.vegan? <p>Vegan</p> : <p></p>}
              {individualRecipe.vegetarian? <p>Vegetarian</p> : <p></p>}
              {individualRecipe.veryHealthy? <p>Very Healthy</p> : <p></p>}
              {individualRecipe.glutenFree? <p>Gluten free</p> : <p></p>}
              {individualRecipe.dairyFree? <p>Dairy Free</p> : <p></p>}
              {individualRecipe.lowFodmap? <p>Low Fodmap</p> : <p></p>}
              {individualRecipe.sustainable? <p>Sustainable</p> : <p></p>}
            </div>
          </section>
          <div className="recipe-box">
          <section className='ingredients'>
            <h3>Ingredients:</h3>
              <ul>
              {individualRecipe?.extendedIngredients?.map(ingredient => (
                <li key={ingredient.original}>{ingredient.original}</li>
              ))}
              </ul>
            </section>
            <section className="recipe-instructions">
              <h3>Instructions</h3>
              <div>
                {individualRecipe.instructions}
              </div>
            </section>
            </div>
          </div>
          <SimilarRecipes/>
        </div>
  )
}