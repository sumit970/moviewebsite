import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAsyncShows } from "../Features/Movies/Movieslice";
import { fetchAsyncMovies } from "../Features/Movies/Movieslice";
import { getmovies, getshows } from "../Features/Movies/Movieslice";
import MovieCard from "./MovieCard";
const MovieListening = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector(getmovies);
  const shows = useSelector(getshows);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (data === "") {
      alert("Please Enter the Data First");
    }
    
    setData("");
    navigate("/");
    dispatch(fetchAsyncMovies(data));
    dispatch(fetchAsyncShows(data));
    console.log(data);
  };
  // const submitsearch=(e)=>{
  //       e.de
  // }
  // console.log("the serches movies_results", movies);

  const [data, setData] = useState("");
  if (movies.Response === "True" && shows.Response === "True") {
    return (
      <>
        <div className="flex  items-center justify-center pt-3 ">
          <form
            action="POST"
            onSubmit={handlesubmit}
            className="rounded-md border-2 border-slate-800 "
          >
            <input
              type="text"
              name="search"
              value={data}
              onChange={(e) => setData(e.target.value)}
              id=""
              className="p-2 pl-3 outline-none bg-slate-800 text-white"
            />
            <button className="p-2  bg-slate-400  rounded-sm ">Search</button>
          </form>
        </div>
        {/* this is for movies list */}
        <div className="text-4xl font-light p-3 text-white">Movies</div>
        <div className="flex flex-wrap gap-3 pb-4 shadow-md">
          {movies.Search.map((elem, index) => {
            return <MovieCard key={index} data={elem} />;
          })}
        </div>

        {/* <h1 className="">Hello world</h1> */}

        {/* this is for movies list  */}
        <div className="text-4xl font-light p-3 text-white">Shows</div>
        <div className="flex flex-wrap gap-3 pb-4 shadow-md">
          {shows.Search.map((elem, index) => {
            return <MovieCard key={index} data={elem} />;
          })}
        </div>
      </>
    );
  } else {
    return (
      <h1>
        Hey There! you might have no data.
        <span className="">there is Error! </span>
      </h1>
    );
  }
};

export default MovieListening;
