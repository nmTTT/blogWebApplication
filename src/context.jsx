import React, { createContext, useState } from "react";

const SearchContext = createContext();

function SearchContextProvider() {
  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [count, setCount] = useState(9);

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
    <SearchContextProvider
      value={{
        articles,
        setCount,
        searchValue,
        setSearchValue,
        handleClick,
      }}
    >
      {children}
    </SearchContextProvider>
  );
}

export default SearchContextProvider;
