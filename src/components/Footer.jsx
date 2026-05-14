import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © 2025 Dushime Paulette — Built with React
        </p>
        <div className="footer-socials">
          <a
            href="https://github.com/Dushimepaulette1"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com/in/paulette-dushime-1581bb319/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:p.dushime12@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  )
}
