import { personalInfo } from '../data/portfolioData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
