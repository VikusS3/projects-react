import Header from "../components/Header";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="bg-[#181A1B] w-full h-screen ">
      <Header extraClass="px-5 py-6 w-full" />
      <main className="w-full flex flex-col justify-center items-center mt-20">
        <div className="text-9xl font-medium">
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
        <Search extraClass={`mt-10 w-full flex justify-center items-center`} />
      </main>
    </div>
  );
}
