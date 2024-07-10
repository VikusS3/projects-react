import { Hero } from "./components/Hero";
import { Proyectos } from "./components/Proyectos";

function App() {
  return (
    <main className="relative h-full w-full pt-16 min-h-screen flex gap-y-20 flex-col justify-between px-8  bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <Hero />
      <Proyectos />
    </main>
  );
}

export default App;
