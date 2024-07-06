import Header from "../components/Header";
import Search from "../components/Search";
import { SearchResults } from "../components/SearchResults";

export default function Results() {
  return (
    <div className="bg-[#181A1B] h-screen overflow-y-auto w-full">
      <header className="flex p-6 justify-between items-center">
        <div className="flex gap-20">
          <div className="text-2xl font-medium">
            <span className="text-blue-500">G</span>
            <span
              className="
            text-red-500"
            >
              o
            </span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">m</span>
            <span className="text-green-500">b</span>
            <span
              className="
            text-red-500"
            >
              l
            </span>
            <span
              className="
            text-blue-500"
            >
              e
            </span>
          </div>
          <Search extraClass="mt-0" />
        </div>
        <Header />
      </header>
      <main className="text-white">
        <SearchResults />
      </main>
    </div>
  );
}
