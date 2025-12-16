import { useTheme } from './hooks/useTheme'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <LoadingScreen />
      <Cursor />
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero theme={theme} />
        <About />
        <Education />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
