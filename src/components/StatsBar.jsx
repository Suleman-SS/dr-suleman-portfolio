import { motion } from 'framer-motion'
import { Award, Clock, ShieldCheck, MapPin } from 'lucide-react'
import { stats } from '../data/portfolioData'

const iconMap = {
  Award,
  Clock,
  ShieldCheck,
  MapPin,
}

const StatsBar = () => {
  return (
    <section className="stats-bar" aria-label="Key statistics">
      <div className="stats-bar__container">
        {stats.map((stat, index) => {
          const IconComponent = iconMap[stat.icon] || Award
          return (
            <motion.div
              key={index}
              className="stats-bar__item"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <IconComponent size={22} className="stats-bar__icon" />
              <div className="stats-bar__content">
                <span className="stats-bar__value">{stat.value}</span>
                <span className="stats-bar__label">{stat.label}</span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default StatsBar
