import React from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex justify-center items-center h-28 w-[100vw]">
      <div className="flex justify-between">
        <div>
          <img src="./Union.png" alt="" />
        </div>
        <div>
          <div className="px-56 py-6 flex gap-10">
            <button>Home</button>
            <button>Blog</button>
            <button>Contact</button>
          </div>
          <div className="px-4 py-2 bg-gray-300 rounded-md">
            <input type="text" name="" id="" placeholder="Search" />
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
