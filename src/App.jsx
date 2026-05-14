import { useTheme } from './hooks/useTheme'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Cursor />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero theme={theme} />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
