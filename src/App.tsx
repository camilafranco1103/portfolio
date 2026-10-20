import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import Projects from './components/Projects'
import About from './components/About'
import FoodStoreDetails from './components/FoodStoreDetails'

function App() {
  if (window.location.pathname === '/proyectos/food-store') {
    return <FoodStoreDetails />
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />

      <WhatsAppButton />
    </>
  )
}

export default App
