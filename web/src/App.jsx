import { Hero } from "./components/Hero";
import { Proyectos } from "./components/Proyectos";
import { Extra } from "./components/Extra";
import { InfoExtra } from "./components/InfoExtra";

function App() {
  return (
    <div className="flex flex-col items-center pt-10 max-w-[1200px] justify-center">
      <Hero />
      <Proyectos />
      <InfoExtra />
      <Extra />
    </div>
  );
}

export default App;
