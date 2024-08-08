import Label from "@/components/Label";
import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Heading = () => {
  return (
    <div className="w-2/3 flex flex-col items-end gap-3">
      <div
        className="rounded-xl flex items-end w-[100%] h-[37.5rem] bg-cover bg-center p-5"
        style={{ backgroundImage: `url('./images/Image.png')` }}
      >
        <div className="bg-white rounded-md w-1/2 h-2/5">
          <div className="w-[100%] p-4 flex flex-col justify-between h-[100%]">
            <div className="flex flex-col gap-2.5 w-4/5">
              <Label text={"Technology"} />
              <p className="text-3xl font-semibold text-wrap">
                Grid system for better Design User Interface
              </p>
            </div>
            <p className="text-gray-400 text-sm">August 20, 2022</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2.5">
        <button className="border p-2 rounded-md">
          <FaAngleLeft />
        </button>
        <button className="border p-2 rounded-md">
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Heading;
