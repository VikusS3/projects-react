import {
  ReactIcons,
  CSS,
  TailwindCSS,
  HTML5,
  RapidAPI,
  JavaScript,
  Netlify,
} from "./Icons";
import Atropodos from "atropos/react";
export function Extra() {
  return (
    <section className="flex flex-row flex-wrap justify-center items-center gap-6 bg-bg-200 p-5 rounded-lg mt-5 border border-white">
      <Atropodos highlight={false} >
        <ReactIcons className="w-16 h-16" />
      </Atropodos>
      <Atropodos highlight={false} >
        <CSS className="w-16 h-16" />
      </Atropodos>
      <Atropodos highlight={false} >
        <TailwindCSS className="w-16 h-16" />
      </Atropodos>
      <Atropodos highlight={false} >
        <RapidAPI className="w-16 h-16" />
      </Atropodos>
      <Atropodos highlight={false} >
        <JavaScript className="w-16 h-16" />
      </Atropodos>
      <Atropodos highlight={false} >
        <Netlify className="w-16 h-16" />
      </Atropodos>
      <Atropodos highlight={false} >
        <HTML5 className="w-16 h-16" />
      </Atropodos>
    </section>
  );
}
