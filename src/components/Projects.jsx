import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import UpcomingCard from './UpcomingCard'

export default function Projects() {
  return (
    <section className="projects-section" id="proyectos">
      {/* Ambient Cosmic Glows */}
      <div className="ambient-glow glow-projects-left"></div>
      <div className="ambient-glow glow-projects-right"></div>

      {/* Background Ambient Curved Lines & Sparkle Stars */}
      <div className="projects-bg-decor" aria-hidden="true">
        <svg viewBox="0 0 1440 700" preserveAspectRatio="none" className="projects-decor-svg">
          <defs>
            <linearGradient id="proj-curve-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff2d78" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="proj-curve-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
              <stop offset="40%" stopColor="#a855f7" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#ff2d78" stopOpacity="0.8"/>
            </linearGradient>
          </defs>
          <path d="M 1150,-50 Q 1280,120 1480,160" fill="none" stroke="url(#proj-curve-grad-1)" strokeWidth="1.4" className="proj-ambient-line" />
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" className="proj-star-node proj-star-top" transform="translate(1265, 110) scale(0.9)" />
          <path d="M 1200,680 Q 1340,560 1480,520" fill="none" stroke="url(#proj-curve-grad-2)" strokeWidth="1.4" className="proj-ambient-line" />
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" className="proj-star-node proj-star-bottom" transform="translate(1300, 580) scale(0.85)" />
        </svg>
      </div>

      <div className="projects-container">
        {/* Header */}
        <header className="projects-intro">
          <span className="projects-tag">MIS TRABAJOS</span>

          <div className="projects-title-wrapper">
            <h2 className="projects-title">Proyectos<span className="projects-dot">.</span></h2>
            <div className="projects-sparkle-under" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="sparkle-icon-pink">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
          </div>

          <p className="projects-desc">
            Aquí podés ver algunos de los proyectos que realicé.<br />
            Cada uno fue una oportunidad para aprender y mejorar.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map(project => (
            project.isUpcoming ? (
              <UpcomingCard
                key={project.id}
                title={project.title}
                desc={project.desc}
              />
            ) : (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                desc={project.desc}
                img={project.img}
                imgAlt={project.imgAlt}
                link={project.link}
              />
            )
          ))}
        </div>

        {/* Bottom Signature */}
        <footer className="projects-bottom-signature">
          <div className="projects-bottom-star-line" aria-hidden="true">
            <span className="proj-star-stroke"></span>
            <svg viewBox="0 0 24 24" className="proj-center-star">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
            </svg>
            <span className="proj-star-stroke"></span>
          </div>

          <p className="projects-thankyou-text">GRACIAS POR VISITAR MI PORTFOLIO</p>
          <span className="projects-thankyou-heart">♡</span>
        </footer>
      </div>
    </section>
  )
}
