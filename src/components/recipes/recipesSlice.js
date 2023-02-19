import { createSlice } from '@reduxjs/toolkit';

export const recipesSlice = createSlice({

  name: 'recipes',
  initialState: {
    recipe: [],
    random: []
  },

  reducers: {
    changeRecipe: (state, action) => {
        state.recipe = action.payload;
        console.log(action.payload)
        console.log('state',state.recipe)
    },
    random: (state, action) => {
      state.random = action.payload
    },
  }
})

export const {changeRecipe} = recipesSlice.actions

export const selectRecipe = (state) => state.recipes.recipe;

export default recipesSlice.reducer;