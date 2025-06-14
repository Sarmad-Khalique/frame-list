import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Your Next Favorite <span className="text-gradient">Movie</span>, Made Easy
          </h1>
          <Search />
        </header>
      </div>
    </main>
  );
}
