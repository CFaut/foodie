import { configureStore } from "@reduxjs/toolkit";
import ingredientReducer from "./components/ingredients/ingredientsSlice.js";
import recipesReducer from "./components/recipes/recipesSlice.js";
import restaurantsReducer from "./components/restaurants/restaurantsSlice.js";

export const store = configureStore({
  reducer: {
    ingredients: ingredientReducer,
    recipes: recipesReducer,
    restaurants: restaurantsReducer
  }
})