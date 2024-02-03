import { Valentine } from "@/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return (
    <main
      className={`flex flex-col items-center ${inter.className}`}
    >
      <Valentine />
    </main>
  );
}
