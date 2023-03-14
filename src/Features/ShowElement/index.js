import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false
};

export const showElementSlice = createSlice({
  name: "showElement",
  initialState,
  reducers: {
    setShowElement: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setShowElement } = showElementSlice.actions;
export const showElementReducer = showElementSlice.reducer;