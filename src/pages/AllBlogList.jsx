import BlogList from "@/components/homePage/blogList/blogList";
import Listcard from "@/components/homePage/blogList/Listcard";
import { SearchContext } from "@/components/layout";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const AllBlogList = () => {
  const { setSearchValue } = useContext(SearchContext);

  return (
    <div className="w-[100%] flex justify-center">
      <div className="w-[100%] grid grid-cols-3 gap-5">
        {articles.map((data) => (
          <Link href={"CardDetails"}>
            <BlogList
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
        <button
          className="border py-3 px-5 rounded-md"
          onClick={() => {
            setCount(count + 3);
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default AllBlogList;
