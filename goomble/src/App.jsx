import {
  AplicactionIcon,
  CameraIcon,
  LabIcons,
  MicrophoneIcon,
  SearchIcon,
} from "./icons/Icons";

function App() {
  return (
    <div className="bg-[#181A1B] w-full h-screen ">
      <header className="w-full px-5 py-6">
        <nav>
          <ul className="flex justify-end gap-7 text-zinc-300 font-medium">
            <li className="hover:underline">
              <a href="#">Gmail</a>
            </li>
            <li className="hover:underline">
              <a href="#">Imágenes</a>
            </li>
            <li className="hover:cursor-pointer">
              <LabIcons />
            </li>
            <li className="hover:cursor-pointer">
              <AplicactionIcon />
            </li>
            <li className="hover:cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-green-500" />
            </li>
          </ul>
        </nav>
      </header>
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
        <div className="w-full flex justify-center items-center mt-10">
          <div className="max-w-xl min-h-12 w-auto rounded-3xl mx-0 my-0 relative border border-zinc-400 flex grow ">
            <div className="flex-1 flex-row flex px-5 justify-center items-center ">
              <div className="flex text-zinc-400">
                <SearchIcon />
              </div>
              <div className="flex flex-1 flex-wrap">
                <textarea
                  name=""
                  id=""
                  className="bg-transparent resize-none outline-none break-words flex text-white
                  overflow-x-hidden w-full  leading-6 pt-5 pl-4 inset-0  box-border text-xl font-medium"
                ></textarea>
              </div>
              <div className="flex-[0_0_auto] flex justify-center items-center gap-4 text-zinc-400">
                <MicrophoneIcon />
                <CameraIcon />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
