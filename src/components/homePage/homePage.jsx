import React from "react";
import Trending from "./trending/trending";

import Heading from "./heading";
import BlogList from "../blogList/blogList";

const HomePage = ({ articles }) => {
  return (
    <div className="flex flex-col items-center gap-[100px]">
      <Heading />
      <Trending />
      <BlogList />
    </div>
  );
};

export default HomePage;
