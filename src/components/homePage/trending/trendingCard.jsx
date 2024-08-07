import Label from "@/components/Label";
import React from "react";

const TrendingCard = ({ images, title }) => {
  return (
    <div className="flex flex-col relative w-[18.5rem] h-[20rem]">
      <img src={images} alt="" className="absolute z-0 w-[100%] h-[100%]" />
      <div className="absolute z-10 bottom-7 left-7">
        <Label />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default TrendingCard;
