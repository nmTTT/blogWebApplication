import Link from "next/link";
import React, { useEffect, useState } from "react";
import Listcard from "./Listcard";

const BlogList = () => {
  const [articles, setArticles] = useState([]);

  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles");
    const data = await response.json();
    setArticles(data);
    console.log("response", response);
  };

  useEffect(() => {
    getArticleData();
  }, []);
  console.log("articles", articles);

  return (
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
      <div>
        {articles.map((data) => (
          <Listcard
            className="w-2/3 grid grid-cols-3 gap-5"
            img={data.social_image}
            title={data.title}
            text={data.tags}
            date={data.created_at}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
