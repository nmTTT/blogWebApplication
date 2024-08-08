import React, { createContext, useState, useEffect } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const getArticleData = async () => {
    const response = await fetch(`https://dev.to/api/articles`);
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <MyContext.Provider value={{ articles, setArticles }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
