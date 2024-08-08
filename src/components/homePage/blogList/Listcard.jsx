import Label from "@/components/Label";
import React from "react";

const Listcard = ({ img, title, text, date }) => {
  return (
    <div className="p-4 flex flex-col gap-6 w-[100%] rounded-xl border ">
      <img src={img} alt="" className="rounded-2xl" />
      <div className="w-[100%]">
        <div>
          <div>
            <span className="rounded-md text-[8px] px-2.5 py-1 text-purple-400 bg-gray-200">
              {text}
            </span>
          </div>
          <p className="text-[1.8rem] font-semibold">{title}</p>
        </div>
        <p className="text-gray-400">{date}</p>
      </div>
    </div>
  );
};

export default Listcard;
