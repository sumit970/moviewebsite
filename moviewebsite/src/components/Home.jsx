import React, { useEffect } from "react";

import MovieListening from "./MovieListening";
import movieapi from "../common/Apis/movieapi";
import { useDispatch} from "react-redux";
import { fetchAsyncMovies,fetchAsyncShows } from "../Features/Movies/Movieslice";

const Home = () => {
  // console.log(process.env.API_KEY)
  const dispatch = useDispatch();
  useEffect(() => {
    const movietext="harry"
    const showtext="Friday"
    dispatch(fetchAsyncMovies(movietext));
    dispatch(fetchAsyncShows(showtext));

  }, [dispatch]);

  return (
    <div>

      <MovieListening />
    </div>
  );
};

export default Home;
