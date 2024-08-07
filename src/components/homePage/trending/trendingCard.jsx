import Label from "@/components/Label";
import React from "react";

const TrendingCard = ({ images, description }) => {
  return (
    <div className="flex flex-col relative w-1/5">
      <img src="{}" alt="" />
      <div>
        <Label />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TrendingCard;
