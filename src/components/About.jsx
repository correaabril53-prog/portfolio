export default function About() {
  return (
    <section className="about-section" id="sobre-mi">
      {/* Ambient Cosmic Glows */}
      <div className="ambient-glow glow-about-left"></div>
      <div className="ambient-glow glow-about-right"></div>

      <div className="about-container">
        {/* Left Visual: Botanical Flower & Orbit */}
        <div className="about-visual">
          <div className="about-flower-wrap">
            <img src="/assets/flower_about.jpg" alt="Flor azul resplandeciente - Sobre mí" className="about-flower-img" />
          </div>
          {/* Decorative Floating Petals */}
          <div className="petal about-petal-1">
            <img src="/assets/petals.jpg" alt="Pétalo flotante" />
          </div>
          <div className="petal about-petal-2">
            <img src="/assets/petals.jpg" alt="Pétalo flotante" />
          </div>
        </div>

        {/* Right Visual: Title, Bio & Scroll indicator */}
        <div className="about-details">
          {/* Title with Orbit & Star */}
          <div className="about-title-wrapper">
            <svg className="about-orbit-svg" viewBox="0 0 480 180" aria-hidden="true">
              <defs>
                <linearGradient id="about-orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff2d78" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#ec4899" stopOpacity="0.65" />
                  <stop offset="85%" stopColor="#a855f7" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <ellipse cx="240" cy="90" rx="220" ry="65" transform="rotate(-11 240 90)" className="about-orbit-ellipse" />
              {/* Orbit Star on Top-Right */}
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" className="about-orbit-star" transform="translate(370, 32) scale(0.9)" />
            </svg>
            <h2 className="about-title">Sobre mí</h2>
          </div>

          {/* Bio Content with Left Vertical Accent Line & Star */}
          <div className="about-bio-container">
            <div className="about-vertical-line" aria-hidden="true">
              <div className="about-line-star">
                <svg viewBox="0 0 24 24" className="sparkle-star-svg">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </div>
            </div>

            <div className="about-text-content">
              <p>Soy Abril, tengo 18 años y vivo en Argentina.</p>
              <p>Me apasiona la <span className="highlight-pink">tecnología</span>, el <span className="highlight-pink">desarrollo web</span><br />y todo lo que tenga que ver con el mundo digital.</p>
              <p>Disfruto aprender, explorar nuevas herramientas<br />y crear cosas que me hagan sentir orgullosa.</p>
              <p>Creo que la constancia y la dedicación<br />pueden llevarme muy lejos.</p>
            </div>
          </div>

          {/* Scroll Indicator to Next Section */}
          <div className="about-scroll-indicator">
            <a href="#habilidades" className="about-scroll-pill" aria-label="Ir a Habilidades">
              <svg className="about-arrow-down" viewBox="0 0 24 24">
                <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
            <div className="about-star-line" aria-hidden="true">
              <svg className="about-star-line-icon" viewBox="0 0 24 24">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Right Orbit Accent Curve */}
      <div className="about-bottom-orbit" aria-hidden="true">
        <svg viewBox="0 0 700 220" className="about-bottom-svg">
          <defs>
            <linearGradient id="about-lower-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff2d78" stopOpacity="0.8" />
              <stop offset="65%" stopColor="#ff2d78" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#9d4edd" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path d="M 0,80 Q 280,210 650,150" fill="none" stroke="url(#about-lower-grad)" strokeWidth="1.2" className="bottom-orbit-stroke" />
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" className="about-bottom-star" transform="translate(610, 153) scale(0.85)" />
        </svg>
      </div>
    </section>
  )
}
