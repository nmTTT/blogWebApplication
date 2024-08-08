import React from "react";
import Label from "../Label";

const Listcard = ({ img, title, text, date }) => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <img src={img} alt="" className="rounded-2xl w-[22.5rem] h-[15rem]" />
      <div>
        <div>
          <Label text={text} />
          <p className="text-[1.8rem] font-semibold">{title}</p>
        </div>
        <p className="text-gray-400">{date}</p>
      </div>
    </div>
  );
};

export default Listcard;
