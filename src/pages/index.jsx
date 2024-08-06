import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/hero/hero";
import HomePage from "@/components/homepage/homePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
