import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Listcard from "./Listcard";
import { SearchContext } from "@/context";

const BlogList = () => {
  const { setCount, handleClick, searchValue, articles } =
    useContext(SearchContext);

  console.log("HOME-ART", articles);

  useEffect(() => {
    console.log("HOME-EFF");
    setCount(9);
  }, []);

  return (
    <div className="w-[100vw] flex justify-center">
      <div className="w-2/3 flex flex-col gap-8">
        <div className="w-[100%] flex flex-col gap-8">
          <p className="text-[1.8rem] font-semibold">All Blog Post</p>
          <div className="flex justify-between w-[100%]">
            <div className="flex gap-5">
              <button>All</button>
              <button>Design</button>
              <button>Travel</button>
              <button>Fashion</button>
              <button>Technology</button>
              <button>Branding</button>
            </div>
            <div>
              <button>View all</button>
            </div>
          </div>
        </div>
        <div className="w-[100%] grid grid-cols-3 gap-5">
          {articles
            .filter((value) =>
              value.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((data) => {
              console.log("I");
              return (
                <Link href={"/blog/" + data.id}>
                  <Listcard
                    className="w-[100%]"
                    img={data.social_image}
                    title={data.title}
                    text={data.user.username}
                    date={data.created_at}
                  />
                </Link>
              );
            })}
        </div>
        <div className="text-center">
          {" "}
          <button className="border py-3 px-5 rounded-md" onClick={handleClick}>
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
