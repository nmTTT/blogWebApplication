import React, { useContext, useEffect } from "react";
import Trending from "./trending/trending";

import Heading from "./heading";
import BlogList from "./blogList/blogList";
import { SearchContext } from "@/context";

const HomePage = () => {
  const { searchValue, articles, handleClick, setCount } =
    useContext(SearchContext);
  useEffect(() => {
    setCount(9);
  }, []);
  return (
    <div className="flex flex-col items-center gap-[100px] m-24">
      <Heading />
      <Trending />
      <BlogList
        articles={articles}
        searchValue={searchValue}
        handleClick={handleClick}
      />
    </div>
  );
};

export default HomePage;
