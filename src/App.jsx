import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useParallax } from './hooks/useParallax'

function App() {
  useParallax()

  return (
    <>
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
