import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <main className={`min-h-screen ${inter.className}`}>
      <h1>Home</h1>
    </main>
  );
}
