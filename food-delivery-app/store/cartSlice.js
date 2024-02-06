import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.items];
      //     findIndex will return index between 0 and length - 1
      let itemIndex = state.items.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (itemIndex >= 0) {
        // splice(start, deleteCount);
        newCart.splice(itemIndex, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in cart!`
        );
      }
      state.items = newCart;
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;

//    ============>  THESE ALL FUNCTION WILL BE ACCESSED USING USESELECTOR HOOK so State can be access
export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) =>
  //   reduce method total will be previous value and item will be current value
  state.cart.items.reduce((total, item) => total + item.price, 0);

//    as state is global and state.cart will point to slice
export const selectItemsById = (state, id) =>
  state.cart.items.filter((item) => item._id === id);
