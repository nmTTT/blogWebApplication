import React from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex justify-center items-center h-28 w-[100vw]">
      <div className="flex justify-between items-center w-2/3">
        <div>
          <img src="./images/Logo.png" alt="" />
        </div>
        <div className="flex justify-evenly w-4/5">
          <div className="flex gap-10 px-20">
            <button>Home</button>
            <button>Blog</button>
            <button>Contact</button>
          </div>
          <div className="px-4 py-1 flex justify-between w-1/5 bg-gray-200 rounded-md">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="w-[100%] bg-gray-200"
            />
            <button>
              <CiSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
