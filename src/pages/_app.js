import Layout from "@/components/layout";
import "@/styles/globals.css";
import { SearchContextProvider } from "@/context";
import { createContext, useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const SearchContext = createContext();
  const [articles, setArticles] = useState([]);
  const getArticlesData = async () => {
    const response = await fetch(`https://dev.to/api/articles`);
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticlesData();
  }, []);

  return (
    <SearchContextProvider value={articles}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchContextProvider>
  );
}
