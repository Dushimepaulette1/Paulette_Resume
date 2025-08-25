import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaPython } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiFigma } from 'react-icons/si'
import { MdPhoneAndroid } from 'react-icons/md'

const skills = [
  { name: 'HTML5',      Icon: FaHtml5 },
  { name: 'CSS3',       Icon: FaCss3Alt },
  { name: 'JavaScript', Icon: FaJs },
  { name: 'React',      Icon: FaReact },
  { name: 'Git',        Icon: FaGitAlt },
  { name: 'Python',     Icon: FaPython },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Tailwind',   Icon: SiTailwindcss },
  { name: 'Figma',      Icon: SiFigma },
  { name: 'Responsive', Icon: MdPhoneAndroid },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        <p className="section-label">What I Work With</p>
        <h2 className="section-title">Skills &<br />Technologies</h2>
        <div className="divider" />

        <div className="skills-grid">
          {skills.map(({ name, Icon }, i) => (
            <motion.div
              key={name}
              className="skill-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Icon className="skill-icon" />
              <span className="skill-name">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
