import Layout from "@/components/layout";
import "@/styles/globals.css";
import { SearchContextProvider } from "@/context";
import { createContext, useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
