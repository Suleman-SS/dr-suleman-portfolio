import { motion } from 'framer-motion'
import {
  ClipboardCheck,
  HeartPulse,
  BadgeCheck,
  Building2,
} from 'lucide-react'
import { qualitySafety } from '../data/portfolioData'

const iconMap = {
  ClipboardCheck,
  HeartPulse,
  BadgeCheck,
  Building2,
}

const QualitySafety = () => {
  return (
    <section id="quality-safety" className="quality-safety">
      <div className="quality-safety__container">
        <div className="quality-safety__header">
          <span className="section-label">QUALITY, SAFETY & HOSPITAL OPERATIONS</span>
          <h2 className="section-heading">Driving Safer and More Efficient Healthcare</h2>
          <div className="heading-underline" />
        </div>

        <div className="quality-safety__grid">
          {qualitySafety.map((card, index) => {
            const IconComponent = iconMap[card.icon] || ClipboardCheck
            return (
              <motion.div
                key={index}
                className="quality-safety__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Card Top Image */}
                <div className="quality-safety__card-img-wrapper">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="quality-safety__card-img"
                    loading="lazy"
                  />
                </div>

                {/* Card Body */}
                <div className="quality-safety__card-body">
                  <div className="quality-safety__card-title-row">
                    <IconComponent size={22} className="quality-safety__card-icon" />
                    <h3 className="quality-safety__card-title">{card.title}</h3>
                  </div>
                  <ul className="quality-safety__card-list">
                    {card.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default QualitySafety
