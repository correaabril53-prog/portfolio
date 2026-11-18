import TechCard from './TechCard'

export default function Technologies() {
  return (
    <section className="tech-section" id="tecnologias">
      {/* Ambient Cosmic Glows */}
      <div className="ambient-glow glow-tech-left"></div>
      <div className="ambient-glow glow-tech-right"></div>

      {/* Ambient Curved Lines */}
      <div className="tech-bg-curves" aria-hidden="true">
        <svg viewBox="0 0 1440 600" preserveAspectRatio="none" className="tech-curves-svg">
          <defs>
            <linearGradient id="tech-curve-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff2d78" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="tech-curve-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#ff2d78" stopOpacity="0.75"/>
            </linearGradient>
          </defs>
          <path d="M -100,100 Q 220,-40 1520,260" fill="none" stroke="url(#tech-curve-grad-1)" strokeWidth="1.2" className="tech-ambient-line" />
          <path d="M -50,460 Q 750,590 1550,320" fill="none" stroke="url(#tech-curve-grad-2)" strokeWidth="1.2" className="tech-ambient-line" />
        </svg>
      </div>

      <div className="tech-container">
        {/* Header */}
        <header className="tech-intro">
          <div className="tech-tag-wrapper">
            <span className="tech-tag-line"></span>
            <span className="tech-tag">MI STACK <span className="highlight-pink">TECNOLÓGICO</span></span>
            <span className="tech-tag-line"></span>
          </div>

          <h2 className="tech-title">Tecnologías</h2>

          <p className="tech-desc">
            Las tecnologías que utilizo para crear y dar vida<br />a mis proyectos web.
          </p>
        </header>

        {/* 3 Tech Cards Grid */}
        <div className="tech-grid">
          {/* Card 01: HTML */}
          <TechCard
            title="HTML"
            desc="Creo la estructura y organizo el contenido de las páginas web."
            highlight={false}
          >
            <svg className="tech-logo-svg html5-logo" viewBox="0 0 512 512" aria-hidden="true">
              <polygon fill="#E44D26" points="107.6,470.9 74.6,100.6 437.4,100.6 404.3,470.8 255.8,512"/>
              <polygon fill="#F16529" points="256,480.5 376,447.2 404.3,130.9 256,130.9"/>
              <polygon fill="#EBEBEB" points="256,268.2 195.9,268.2 191.8,221.7 256,221.7 256,176.3 142.1,176.3 143.2,188.5 154.4,313.6 256,313.6"/>
              <polygon fill="#EBEBEB" points="256,386.2 205.2,372.6 202,336.3 156.4,336.3 162.8,407.6 255.8,433.5"/>
              <polygon fill="#FFFFFF" points="255.8,268.2 255.8,313.6 311.8,313.6 306.5,372.5 255.8,386.2 255.8,433.4 348.9,407.6 360.3,280.4 361.4,268.2"/>
              <polygon fill="#FFFFFF" points="255.8,176.3 255.8,221.7 365.4,221.7 369.5,176.3"/>
            </svg>
          </TechCard>

          {/* Card 02: CSS */}
          <TechCard
            title="CSS"
            desc="Diseño estilos, colores, animaciones y diseños adaptables."
            highlight={true}
          >
            <svg className="tech-logo-svg css3-logo" viewBox="0 0 512 512" aria-hidden="true">
              <polygon fill="#264DE4" points="107.6,470.9 74.6,100.6 437.4,100.6 404.3,470.8 255.8,512"/>
              <polygon fill="#2965F1" points="256,480.5 376,447.2 404.3,130.9 256,130.9"/>
              <polygon fill="#EBEBEB" points="256,268.2 202.8,268.2 205.2,372.5 255.8,386.2 256,433.4 162.8,407.6 156.4,336.3 177.4,336.3 180.2,268.2 146.2,268.2 142.1,221.7 256,221.7"/>
              <polygon fill="#EBEBEB" points="256,176.3 142.1,176.3 146.2,221.7 256,221.7"/>
              <polygon fill="#FFFFFF" points="256,221.7 313.8,221.7 310.2,268.2 256,268.2 256,313.6 306.5,313.6 302.2,372.5 256,386.2 256,433.4 348.9,407.6 360.3,280.4 361.4,268.2 365.4,221.7 369.5,176.3 256,176.3"/>
            </svg>
          </TechCard>

          {/* Card 03: JAVASCRIPT */}
          <TechCard
            title="JAVASCRIPT"
            desc="Agrego interactividad y funciones dinámicas a mis proyectos."
            highlight={false}
          >
            <svg className="tech-logo-svg js-logo" viewBox="0 0 512 512" aria-hidden="true">
              <rect width="512" height="512" rx="72" fill="#F7DF1E"/>
              <path d="M292 376c0 40 23 64 64 64 35 0 55-18 55-46 0-33-22-45-58-60l-12-5c-43-18-68-37-68-83 0-45 35-76 89-76 46 0 78 22 84 66l-50 14c-4-23-18-34-40-34-21 0-34 11-34 28 0 17 11 26 44 40l14 6c50 21 80 43 80 91 0 54-42 85-104 85-61 0-99-31-104-80l44-10zm-152 7c6 28 22 47 54 47 31 0 50-16 50-57V174h52v200c0 68-38 98-99 98-56 0-94-30-101-76l44-13z" fill="#000000"/>
            </svg>
          </TechCard>
        </div>
      </div>

      {/* Animated Moving Ribbon */}
      <div className="tech-ribbon-wrapper" aria-label="Cinta animada: Diseño Web, Creatividad, Innovación">
        {/* Curved Glowing Waves */}
        <svg className="ribbon-glow-svg" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="ribbonNeonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="25%" stopColor="#ff2d78" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#c084fc" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#ff2d78" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
            <filter id="neonGlowRibbon" x="-10%" y="-30%" width="120%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur1"/>
              <feGaussianBlur stdDeviation="2" result="blur2"/>
              <feMerge>
                <feMergeNode in="blur1"/>
                <feMergeNode in="blur2"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Dark curved band background */}
          <path d="M 0,55 Q 360,105 720,70 T 1440,55 L 1440,125 Q 1080,140 720,140 T 0,125 Z" fill="rgba(6, 9, 24, 0.75)" className="ribbon-band-fill" />
          {/* Top glowing neon wave line */}
          <path d="M -50,55 Q 360,105 720,70 T 1490,55" fill="none" stroke="url(#ribbonNeonGrad)" strokeWidth="2.6" filter="url(#neonGlowRibbon)" className="ribbon-wave-top" />
          {/* Bottom glowing neon wave line */}
          <path d="M -50,125 Q 360,140 720,140 T 1490,125" fill="none" stroke="url(#ribbonNeonGrad)" strokeWidth="2.2" filter="url(#neonGlowRibbon)" className="ribbon-wave-bottom" />
        </svg>

        {/* Moving Ticker Tape Content (Infinite Smooth Marquee) */}
        <div className="ribbon-marquee-track">
          <div className="ribbon-marquee-content">
            <span className="ribbon-item">DISEÑO WEB</span>
            <span className="ribbon-bullet">•</span>
            <span className="ribbon-item">CREATIVIDAD</span>
            <span className="ribbon-bullet">•</span>
            <span className="ribbon-item">INNOVACIÓN</span>
            <span className="ribbon-bullet">•</span>
            <span className="ribbon-item">DISEÑO WEB</span>
            <span className="ribbon-bullet">•</span>
            <span className="ribbon-item">CREATIVIDAD</span>
            <span className="ribbon-bullet">•</span>
            <span className="ribbon-item">INNOVACIÓN</span>
            <span className="ribbon-bullet">•</span>
          </div>
          {/* Exact clone for seamless looping */}
          <div className="ribbon-marquee-content" aria-hidden="true">
            <span className="ribbon-item">DISEÑO WEB</span>
            <span className="ribbon-bullet">•</span>
            <span className="ribbon-item">CREATIVIDAD</span>
            <span className="ribbon-bullet">•</span>
            <span className="ribbon-item">INNOVACIÓN</span>
            <span className="ribbon-bullet">•</span>
            <span className="ribbon-item">DISEÑO WEB</span>
            <span className="ribbon-bullet">•</span>
            <span className="ribbon-item">CREATIVIDAD</span>
            <span className="ribbon-bullet">•</span>
            <span className="ribbon-item">INNOVACIÓN</span>
            <span className="ribbon-bullet">•</span>
          </div>
        </div>
      </div>
    </section>
  )
}
