import React, { createContext, useState, useEffect } from "react";

const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [count, setCount] = useState();

  const getArticleData = async () => {
    console.log("DATA-GET", count);
    const response = await fetch(
      `https://dev.to/api/articles?page=1&per_page=${count}`
    );
    console.log("DD", response);
    const data = await response.json();
    console.log("DD", data);
    setArticles(data);
  };

  useEffect(() => {
    getArticleData();
  }, [count]);

  const changeValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    setCount(count + 3);
  };

  return (
    <SearchContext.Provider
      value={{
        articles,
        setCount,
        searchValue,
        setSearchValue,
        handleClick,
        changeValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
