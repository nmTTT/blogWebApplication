import Link from "next/link";
import React, { useEffect, useState } from "react";
import Listcard from "./Listcard";

const BlogList = () => {
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(0);
  const getArticleData = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?page=1&per_page=${9 + count}`
    );
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticleData();
  }, [count]);

  console.log("articles", articles);

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
          {articles.map((data) => (
            <Link href={"/CardDetails"}>
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
    </div>
  );
};

export default BlogList;
