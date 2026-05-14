import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'

const items = [
  {
    role: 'Software Developer Trainee',
    org: 'The Gym',
    period: 'Nov 2024 — Dec 2025',
    location: 'Kigali, Rwanda',
    desc: 'Intensive professional training program focused on real-world software development — built full-stack applications collaboratively, practiced agile workflows, and sharpened technical problem-solving skills.',
  },
  {
    role: 'Frontend Developer (Bootcamp)',
    org: 'SheCodes Plus',
    period: '2023',
    location: 'Online',
    desc: 'Completed an intensive frontend bootcamp covering HTML, CSS, JavaScript, REST APIs, responsive design, and deployment. Built and shipped real projects as part of the curriculum.',
  },
  {
    role: 'Software Developer Coach',
    org: 'African Leadership University',
    period: '2024',
    location: 'Kigali, Rwanda',
    desc: 'Mentored fellow students through technical challenges, guided project planning, and supported peers in developing software engineering fundamentals and best practices.',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Work &amp; Training
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="divider"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <div className="timeline">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <div className="timeline-line">
                <div className="timeline-dot" />
                {i < items.length - 1 && <div className="timeline-connector" />}
              </div>
              <div className="timeline-body">
                <div className="timeline-period">{item.period}</div>
                <h3 className="timeline-school">{item.org}</h3>
                <div className="timeline-degree">{item.role}</div>
                <p className="timeline-desc">{item.desc}</p>
                {item.location && (
                  <div className="timeline-location">
                    <FiMapPin size={11} />
                    {item.location}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
