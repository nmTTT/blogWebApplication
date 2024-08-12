import React, { createContext, useState, useEffect } from "react";

const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [count, setCount] = useState(9);

  const changeValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    setCount(count + 3);
  };

  const getArticleData = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?page=1&per_page=${count}`
    );
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticleData();
  }, [count]);
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
