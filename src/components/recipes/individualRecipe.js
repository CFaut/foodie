import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getRecipeInformation } from "../../api-data/api-data";
import { setIndividualRecipe } from "./recipesSlice";

export function IndividualRecipe() {

  const dispatch = useDispatch()
  let recipeId = useParams()

  useEffect(() => {
    getRecipeInformation(recipeId).then(response => {
      console.log('response', response)
      dispatch(
        setIndividualRecipe(response)
      )
    })
    }, [recipeId, dispatch])

  return(
    <div>
      <p>Info</p>
    </div>
  )
}