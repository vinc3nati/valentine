import Valentine from "@/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center px-6 py-10 md:p-24 overflow-hidden ${inter.className}`}
    >
      <Valentine />
    </main>
  );
}
