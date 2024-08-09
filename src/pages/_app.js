import Layout from "@/components/layout";
import "@/styles/globals.css";
import { SearchContextProvider } from "@/context";
import { createContext, useEffect, useState, useContext } from "react";

export default function App({ Component, pageProps }) {
  return (
    <SearchContextProvider value={articles}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchContextProvider>
  );
}
