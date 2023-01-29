import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { img } from "../assets";
import { BiLike } from "react-icons/bi";
import { MdOutlineMovie } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import {
  getmovieorshoedetails,
  fetchAsyncmovieorshowdetail,
  removeselectedmovieorshow,
} from "../Features/Movies/Movieslice";
import { CirclesWithBar } from "react-loader-spinner";
const Loader = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        {
          <CirclesWithBar
            height="100"
            width="100"
            color="	#1E90FF"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel="circles-with-bar-loading"
          />
        }
      </div>
    </>
  );
};

const MovieDetail = () => {
  const { imdbID } = useParams();
  //  const new_id=_id.replace(':','');
  const dispatch = useDispatch();
  const data = useSelector(getmovieorshoedetails);
  useEffect(() => {
    dispatch(fetchAsyncmovieorshowdetail(imdbID));
    return () => {
      dispatch(removeselectedmovieorshow());
    };
  }, [dispatch, imdbID]);

  const load = Object.keys(data).length === 0;

  //  console.log("this is the data",_id);

  // console.log("this  data", data);
  if(load){
    return(
      <Loader/>
    )
  }

  return (
    <>
      <div className="flex sm:flex-row flex-col justify-center  sm:justify-evenly p-3">
        <div className="flex flex-col p-4">
          <h1 className="text-3xl text-white font-light p-2">{data.Title}</h1>
          <div className="flex flex-wrap text-sm text-slate-500 gap-2 space-x-1 p-2">
            <span className=" flex flex-row">
              IMDB Rating
              <img src={img} alt="" className="w-5 h-5" /> :{data.imdbRating}
            </span>
            <span className="">
              IMDB Votes <BiLike fontSize={17} className="inline " />:
              {data.imdbVotes}
            </span>
            <span className="">
              Runtime <MdOutlineMovie fontSize={17} className="inline " />:
              {data.Runtime}
              
            </span>
            <span className="">
              Year <FcCalendar fontSize={17} className="inline " />:{data.Year}
            </span>

          </div>
          <div className="min-w-[300px] max-w-[650px]">
            <span className=" text-white text-sm font-light">{data.Plot}</span>
          </div>
          <div className="flex flex-col items-start justify-start text-white text-base font-light">
            <span className="flex gap-2">
              Director: <p className="text-blue-700">{data.Director}</p>
            </span>
            <span className="flex gap-2">
              Stars: <p className="text-blue-700">{data.Actors}</p>
            </span>
            <span className="flex gap-2">
              Genres:<p className="text-blue-700">{data.Genre}</p>
            </span>
            <span className="flex gap-2">
              Language: <p className="text-blue-700">{data.Language}</p>
            </span>
            <span className="flex gap-2">
              Awards: <p className="text-blue-700">{data.Awards}</p>
            </span>
            <span className="flex gap-2">
              Writers: <p className="text-blue-700">{data.Writer}</p>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <img
            src={data.Poster}
            alt=""
            className="w-[250px] h-[350px] rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
