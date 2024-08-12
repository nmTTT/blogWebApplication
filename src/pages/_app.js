import Layout from "@/components/layout";
import "@/styles/globals.css";
import { SearchContextProvider } from "@/context";

export default function App({ Component, pageProps }) {
  return (
    <SearchContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchContextProvider>
  );
}
