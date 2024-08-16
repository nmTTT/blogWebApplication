import Label from "@/components/Label";
import React, { useEffect, useState } from "react";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Heading = () => {
  const [heading, setHeading] = useState([]);
  const [count, setCount] = useState(0);

  const getHeadingData = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?page=1&per_page=5`
    );
    const data = await response.json();
    setHeading(data);
  };

  useEffect(() => {
    getHeadingData();
  }, []);

  return (
    <div className="container m-auto flex justify-center">
      <div className="w2/3 flex flex-col items-end gap-3">
        <div className="bg-red-700 container m-auto w-full flex rounded-xl overflow-scroll">
          {heading.map((data) => {
            return (
              <div
                style={{
                  transition: "all",
                  transitionDuration: "0.5s",
                  transitionTimingFunction: "ease-in-out",
                  transform: `translate(-${count}00%,0)`,
                }}
                className="min-w-full"
              >
                <div
                  className="flex items-end h-[37.5rem] bg-cover bg-center p-5 border shadow-lg rounded-xl"
                  style={{ background: `url(${data?.social_image})` }}
                >
                  {console.log(data.social_image)}
                  <div className="bg-white border rounded-md w-1/2 h-2/5">
                    <div className="w-[100%] p-4 flex flex-col justify-between h-[100%]">
                      <div className="flex flex-col gap-2.5 w-4/5">
                        <Label text={data.user.username} />
                        <p className="text-3xl font-semibold text-wrap">
                          {data.title}
                        </p>
                      </div>
                      <p className="text-gray-400 text-sm">{data.created_at}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-2.5">
          <button
            onClick={() => {
              setCount(count - 1);
              if (count <= 0) {
                setCount(4);
              }
            }}
            className="border p-2 rounded-md"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={() => {
              setCount(count + 1);
              if (count >= 4) {
                setCount(0);
              }
            }}
            className="border p-2 rounded-md"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
