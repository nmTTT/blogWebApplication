import React from "react";

const Heading = () => {
  return (
    <div className="rounded-xl relative">
      <img src="./images/Image.png" alt="" className="z-0" />
      <div className=" absolute bottom-3 left-3 bg-white rounded-md w-1/2 h-2/5">
        <div className="absolute w-[100%] p-4 flex flex-col justify-between h-[100%]">
          <div className="flex flex-col gap-2.5 w-4/5">
            <div>
              <span className="rounded-md text-[8px] px-2.5 py-1 text-white bg-[#4B6BFB]">
                Technology
              </span>
            </div>
            <p className="text-3xl font-semibold text-wrap">
              Grid system for better Design User Interface
            </p>
          </div>
          <p className="text-gray-400 text-sm">August 20, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
