import { createSlice } from '@reduxjs/toolkit';

export const restaurantsSlice = createSlice({

  name: 'restaurants',
  initialState: {
    restaurants: [],
    random: []
  },

  reducers: {
    changeRestaurant: (state, action) => {
        state.restaurants = action.payload;
        console.log('payload',action.payload)
        console.log(state.restaurants)
    },
    random: (state, action) => {
      state.random = action.payload
    },
  }
})

export const {changeRestaurant} = restaurantsSlice.actions

export const selectRestaurants = (state) => state.restaurants.restaurants;

export default restaurantsSlice.reducer;