import { CameraIcon, MicrophoneIcon, SearchIcon } from "../icons/Icons";
/*
pasar propiedades para el className a un div
*/

export default function Search({ extraClass }) {
  return (
    <div className={` ${extraClass}`}>
      <div className="max-w-xl min-h-12 w-auto rounded-3xl mx-0 my-0 relative border border-zinc-400 flex grow ">
        <div className="flex-1 flex-row flex px-5 justify-center items-center ">
          <div className="flex text-zinc-400">
            <SearchIcon />
          </div>
          <div className="flex flex-1 flex-wrap">
            <form>
              <input
                name="search"
                id="search"
                className="bg-transparent  outline-none  flex text-white
                  overflow-x-hidden w-full  leading-6  pl-4 inset-0  box-border text-xl font-medium"
              />
            </form>
          </div>
          <div className="flex-[0_0_auto] flex justify-center items-center gap-4 text-zinc-400">
            <MicrophoneIcon />
            <CameraIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
