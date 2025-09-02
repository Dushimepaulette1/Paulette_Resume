import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill out all fields.')
      return
    }
    if (!isValidEmail(form.email)) {
      setStatus('Please enter a valid email address.')
      return
    }
    setStatus("Message sent! I'll get back to you soon.")
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p className="section-label" variants={fadeUp}>Get In Touch</motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Let's Work<br />Together
          </motion.h2>
          <motion.div className="divider" variants={fadeUp} />

          <div className="contact-grid">
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              variants={fadeUp}
            >
              <div className="form-field">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-input"
                  placeholder=" "
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
                <label htmlFor="name" className="form-label">Your Name</label>
              </div>

              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-input"
                  placeholder=" "
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                <label htmlFor="email" className="form-label">Email Address</label>
              </div>

              <div className="form-field">
                <textarea
                  name="message"
                  id="message"
                  className="form-input"
                  placeholder=" "
                  value={form.message}
                  onChange={handleChange}
                />
                <label htmlFor="message" className="form-label">Your Message</label>
              </div>

              {status && <p className="submit-status">{status}</p>}

              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                Send Message <FiArrowRight />
              </button>
            </motion.form>

            <motion.div className="contact-info" variants={fadeUp}>
              <p className="contact-tagline">
                Open to internships, traineeships, and exciting collaborations.
              </p>
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <span>dushimepaulette36@gmail.com</span>
              </div>
              <div className="contact-item">
                <FiLinkedin className="contact-icon" />
                <span>linkedin.com/in/paulette-dushime-1581bb319/</span>
              </div>
              <div className="contact-item">
                <FiGithub className="contact-icon" />
                <span>github.com/Dushimepaulette1</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
