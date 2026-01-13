import { motion, AnimatePresence } from 'framer-motion'
import { FiCheck, FiAlertCircle } from 'react-icons/fi'

export default function Toast({ message, type = 'success', visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={`toast toast--${type}`}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          role="alert"
        >
          <span className="toast-icon">
            {type === 'success' ? <FiCheck /> : <FiAlertCircle />}
          </span>
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
