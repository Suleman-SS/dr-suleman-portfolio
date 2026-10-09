import { motion } from 'framer-motion'
import { ShieldCheck, FileSpreadsheet, HeartPulse, Building2 } from 'lucide-react'
import { contributions } from '../data/portfolioData'

const contributionIcons = [
  ShieldCheck,
  FileSpreadsheet,
  HeartPulse,
  Building2,
]

const Contributions = () => {
  return (
    <section className="contributions">
      <div className="contributions__container">
        <div className="contributions__header">
          <span className="section-label">KEY CONTRIBUTIONS</span>
          <h2 className="section-heading">Making a Positive Impact</h2>
          <div className="heading-underline" />
        </div>

        <div className="contributions__grid">
          {contributions.map((contribution, index) => {
            const IconComponent = contributionIcons[index % contributionIcons.length]
            return (
              <motion.div
                key={index}
                className="contributions__card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="contributions__icon-badge">
                  <IconComponent size={22} />
                </div>
                <p className="contributions__text">{contribution}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contributions
