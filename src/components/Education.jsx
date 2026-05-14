import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'

const items = [
  {
    school: 'African Leadership University',
    degree: 'BSc Software Engineering',
    period: '2022 — Present',
    location: 'Kigali, Rwanda',
    desc: 'Studying software engineering with focus on web development, algorithms, and collaborative software architecture.',
  },
  {
    school: 'SheCodes Plus',
    degree: 'Frontend Web Development Bootcamp',
    period: '2023',
    location: 'Online',
    desc: 'Intensive program covering HTML, CSS, JavaScript, REST APIs, responsive design, and deployment.',
  },
  {
    school: 'The Gym',
    degree: 'Training Program',
    period: '2024 — Present',
    location: 'Kigali, Rwanda',
    desc: 'Ongoing professional training focused on technical skill development and continuous growth.',
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Background
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Education &<br />Training
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
                <h3 className="timeline-school">{item.school}</h3>
                <div className="timeline-degree">{item.degree}</div>
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
