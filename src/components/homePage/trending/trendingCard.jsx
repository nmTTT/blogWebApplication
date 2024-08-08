import Label from "@/components/Label";
import React from "react";

const TrendingCard = ({ images, description, text }) => {
  return (
    <div
      className={`flex items-end h-[18rem] bg-blend-darken bg-center bg-cover rounded-2xl bg-[rgba(0,0,0,0.5)]`}
      style={{
        backgroundImage: `url(${images})`,
      }}
    >
      <div className="flex flex-col gap-4 pl-6 pb-6">
        <Label text={text} />
        <p className="text-white w-[90%]">{description}</p>
      </div>
    </div>
  );
};

export default TrendingCard;
