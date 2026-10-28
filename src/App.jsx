import BaraSus from './components/BaraSus'
import Hero from './components/Hero'
import BandaIncredere from './components/BandaIncredere'
import Despre from './components/Despre'
import Servicii from './components/Servicii'
import Program from './components/Program'
import Inscriere from './components/Inscriere'
import Programari from './components/Programari'
import Intrebari from './components/Intrebari'
import Contact from './components/Contact'
import ChemareFinala from './components/ChemareFinala'
import Subsol from './components/Subsol'

export default function App() {
  return (
    <>
      <BaraSus />
      <main>
        <Hero />
        <BandaIncredere />
        <Despre />
        <Servicii />
        <Program />
        <Inscriere />
        <Programari />
        <Intrebari />
        <Contact />
        <ChemareFinala />
      </main>
      <Subsol />
    </>
  )
}
