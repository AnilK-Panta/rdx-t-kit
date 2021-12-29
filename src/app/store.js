import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";
import colorSlice from "../features/theme/ThemeSlice";

export const store = configureStore({
  reducer: {
    coounter: counterReducer,
    color: colorSlice,
  },
});
