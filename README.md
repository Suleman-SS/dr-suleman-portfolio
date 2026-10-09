# Dr. Sayed Suleman Shoukat — Portfolio Website

A premium, production-ready personal portfolio website for **Dr. Sayed Suleman Shoukat**, a Hospital Operations & Quality Manager with 13+ years of experience in ICU, Emergency, and Hospital Administration.

## 🚀 Technology Stack

- **React 18** — Component-based UI
- **Vite** — Lightning-fast build tool
- **Framer Motion** — Premium animations
- **Lenis** — Smooth scrolling
- **Lucide React** — Modern icons
- **Modern CSS** — Custom properties, Grid, Flexbox

## 📁 Project Structure

```
src/
  components/
    Navbar.jsx          — Sticky navigation with active tracking
    Hero.jsx            — Hero section with professional imagery
    StatsBar.jsx        — Key statistics strip
    About.jsx           — Professional introduction
    Expertise.jsx       — Core expertise grid
    Experience.jsx      — Career timeline
    QualitySafety.jsx   — Quality & Safety cards
    Contributions.jsx   — Key contributions
    Education.jsx       — Education & certifications
    UAEReadiness.jsx    — UAE career readiness
    Contact.jsx         — Contact information
    Footer.jsx          — Professional footer
    BackToTop.jsx       — Scroll-to-top button
  data/
    portfolioData.js    — All portfolio content (easy to update)
  App.jsx               — Main application component
  main.jsx              — Entry point
  index.css             — Complete stylesheet
public/
  assets/               — Images
  cv.pdf                — CV file (place your PDF here)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## 📄 CV File

Place your CV PDF at:

```
public/cv.pdf
```

The "Download CV" buttons throughout the website will link to this file.

## 🌐 Deployment to GitHub Pages

This project includes a GitHub Actions workflow for automatic deployment.

### Steps:

1. Push to a GitHub repository
2. Go to **Settings → Pages → Source** and select **GitHub Actions**
3. Push to the `main` branch — the site will auto-deploy

### Manual Deployment:

```bash
npm run build
```

The built files are in the `dist/` directory — deploy these to any static hosting.

## 🎨 Customization

All text content is centralized in `src/data/portfolioData.js`. Edit this file to update:

- Personal information
- Experience entries
- Education details
- Certifications
- Expertise areas
- Contact details

## 📱 Responsive Design

Fully responsive across:
- Desktop (1200px+)
- Laptop (1024px)
- Tablet (768px)
- Mobile (480px)
- Small mobile (320px+)

## ♿ Accessibility

- Semantic HTML5
- Proper heading hierarchy
- Alt text for all images
- ARIA labels for interactive elements
- Keyboard accessible navigation
- Focus states
- Respects `prefers-reduced-motion`

## 📜 License

© Dr. Sayed Suleman Shoukat. All rights reserved.
