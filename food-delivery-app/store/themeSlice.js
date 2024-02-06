// paletteSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { pallete } from "../theme";
const themSlice = createSlice({
  name: "theme",
  initialState: {
    index: 0,
    themeColor: { ...pallete[0] },
  },
  reducers: {
    changeColor(state, action) {
      state.themeColor = { ...action.payload.theme };
      state.index = action.payload.index;
    },
  },
});

export const { changeColor } = themSlice.actions;
export default themSlice.reducer;

// selectors.js
export const selectThemeColor = (state) => state.theme.themeColor;
export const selectThemeIndex = (state) => state.theme.index;
