import {Hero} from './components/Hero'
import {Proyectos} from './components/Proyectos'
import {Extra} from './components/Extra'

function App() {
  return (
    <div className="flex flex-col items-center pt-10 max-w-[950px] justify-center">
      <Hero />
      <Extra />
      <Proyectos />
    </div>
  )
}

export default App;
