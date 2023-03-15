import { createSlice } from '@reduxjs/toolkit';

export const recipesSlice = createSlice({

  name: 'recipes',
  initialState: {
    recipe: [],
    individualRecipe: [],
    id: [],
    similarRecipes: []
  },

  reducers: {
    changeRecipe: (state, action) => {
        state.recipe = action.payload;
        console.log(action.payload)
        console.log('state',state.recipe)
    },
    setIndividualRecipe: (state, action) => {
      state.individualRecipe = action.payload
    },
    setRecipeId: (state, action) => {
      state.id = action.payload
      console.log(action.payload)
      console.log('state',state.recipe)
    },
    setSimilarRecipes: (state, action) => {
      state.similarRecipes = action.payload
      console.log(action.payload)
      console.log('state',state.recipe)
    },
  }
})

export const {changeRecipe, setIndividualRecipe, setRecipeId, setSimilarRecipes} = recipesSlice.actions

export const selectRecipe = (state) => state.recipes.recipe;
export const selectIndividualRecipe = (state) => state.recipes.individualRecipe
export const selectRecipeId = (state) => state.recipes.id
export const selectSimilarRecipes = (state) => state.recipes.similarRecipes

export default recipesSlice.reducer;