import Navbar from './Navbar'
import ScrollIndicator from './ScrollIndicator'

export default function Hero() {
  return (
    <header className="hero" id="inicio">
      {/* Background Cosmic Ambient Glows */}
      <div className="ambient-glow glow-center"></div>
      <div className="ambient-glow glow-bottom-left"></div>
      <div className="ambient-glow glow-top-right"></div>

      {/* Transparent Navbar */}
      <Navbar />

      {/* Orbital SVG Rings */}
      <div className="orbital-container">
        <svg className="orbital-svg" viewBox="0 0 850 520" aria-hidden="true">
          <defs>
            <linearGradient id="orbit-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff2d78" stopOpacity="0.9"/>
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.65"/>
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3"/>
            </linearGradient>
            <linearGradient id="orbit-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.45"/>
              <stop offset="100%" stopColor="#ff2d78" stopOpacity="0.15"/>
            </linearGradient>
          </defs>
          {/* Main elliptical orbit ring */}
          <ellipse cx="425" cy="260" rx="380" ry="200" transform="rotate(-8 425 260)" className="orbit-path-1"/>
          {/* Secondary orbit ring */}
          <ellipse cx="425" cy="260" rx="340" ry="170" transform="rotate(5 425 260)" className="orbit-path-2"/>
          {/* Sparkle stars on orbits */}
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" className="orbit-star" transform="translate(680, 120) scale(0.9)"/>
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" className="orbit-star" transform="translate(140, 380) scale(0.7)"/>
        </svg>
      </div>

      {/* Flower Layers (Parallax on Scroll) */}
      <div className="flower-layer flower-bottom-left">
        <img src="/assets/flower_left.jpg" alt="Flor azul inferior izquierda" />
      </div>
      <div className="flower-layer flower-top-right">
        <img src="/assets/flower_right.jpg" alt="Flor azul superior derecha" />
      </div>

      {/* Floating Petals */}
      <div className="petal petal-1"><img src="/assets/petals.jpg" alt="Pétalo" /></div>
      <div className="petal petal-2"><img src="/assets/petals.jpg" alt="Pétalo" /></div>
      <div className="petal petal-3"><img src="/assets/petals.jpg" alt="Pétalo" /></div>
      <div className="petal petal-4"><img src="/assets/petals.jpg" alt="Pétalo" /></div>
      <div className="petal petal-5"><img src="/assets/petals.jpg" alt="Pétalo" /></div>

      {/* Center Hero Branding */}
      <div className="hero-content">
        <div className="title-wrapper">
          {/* Sparkle on letters */}
          <svg className="sparkle sparkle-top-right" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
          </svg>
          <svg className="sparkle sparkle-bottom-left" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
          </svg>
          <h1 className="hero-title">april</h1>
        </div>
        <p className="hero-subtitle">web developer</p>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator href="#sobre-mi" />
    </header>
  )
}
