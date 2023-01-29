import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Movies/Movieslice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
