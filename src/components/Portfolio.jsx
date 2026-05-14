import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    name: 'HerHorizon',
    desc: 'A full-stack web platform empowering women with resources, community, and career tools — built with a RESTful API backend and dynamic React frontend.',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    link: 'https://github.com/Dushimepaulette1/Her-Horizon',
    github: 'https://github.com/Dushimepaulette1/Her-Horizon',
    category: 'fullstack',
  },
  {
    id: 2,
    name: 'Car Sharing Platform',
    desc: 'A collaborative team project delivering a peer-to-peer car sharing service with booking flows, user authentication, and a PostgreSQL relational database.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'Git'],
    link: 'https://github.com/TheGymRwanda/c6-alu-blue-carsharing-frontend',
    github: 'https://github.com/TheGymRwanda/c6-alu-blue-carsharing-frontend',
    category: 'fullstack',
  },
  {
    id: 3,
    name: 'Study Planner Mobile App',
    desc: 'A cross-platform mobile application for organizing study schedules, tracking progress, and setting academic goals — built with Flutter and Dart.',
    tags: ['Flutter', 'Dart'],
    link: 'https://github.com/Dushimepaulette1/study_planner_app',
    github: 'https://github.com/Dushimepaulette1/study_planner_app',
    category: 'mobile',
  },
  {
    id: 4,
    name: 'RescuePlate',
    desc: 'A food rescue platform connecting restaurants with surplus food to local shelters and NGOs, reducing waste and fighting hunger.',
    tags: ['React', 'NestJS', 'MongoDB', 'Git'],
    link: 'https://github.com/Dushimepaulette1/RescuePlate',
    github: 'https://github.com/Dushimepaulette1/RescuePlate',
    category: 'fullstack',
  },
  {
    id: 5,
    name: 'Weather App',
    desc: 'A comprehensive weather app showing current temperature and time for countries worldwide, built with real-time API data.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    link: 'https://forecast-weather-app-shecodes-pau.netlify.app/',
    github: 'https://github.com/Dushimepaulette1',
    category: 'web',
  },
  {
    id: 6,
    name: 'Counter Project',
    desc: 'An interactive counter application with increase, decrease, and reset functionality — clean UI and instant feedback.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://counter-project-app.netlify.app/',
    github: 'https://github.com/Dushimepaulette1',
    category: 'web',
  },
  {
    id: 7,
    name: 'Weather with Forecast',
    desc: 'An extended weather application displaying temperatures alongside a 5-day forecast for cities globally.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    link: 'https://weather-app-with-forecast-shecodes.netlify.app/',
    github: 'https://github.com/Dushimepaulette1',
    category: 'web',
  },
  {
    id: 8,
    name: 'World Clock',
    desc: "A dynamic world clock displaying real-time hours across multiple cities alongside the user's local time.",
    tags: ['HTML', 'CSS', 'JavaScript', 'moment.js'],
    link: 'https://world-clock-dushime-paulette.netlify.app/',
    github: 'https://github.com/Dushimepaulette1',
    category: 'web',
  },
]

const FILTERS = ['All', 'Full-Stack', 'Mobile', 'Web']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active.toLowerCase().replace('-', ''))

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

        <div className="projects-list">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                className="project-row"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                layout
              >
                <div className="timeline-line">
                  <div className="timeline-dot" />
                  {i < filtered.length - 1 && <div className="timeline-connector" />}
                </div>
                <div className="project-row-left">
                  <span className="project-row-num">0{i + 1}</span>
                  <div style={{ minWidth: 0 }}>
                    <h3 className="project-row-name">{p.name}</h3>
                    <p className="project-row-desc">{p.desc}</p>
                    <div className="project-tags">
                      {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </div>

                <div className="project-row-actions">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-row-link"
                    aria-label={`View ${p.name}`}
                  >
                    {p.category === 'web' ? 'Live' : 'Repo'} <FiArrowUpRight />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-row-link project-row-link--ghost"
                    aria-label={`${p.name} source code`}
                  >
                    <FiGithub />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://github.com/Dushimepaulette1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FiGithub /> View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
