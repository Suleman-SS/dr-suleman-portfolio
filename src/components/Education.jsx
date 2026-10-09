import { motion } from 'framer-motion'
import { GraduationCap, Award, CheckCircle } from 'lucide-react'
import { education, certifications, dhaEligibility } from '../data/portfolioData'

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education__container">
        <div className="education__header">
          <span className="section-label">EDUCATION & CERTIFICATIONS</span>
          <h2 className="section-heading">Academic Background and Professional Training</h2>
          <div className="heading-underline" />
        </div>

        <div className="education__grid">
          {/* Left Area: 2 Degree Cards side by side */}
          <div className="education__degrees-row">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education__card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="education__card-icon">
                  <GraduationCap size={28} />
                </div>
                <div className="education__card-content">
                  <h3 className="education__degree-title">{edu.degree}</h3>
                  <p className="education__institution">{edu.institution}</p>
                  <p className="education__university">{edu.university}</p>
                  <span className="education__year-tag">{edu.year}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Area: Certifications & Training Card */}
          <motion.div
            className="education__cert-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4 }}
          >
            <div className="education__cert-header">
              <Award size={20} className="education__cert-header-icon" />
              <h3 className="education__cert-title">Certifications & Training</h3>
            </div>

            <ul className="education__cert-list">
              {certifications.map((cert, index) => (
                <li key={index} className="education__cert-item">
                  <CheckCircle size={16} className="education__cert-check" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>

            <div className="education__dha-badge">
              <div className="education__dha-icon">
                <Award size={18} />
              </div>
              <div>
                <span className="education__dha-title">{dhaEligibility.title}</span>
                <span className="education__dha-code">{dhaEligibility.code}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
