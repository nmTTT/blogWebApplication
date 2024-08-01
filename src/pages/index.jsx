import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/hero/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
