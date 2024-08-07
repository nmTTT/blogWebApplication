import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/hero/hero";
import HomePage from "@/components/homepage/homePage";
import React, { useEffect, useState } from "react";

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
