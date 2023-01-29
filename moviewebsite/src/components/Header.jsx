import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-between pl-2 pr-2 bg-slate-900  ">
        <div className="flex flex-row text-yellow-700  gap-2 text-md font-thin">
          <Link className=" hover:text-orange-500" to={"/"}>
            Home
          </Link>

          <Link className=" hover:text-orange-500" to={"/about"}>
            About
          </Link>

          <Link className=" hover:text-orange-500" to={"/services"}>
            Services
          </Link>

          <Link className=" hover:text-orange-500" to={"/contact"}>
            Contact
          </Link>
        </div>
        {/* <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/> */}
        <div className="">
          <img
            src="user.png"
            alt="use_img"
            className="w-9 h-9 rounded-full bg-grey-200 hover:bg-slate-500"
          />
        </div>
      </div>

      {/* <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
    </div>
  );
};

export default Header;
