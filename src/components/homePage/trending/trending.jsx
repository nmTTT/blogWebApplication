import TrendingCard from "./trendingCard";
import React, { useEffect, useState } from "react";

const Trending = () => {
  const [articles, setArticles] = useState([]);

  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles");
    const data = await response.json;
    setArticles(data);
    console.log(response);
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <div className="w-[70%] flex flex-col gap-8">
      <p>Trending</p>
      <div className="flex w-[100%] justify-between">
        {articles.map((article) => (
          <TrendingCard title={article.title} images={article.images} />
        ))}
      </div>
      <div className=""></div>
    </div>
  );
};

export default Trending;
