import BlogList from "@/components/homePage/blogList/blogList";
import Listcard from "@/components/homePage/blogList/Listcard";
import { SearchContext } from "@/context";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const AllBlogList = () => {
  const { setCount, count, articles, searchValue, handleClick } =
    useContext(SearchContext);

  useEffect(() => {
    setCount(15);
  }, []);

  return (
    <div className="w-[100%] m-auto mb-24 flex justify-center">
      <div className="w-2/3 flex flex-col gap-8">
        <div className="w-[100%] flex flex-col gap-8">
          <p className="text-[1.8rem] font-semibold">All Blog Post</p>
        </div>
        <div className="w-[100%] grid grid-cols-3 gap-5">
          {articles
            .filter((value) => value.title.toLowerCase().includes(searchValue))
            .map((data) => (
              <Link href={"/blog/" + data.id}>
                <Listcard
                  className="w-[100%]"
                  img={data.social_image}
                  title={data.title}
                  text={data.user.username}
                  date={data.created_at}
                />
              </Link>
            ))}
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

export default AllBlogList;
