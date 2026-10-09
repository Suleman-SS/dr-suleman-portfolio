import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import QualitySafety from './components/QualitySafety'
import Contributions from './components/Contributions'
import Education from './components/Education'
import UAEReadiness from './components/UAEReadiness'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    // Expose globally so components can trigger smooth programmatic scroll
    window.__lenis = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.__lenis = null
    }
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Expertise />
        <Experience />
        <QualitySafety />
        <Contributions />
        <Education />
        <UAEReadiness />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
