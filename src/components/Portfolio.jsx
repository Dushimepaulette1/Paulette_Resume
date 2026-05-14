import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import projects from '../data/projects'

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
