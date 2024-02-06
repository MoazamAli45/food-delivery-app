import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      console.log("setRestaurant action.payload", action.payload);
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => {
  console.log("state.restaurant.restaurant", state.restaurant);
  return state.restaurant.restaurant;
};
export default restaurantSlice.reducer;
