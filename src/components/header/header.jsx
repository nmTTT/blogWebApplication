import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const { searchValue, setSearchValue } = useState("");
  const { titles, setTitles } = useState(articles);
  const handleChange = (text) => {
    setSearchValue(text);
    const findTitles = articles.filter((value) =>
      value.title.toLowerCase().includes(text.toLowerCase())
    );
    setTitles(findTitles);
  };

  return (
    <div className="flex justify-center items-center h-28 w-[100vw]">
      <div className="flex justify-between items-center w-2/3">
        <div>
          <img src="images/Logo.png" alt="" />
        </div>
        <div className="flex justify-evenly w-4/5">
          <div className="flex gap-10 px-20">
            <Link href={"/"}>Home</Link>
            <Link href={"/AllBlogList"}>Blog</Link>
            <Link href={"/Contact"}>Contact</Link>
          </div>
          <div className="px-4 py-1 flex justify-between w-1/5 bg-gray-200 rounded-md">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="w-[100%] bg-gray-200"
              onChange={handleChange}
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
