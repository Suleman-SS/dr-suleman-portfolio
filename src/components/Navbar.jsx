import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { personalInfo, navLinks } from '../data/portfolioData'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      // Active section tracking
      const sections = navLinks.map((link) => link.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, href) => {
    if (e) {
      e.preventDefault()
    }

    // Close the mobile menu first
    setIsMobileMenuOpen(false)

    // Small timeout to allow mobile menu collapse and DOM layout recalculation
    setTimeout(() => {
      const target = document.querySelector(href)
      if (!target) return

      const navHeight = 72

      if (window.__lenis && typeof window.__lenis.scrollTo === 'function') {
        window.__lenis.scrollTo(target, {
          offset: -navHeight,
          duration: 1.0,
          immediate: false,
        })
      } else {
        const elementPosition = target.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - navHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }, 60)
  }

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="navbar__container">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="navbar__logo"
        >
          <img
            src="./assets/dr-suleman-profile.jpg"
            alt="Dr. Sayed Suleman Shoukat"
            className="navbar__logo-avatar"
          />
          <span className="navbar__logo-text">DR. SAYED SULEMAN SHOUKAT</span>
        </a>

        {/* Desktop Navigation */}
        <div className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${
                activeSection === link.href.replace('#', '') ? 'navbar__link--active' : ''
              }`}
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.cvPath}
            className="navbar__cv-btn"
            download
            aria-label="Download CV"
          >
            <Download size={15} />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="navbar__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="navbar__mobile-list">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`navbar__mobile-link ${
                    activeSection === link.href.replace('#', '')
                      ? 'navbar__mobile-link--active'
                      : ''
                  }`}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={personalInfo.cvPath}
                className="navbar__mobile-cv"
                download
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
