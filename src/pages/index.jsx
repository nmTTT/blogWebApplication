import React, { useEffect, useState, useContext } from "react";
import HomePage from "../components/homePage/homePage";
import SearchContext from "@/context";

export default function Home() {
  const articles = useContext(SearchContext);
  return (
    <main>
      <HomePage />
    </main>
  );
}
