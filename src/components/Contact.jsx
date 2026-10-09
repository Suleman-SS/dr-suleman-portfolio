import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Download } from 'lucide-react'
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
              Management or Patient Safety. Feel free to reach out.
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
            <a href={personalInfo.phoneLink} className="contact__info-row">
              <Phone size={17} className="contact__info-icon" />
              <span>{personalInfo.phone}</span>
            </a>

            <a href={`mailto:${personalInfo.email}`} className="contact__info-row">
              <Mail size={17} className="contact__info-icon" />
              <span>{personalInfo.email}</span>
            </a>

            <div className="contact__info-row">
              <MapPin size={17} className="contact__info-icon" />
              <span>{personalInfo.location} (Open to Relocate to UAE)</span>
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
