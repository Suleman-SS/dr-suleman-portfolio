import { motion } from 'framer-motion'
import { ArrowRight, Users, ShieldCheck, Building2, Award } from 'lucide-react'
import { aboutHighlights } from '../data/portfolioData'

const iconMap = {
  Users,
  ShieldCheck,
  Building2,
  Award,
}

const About = () => {
  const scrollToExpertise = (e) => {
    e.preventDefault()
    const target = document.querySelector('#expertise')
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
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__grid">
          {/* Left Column: Hospital Image */}
          <motion.div
            className="about__image-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="about__image-wrapper">
              <img
                src="./assets/dr-suleman-profile.jpg"
                alt="Dr. Sayed Suleman Shoukat - Hospital Operations & Quality Manager"
                className="about__image"
                loading="lazy"
              />
              <div className="about__image-badge">
                <span className="about__badge-title">Dr. Sayed Suleman Shoukat</span>
                <span className="about__badge-subtitle">Medical Head (Admin) • 13+ Yrs Exp</span>
              </div>
            </div>
          </motion.div>

          {/* Center Column: Narrative & Intro */}
          <motion.div
            className="about__content-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="section-label-wrapper">
              <span className="section-label-bar" />
              <span className="section-label">ABOUT ME</span>
            </div>

            <h2 className="section-heading">
              A Passion for Safer and Better Healthcare
            </h2>
            <div className="heading-underline" />

            <div className="about__text-block">
              <p>
                I am a medical professional with a strong background in hospital operations,
                quality management and patient safety. Over the past 13+ years, I have worked
                in ICU, emergency and multi-specialty hospitals, leading clinical and
                administrative teams, implementing quality systems and ensuring compliance with
                national and international standards.
              </p>
              <p>
                Currently, I serve as Medical Head (Admin) at Siddhachal Hospitals, Mumbai, and
                I am seeking opportunities in the UAE in Hospital Operations, Quality
                Management or Patient Safety roles.
              </p>
            </div>

            <a href="#expertise" onClick={scrollToExpertise} className="btn about__btn">
              <span>View Expertise</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right Column: 4 Highlight Cards */}
          <motion.div
            className="about__cards-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {aboutHighlights.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Award
              return (
                <div key={index} className="about__feature-card">
                  <div className="about__feature-icon">
                    <IconComponent size={20} />
                  </div>
                  <span className="about__feature-title">{item.title}</span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
