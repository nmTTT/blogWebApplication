import React from "react";
import Trending from "./trending/trending";

import Heading from "./heading";

const HomePage = ({ articles }) => {
  return (
    <div className="flex flex-col items-center gap-[100px]">
      <Heading />
      <Trending />;
    </div>
  );
};

export default HomePage;
