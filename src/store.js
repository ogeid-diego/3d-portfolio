import { configureStore } from "@reduxjs/toolkit";
import { toggleReducer } from "./Features/Toggle";
import { showElementReducer } from './Features/ShowElement';

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    showElement: showElementReducer
  }
});