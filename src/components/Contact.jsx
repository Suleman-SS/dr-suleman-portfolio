import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Download, Calendar } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__row">
          {/* Left Column: Heading & Intro */}
          <motion.div
            className="contact__left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label section-label--light">GET IN TOUCH</span>
            <h2 className="section-heading section-heading--light">Let's Connect</h2>
            <p className="contact__description">
              I would be glad to discuss opportunities in Hospital Operations, Quality
              Management, Patient Safety or Clinical Governance. Available for in-person
              meetings in Dubai from 30 October to 11 November.
            </p>
          </motion.div>

          {/* Middle Column: Contact Info List */}
          <motion.div
            className="contact__center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {personalInfo.dubaiAvailability && (
              <div className="contact__availability-badge">
                <Calendar size={16} className="contact__availability-icon" />
                <span>{personalInfo.dubaiAvailability}</span>
              </div>
            )}

            {personalInfo.dubaiPhone && (
              <a href={personalInfo.dubaiPhoneLink} className="contact__info-row contact__info-row--highlight">
                <Phone size={17} className="contact__info-icon contact__info-icon--dubai" />
                <span><strong>Dubai:</strong> {personalInfo.dubaiPhone}</span>
              </a>
            )}

            <a href={personalInfo.phoneLink} className="contact__info-row">
              <Phone size={17} className="contact__info-icon" />
              <span><strong>India:</strong> {personalInfo.phone}</span>
            </a>

            <a href={`mailto:${personalInfo.email}`} className="contact__info-row">
              <Mail size={17} className="contact__info-icon" />
              <span>{personalInfo.email}</span>
            </a>

            <div className="contact__info-row">
              <MapPin size={17} className="contact__info-icon" />
              <span>{personalInfo.location} (Open to UAE — {personalInfo.uaeTarget})</span>
            </div>
          </motion.div>

          {/* Right Column: Download CV Button */}
          <motion.div
            className="contact__right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href={personalInfo.cvPath} className="btn contact__cv-btn" download>
              <Download size={17} />
              <span>Download CV</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
