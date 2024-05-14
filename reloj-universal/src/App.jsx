import { ListaRelojes } from "./components/ListaRelojes";
import { Reloj } from "./components/Reloj";

function App() {
  return (
    <div className="max-w-[1250px] w-full flex flex-col py-5 ">
      <header className="w-full">
        <h1 className="text-center text-5xl font-semibold">Reloj Universal</h1>
      </header>
      <main className="w-full flex flex-col justify-center items-center ">
        <Reloj />
        <ListaRelojes />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
