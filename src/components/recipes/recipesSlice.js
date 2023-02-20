import { createSlice } from '@reduxjs/toolkit';

export const recipesSlice = createSlice({

  name: 'recipes',
  initialState: {
    recipe: [],
    individualRecipe: []
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
  }
})

export const {changeRecipe, setIndividualRecipe} = recipesSlice.actions

export const selectRecipe = (state) => state.recipes.recipe;
export const selectIndividualRecipe = (state) => state.recipes.individualRecipe

export default recipesSlice.reducer;