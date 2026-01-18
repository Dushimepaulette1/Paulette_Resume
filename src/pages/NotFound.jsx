import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="section-label">Error 404</p>
        <h1
          className="section-title"
          style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', marginBottom: '1rem' }}
        >
          Page Not<br />Found
        </h1>
        <div className="divider" style={{ margin: '2rem auto 3rem' }} />
        <p style={{ color: 'var(--muted)', marginBottom: '2.5rem', fontSize: '0.97rem' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="btn-primary">
          <FiArrowLeft /> Back Home
        </a>
      </motion.div>
    </section>
  )
}
