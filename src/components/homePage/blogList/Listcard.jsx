import Label from "@/components/Label";
import React from "react";

const Listcard = ({ img, title, text, date }) => {
  return (
    <div className="p-4 flex flex-col gap-4 w-[100%] rounded-xl border h-[30rem] hover:shadow-md hover:-translate-y-3 transition duration-150 ease-out hover:ease-in">
      <img src={img} alt="" className="rounded-2xl h-3/5" />
      <div className="w-[100%] flex flex-col justify-between h-2/5">
        <div className="w-[100%] h-[90%] overflow-auto">
          <div>
            <span className="rounded-md text-[8px] px-2.5 py-1 text-purple-400 bg-gray-200">
              {text}
            </span>
          </div>
          <div>
            <p className="text-[1.8rem] font-semibold">{title}</p>
          </div>
        </div>
        <p className="text-gray-400">{date}</p>
      </div>
    </div>
  );
};

export default Listcard;
