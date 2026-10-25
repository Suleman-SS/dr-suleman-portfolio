import { motion } from 'framer-motion'
import { Calendar, Award, Building2, CheckCircle, MapPin, ShieldCheck } from 'lucide-react'
import { uaeReadiness } from '../data/portfolioData'

const iconMap = {
  Calendar,
  Award,
  Building2,
  CheckCircle,
  MapPin,
  ShieldCheck,
}

const UAEReadiness = () => {
  return (
    <section className="uae-readiness">
      <div className="uae-readiness__bg">
        <img
          src="./assets/dubai-skyline.jpg"
          alt="Dubai Skyline"
          className="uae-readiness__bg-img"
          loading="lazy"
        />
        <div className="uae-readiness__bg-overlay" />
      </div>

      <div className="uae-readiness__container">
        <div className="uae-readiness__layout">
          {/* Left Column: Heading & Narrative */}
          <motion.div
            className="uae-readiness__content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">UAE CAREER READINESS</span>
            <h2 className="section-heading">Ready for the Next Opportunity in the UAE</h2>
            <p className="uae-readiness__description">
              I am open to opportunities in Hospital Operations, Quality Management, Patient
              Safety and Clinical Governance roles in Dubai and Abu Dhabi. With 13+ years of
              hospital experience (including 8+ years focused on Quality Management Systems) and
              exposure to NABH standards, I am prepared for JCI / DHA / DOH-compliant environments.
              Currently available in Dubai from 30 October to 11 November for in-person meetings.
            </p>
          </motion.div>

          {/* Right Column: Floating Card with Checklist */}
          <motion.div
            className="uae-readiness__card-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="uae-readiness__card">
              <ul className="uae-readiness__list">
                {uaeReadiness.map((item, index) => {
                  const Icon = iconMap[item.icon] || CheckCircle
                  return (
                    <li key={index} className="uae-readiness__item">
                      <div className="uae-readiness__icon">
                        <Icon size={18} />
                      </div>
                      <div className="uae-readiness__item-content">
                        <strong className="uae-readiness__item-label">{item.label}</strong>
                        <span className="uae-readiness__item-detail">{item.detail}</span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default UAEReadiness
