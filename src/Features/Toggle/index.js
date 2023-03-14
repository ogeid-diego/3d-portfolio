import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setToggle: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setToggle } = toggleSlice.actions;
export const toggleReducer = toggleSlice.reducer;