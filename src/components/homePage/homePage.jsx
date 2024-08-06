import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Heading from "../heading";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-[100px]">
      <div className="w-2/3 flex flex-col items-end gap-3">
        <Heading />
        <div className="flex gap-2.5">
          <button className="border">
            <FaAngleLeft />
          </button>
          <button className="border">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
