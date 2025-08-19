import { TypeAnimation } from 'react-type-animation'
import { FiArrowDown } from 'react-icons/fi'
import Particles from './Particles'

export default function Hero() {
  const scrollToPortfolio = (e) => {
    e.preventDefault()
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <Particles />

      <div className="container">
        <div className="hero-content">
          <div className="hero-tag">Available for opportunities</div>

          <h1 className="hero-name glitch">Dushime Paulette</h1>

          <div className="hero-role">
            <TypeAnimation
              sequence={[
                'Junior Software Engineer',
                2200,
                'Frontend Developer',
                2200,
                'ALU Student',
                2200,
                'Web Developer',
                2200,
              ]}
              wrapper="span"
              speed={52}
              repeat={Infinity}
            />
          </div>

          <p className="hero-desc">
            Passionate about crafting beautiful, performant web experiences.
            Currently studying Software Engineering at African Leadership University.
          </p>

          <div className="hero-cta">
            <a href="#portfolio" className="btn-primary" onClick={scrollToPortfolio}>
              View My Work
            </a>
            <a href="#contact" className="btn-outline" onClick={scrollToContact}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>scroll</span>
        <FiArrowDown className="scroll-arrow" />
      </div>
    </section>
  )
}
