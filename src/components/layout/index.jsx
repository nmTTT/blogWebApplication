import { createContext, useEffect, useState } from "react";
const { default: Footer } = require("../footer/footer");
const { default: Header } = require("../header/header");

export const SearchContext = createContext();

const Layout = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const getArticleData = async () => {
    const response = await fetch(`https://dev.to/api/articles`);
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticleData();
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const [titles, setTitles] = useState(articles);
  const handleChange = (text) => {
    setSearchValue(text);
    const findTitles = articles.filter((data) =>
      data.title.toLowerCase().includes(text)
    );
    setTitles(findTitles);
  };

  return (
    <>
      <SearchContext.Provider value={articles}>
        <Header handleChange={handleChange} />
        {children}
        <Footer />
      </SearchContext.Provider>
    </>
  );
};
export default Layout;
