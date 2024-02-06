import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurantSlice";
import cartSlice from "./cartSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    // Define a top-level state field named `restaurant`, handled by `restaurantSlice`
    restaurant: restaurantSlice,
    cart: cartSlice,
    theme: themeSlice,
  },
});

export default store;
