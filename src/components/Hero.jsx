import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const Hero = () => {
  const scrollToExperience = (e) => {
    e.preventDefault()
    const target = document.querySelector('#experience')
    if (!target) return
    if (window.__lenis && typeof window.__lenis.scrollTo === 'function') {
      window.__lenis.scrollTo(target, { offset: -72, duration: 1.0 })
    } else {
      const navHeight = 72
      const pos = target.getBoundingClientRect().top + window.pageYOffset - navHeight
      window.scrollTo({ top: pos, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero__background">
        <img
          src="./assets/hero-executive.jpg"
          alt="Healthcare leadership overlooking Dubai skyline"
          className="hero__bg-img"
          loading="eager"
        />
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <motion.div
            className="hero__author-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src="./assets/dr-suleman-profile.jpg"
              alt="Dr. Sayed Suleman Shoukat"
              className="hero__author-avatar"
            />
            <span className="hero__label">WELCOME TO MY PROFESSIONAL PORTFOLIO</span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {personalInfo.title}
          </motion.h2>

          <motion.div
            className="hero__tagline-row"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span>Patient Safety</span>
            <span className="hero__pipe">|</span>
            <span>Clinical Governance</span>
            <span className="hero__pipe">|</span>
            <span>Hospital Administration</span>
          </motion.div>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {personalInfo.heroDescription}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#experience" onClick={scrollToExperience} className="btn hero__btn-primary">
              <span>View My Experience</span>
              <ArrowRight size={17} />
            </a>
            <a href={personalInfo.cvPath} className="btn hero__btn-download" download>
              <Download size={17} />
              <span>Download CV</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
