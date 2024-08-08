import TrendingCard from "./trendingCard";
import React, { useEffect, useState } from "react";
import { DataTrending } from "@/components/data";

const Trending = () => {
  return (
    <div className="w-[70%] flex flex-col gap-8">
      <div>
        <span className="text-[1.8rem] font-semibold">Trending</span>
      </div>
      <div className="flex gap-4 w-[100%]">
        {DataTrending.map((data) => (
          <TrendingCard
            description={data.description}
            images={data.images}
            text={"Technology"}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
