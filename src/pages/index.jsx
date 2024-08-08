import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/hero/hero";

import React, { useEffect, useState } from "react";
import HomePage from "../components/homePage/homePage";

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
