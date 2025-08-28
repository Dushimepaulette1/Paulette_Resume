import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    name: 'Weather App',
    desc: 'A comprehensive weather app showing current temperature and time for countries worldwide.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    img: '/images/weather project.png',
    link: 'https://forecast-weather-app-shecodes-pau.netlify.app/',
    category: 'web',
  },
  {
    id: 2,
    name: 'Counter Project',
    desc: 'An interactive counter with increase, decrease, and reset functionality.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    img: '/images/counter.png',
    link: 'https://counter-project-app.netlify.app/',
    category: 'web',
  },
  {
    id: 3,
    name: 'Weather with Forecast',
    desc: 'A weather app showing temperatures and 5-day forecasts for cities globally.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    img: '/images/FORECAST.jpg',
    link: 'https://weather-app-with-forecast-shecodes.netlify.app/',
    category: 'web',
  },
  {
    id: 4,
    name: 'World Clock',
    desc: 'A dynamic world clock displaying real-time hours across multiple cities.',
    tags: ['HTML', 'CSS', 'JavaScript', 'moment.js'],
    img: '/images/World-Clock-2.png',
    link: 'https://world-clock-dushime-paulette.netlify.app/',
    category: 'web',
  },
]

const FILTERS = ['All', 'Web']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active.toLowerCase())

  return (
    <section id="portfolio" ref={ref}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="divider"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <div className="portfolio-filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.38, delay: i * 0.07 }}
                layout
              >
                <div className="project-img-wrap">
                  <img src={p.img} alt={p.name} className="project-img" />
                </div>
                <div className="project-info">
                  <div className="project-num">0{i + 1}</div>
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo <FiArrowUpRight />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
