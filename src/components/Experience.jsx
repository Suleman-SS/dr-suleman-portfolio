import { motion } from 'framer-motion'
import { experience } from '../data/portfolioData'

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <div className="experience__header">
          <div className="experience__header-left">
            <span className="section-label">PROFESSIONAL EXPERIENCE</span>
            <h2 className="section-heading">My Career Journey</h2>
            <div className="heading-underline" />
          </div>
          <p className="experience__header-subtitle">
            A timeline of my professional growth across ICU, emergency and hospital operations,
            with a consistent focus on quality, safety and better patient care.
          </p>
        </div>

        <div className="experience__timeline">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              className="experience__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Timeline Node with Step Number */}
              <div className="experience__node-col">
                <div className="experience__node">
                  <span>{index + 1}</span>
                </div>
                {index < experience.length - 1 && <div className="experience__line" />}
              </div>

              {/* Date / Period Column */}
              <div className="experience__period-col">
                <span className="experience__period">{item.period}</span>
              </div>

              {/* Details Column */}
              <div className="experience__details-col">
                <h3 className="experience__title">{item.title}</h3>
                <div className="experience__org">
                  {item.organization.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < item.organization.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
                <ul className="experience__bullets">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>

              {/* Hospital Thumbnail Column */}
              <div className="experience__image-col">
                <img
                  src={item.image}
                  alt={`${item.organization} facility`}
                  className="experience__thumbnail"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
