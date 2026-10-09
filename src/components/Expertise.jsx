import { motion } from 'framer-motion'
import {
  ClipboardCheck,
  ShieldCheck,
  Activity,
  Award,
  FileCheck,
  BarChart3,
  AlertTriangle,
  Users,
} from 'lucide-react'
import { expertise } from '../data/portfolioData'

const iconMap = {
  ClipboardCheck,
  ShieldCheck,
  Activity,
  Award,
  FileCheck,
  BarChart3,
  AlertTriangle,
  Users,
}

const Expertise = () => {
  return (
    <section id="expertise" className="expertise">
      <div className="expertise__container">
        <div className="expertise__header">
          <span className="section-label">CORE EXPERTISE</span>
          <h2 className="section-heading">Key Areas of Focus</h2>
          <div className="heading-underline" />
        </div>

        <div className="expertise__layout">
          {/* Left Grid: 8 Cards (4x2 on desktop) */}
          <div className="expertise__grid">
            {expertise.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Award
              return (
                <motion.div
                  key={index}
                  className="expertise__card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="expertise__card-icon">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="expertise__card-title">{item.title}</h3>
                </motion.div>
              )
            })}
          </div>

          {/* Right Column: Stethoscope & Governance Paperwork Image */}
          <motion.div
            className="expertise__image-col"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="expertise__image-wrapper">
              <img
                src="./assets/stethoscope-desk.jpg"
                alt="Clinical governance reporting and medical stethoscope"
                className="expertise__image"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Expertise
