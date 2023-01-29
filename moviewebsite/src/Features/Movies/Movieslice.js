import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieapi from "../../common/Apis/movieapi";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    let api = "9841c870";
    // let movietext = "Harry";
    const response = await movieapi.get(
      `?apikey=${api}&s=${term}&type=movie`
    );

    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {

    let api = "9841c870";
    // let seriestext = "Friends";
    const response = await movieapi.get(
      `?apikey=${api}&s=${term}&type=series`
    );

    return response.data;
  }
);

export const fetchAsyncmovieorshowdetail = createAsyncThunk(
  "movies/fetchAsyncmovieorshowdetail",
  async (id) => {
    let api = "9841c870";
    const response = await movieapi.get(`?apiKey=${api}&i=${id}&Plot=full`);
    return response.data;
  }
 
);
const initialState = {
  movies: {},
  shows: {},
  movieorshoedetails: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    removeselectedmovieorshow: (state)=>{
      state.movieorshoedetails = {};
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending...");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload };
    },
    [fetchAsyncmovieorshowdetail.fulfilled]: (state, { payload }) => {
      return { ...state, movieorshoedetails: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected...");
    },
  },
});


// export const {addMovies}


export const { removeselectedmovieorshow } = movieSlice.actions;
export const getmovies = (state) => state.movies.movies;
export const getshows = (state) => state.movies.shows;
export const getmovieorshoedetails = (state) => state.movies.movieorshoedetails;
export default movieSlice.reducer;


