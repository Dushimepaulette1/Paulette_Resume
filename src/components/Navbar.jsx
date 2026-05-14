import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

const NAV_LINKS = ['Home', 'About', 'Education', 'Experience', 'Skills', 'Portfolio', 'Contact']

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (section) => {
    const el = document.getElementById(section.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setActive(section)
    setOpen(false)
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <button className="navbar-logo" onClick={() => scrollTo('Home')}>
        <span>D</span>P
      </button>

      <div className="navbar-links">
        {NAV_LINKS.map(link => (
          <button
            key={link}
            className={`nav-btn ${active === link ? 'active' : ''}`}
            onClick={() => scrollTo(link)}
          >
            {link}
          </button>
        ))}
      </div>

      <div className="navbar-actions">
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            {NAV_LINKS.map(link => (
              <button
                key={link}
                className="mobile-nav-btn"
                onClick={() => scrollTo(link)}
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
