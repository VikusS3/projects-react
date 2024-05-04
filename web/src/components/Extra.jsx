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
    <section
      className="flex flex-row justify-center items-center gap-6 bg-bg-200 p-5 rounded-lg mt-5 shadow-neon
        "
    >
      <Atropodos shadow={false}>
        <ReactIcons className="w-16 h-16 " />
      </Atropodos>
      <Atropodos shadow={false}>
        <CSS className="w-16 h-16 " />
      </Atropodos>
      <Atropodos shadow={false}>
        <TailwindCSS className="w-16 h-16 " />
      </Atropodos>
      <Atropodos shadow={false}>
        <RapidAPI className="w-16 h-16 " />
      </Atropodos>
      <Atropodos shadow={false}>
        <JavaScript className="w-16 h-16 " />
      </Atropodos>
      <Atropodos shadow={false}>
        <Netlify className="w-16 h-16 " />
      </Atropodos>
      <Atropodos shadow={false}>
        <HTML5 className="w-16 h-16 " />
      </Atropodos>
    </section>
  );
}
