import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-grid"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="about-image-wrapper" variants={fadeUp}>
            <img src="/images/pau.jpg" alt="Dushime Paulette" className="about-img" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Crafting Digital<br />Experiences
            </h2>
            <div className="divider" />

            <p className="about-text">
              I'm currently a student at <strong>African Leadership University (ALU)</strong>,
              pursuing a Bachelor's degree in <span className="highlight">Software Engineering</span>.
              With a passion for web development, I'm seeking opportunities to join a
              dynamic team where I can <strong>grow and make a real impact</strong>.
            </p>
            <p className="about-text">
              I completed <span className="highlight">SheCodes Plus</span>, a bootcamp that
              deepened my frontend skills and gave me hands-on project experience. I care deeply
              about building clean, accessible interfaces that people love to use.
            </p>

            <div className="about-stats">
              <div>
                <div className="stat-number">4+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div>
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Coding</div>
              </div>
              <div>
                <div className="stat-number">5+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
