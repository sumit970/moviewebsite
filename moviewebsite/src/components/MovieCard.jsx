import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { data } = props;
  const handledetail = () => {};
  // console.log(data.Title);
  return (
    <div className="flex flex-wrap items-center pl-2 justify-center transition-all  ">
      <div className="flex flex-col items-center  justify-center bg-slate-800 rounded-md ">
        <Link to={`/movie/${data.imdbID}`}>
          <img
            src={data.Poster}
            alt={data.Title}
            className=" w-[180px] h-[250px] shadow-md rounded-md  "
            onClick={handledetail}
          />
        </Link>

        <div className="flex flex-col justify-start items-start pl-2 font-semibold text-white text-sm">
          <span className="max-w-[180px]">
            <Link to={`/movie/${data.imdbID}`} className="hover:text-blue-600">
              {data.Title}

            </Link>

          </span>
          <span className="">{data.Year}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
