import { createSlice } from '@reduxjs/toolkit';

export const ingredientSlice = createSlice({

  name: 'ingredients',
  initialState: {
    ingredient: [],
    random: []
  },

  reducers: {
    changeIngredient: (state, action) => {
        state.ingredient = action.payload;
        console.log(action.payload)
        console.log('state',state.ingredient)
    },
    random: (state, action) => {
      state.random = action.payload
    },
  }
})

export const {changeIngredient} = ingredientSlice.actions

export const selectIngredient = (state) => state.ingredients.ingredient;

export default ingredientSlice.reducer;