import { skills } from '../data/skills'

function SkillIcon({ icon }) {
  switch (icon) {
    case 'code':
      return (
        <svg className="badge-icon icon-code" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" className="code-bracket-right" />
          <polyline points="8 6 2 12 8 18" className="code-bracket-left" />
          <line x1="14" y1="4" x2="10" y2="20" className="code-slash-line" />
        </svg>
      )
    case 'palette':
      return (
        <svg className="badge-icon icon-palette" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 3.31 2.69 6 6 6 1.1 0 2-.9 2-2 0-.55.45-1 1-1h1c4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8z" />
          <circle cx="7.5" cy="10.5" r="1.5" fill="#ff4081" stroke="none" className="palette-pigment p-1" />
          <circle cx="12" cy="7.5" r="1.5" fill="#a855f7" stroke="none" className="palette-pigment p-2" />
          <circle cx="16.5" cy="10.5" r="1.5" fill="#38bdf8" stroke="none" className="palette-pigment p-3" />
        </svg>
      )
    case 'bulb':
      return (
        <svg className="badge-icon icon-bulb" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
          <line x1="12" y1="2" x2="12" y2="4" className="bulb-ray ray-1" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" className="bulb-ray ray-2" />
          <line x1="19.78" y1="4.22" x2="18.36" y2="5.64" className="bulb-ray ray-3" />
        </svg>
      )
    case 'puzzle':
      return (
        <svg className="badge-icon icon-puzzle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.439 7.85c0-1.571-1.274-2.85-2.85-2.85H15V3.5C15 2.12 13.88 1 12.5 1S10 2.12 10 3.5V5H8.411c-1.576 0-2.85 1.279-2.85 2.85V10H4c-1.657 0-3 1.343-3 3s1.343 3 3 3h1.561v1.56c0 1.576 1.274 2.85 2.85 2.85H10v1.09c0 1.657 1.343 3 3 3s3-1.343 3-3V20.41h1.589c1.576 0 2.85-1.274 2.85-2.85V16H20c1.657 0 3-1.343 3-3s-1.343-3-3-3h-.561V7.85z" />
        </svg>
      )
    case 'book':
      return (
        <svg className="badge-icon icon-book" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" className="book-leaf-left" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" className="book-leaf-right" />
        </svg>
      )
    case 'clock':
      return (
        <svg className="badge-icon icon-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" className="clock-tick-hand" />
        </svg>
      )
    default:
      return null
  }
}

function SkillCard({ skill }) {
  return (
    <article className="skill-card-box" data-tilt>
      <div className="card-border-glow"></div>
      <div className="card-top-bar">
        <div className="icon-aura-badge">
          <div className="aura-rotating-ring"></div>
          <div className="icon-inner-content">
            <SkillIcon icon={skill.icon} />
          </div>
        </div>
        <div className="card-number-tag">
          <span className="num-text">{skill.id}</span>
          <span className="num-underline"></span>
        </div>
      </div>
      <h3 className="card-heading">{skill.title}</h3>
      <p className="card-text">{skill.text}</p>
      <div className="card-footer-action">
        <div className="footer-glow-line"></div>
        <span className="footer-arrow-icon">&rarr;</span>
      </div>
    </article>
  )
}

export default function Skills() {
  return (
    <section className="skills-showcase" id="habilidades">
      {/* Ambient Cosmic Glows */}
      <div className="ambient-glow glow-skills-left"></div>
      <div className="ambient-glow glow-skills-right"></div>

      {/* Top Orbit Accent */}
      <div className="skills-orbit-accent" aria-hidden="true">
        <svg viewBox="0 0 400 150" className="skills-orbit-svg">
          <defs>
            <linearGradient id="orbit-accent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff2d78" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M 0,140 Q 240,40 380,20" fill="none" stroke="url(#orbit-accent-grad)" strokeWidth="1.2" />
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" className="orbit-sparkle-node" transform="translate(365, 12) scale(0.8)" />
        </svg>
      </div>

      <div className="skills-container">
        {/* Header */}
        <header className="skills-intro">
          <div className="skills-intro-left">
            <span className="skills-tag">LO QUE ME DEFINE</span>
            <h2 className="skills-title">
              <span className="title-mis">Mis </span><span className="title-habilidades">habilidades<span className="title-dot">.</span></span>
            </h2>
            <div className="skills-sparkle-under" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="sparkle-icon-pink">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
          </div>

          <div className="skills-intro-divider" aria-hidden="true"></div>

          <div className="skills-intro-right">
            <p className="skills-desc">
              Herramientas, conocimientos<br />
              y cualidades que me acompañan<br />
              en cada proyecto.
            </p>
          </div>
        </header>

        {/* 6 Skills Cards Grid */}
        <div className="skills-grid">
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        {/* Bottom Signature */}
        <footer className="skills-bottom-signature">
          <div className="signature-star-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="signature-star">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
          <p className="signature-text">Siempre en evolución <span className="signature-heart">♡</span></p>
        </footer>
      </div>
    </section>
  )
}
