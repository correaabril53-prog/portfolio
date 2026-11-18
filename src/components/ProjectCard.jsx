export default function ProjectCard({ id, title, category, desc, img, imgAlt, link }) {
  return (
    <article className="project-card-box" data-tilt>
      <div className="project-card-glow"></div>
      
      <div className="project-top-row">
        <div className="project-num-tag">
          <span className="project-num-pill">{id}</span>
        </div>
      </div>

      <div className="project-mockup-wrapper">
        <img src={img} alt={imgAlt || title} className="project-mockup-img" />
      </div>

      <div className="project-content-block">
        <h3 className="project-card-title">{title}</h3>
        <span className="project-category">{category}</span>
        <p className="project-card-desc">{desc}</p>
        
        <div className="project-card-footer">
          <a href={link || '#'} target="_blank" rel="noopener noreferrer" className="project-link-action" aria-label={`Ver proyecto ${title}`}>
            <span>Ver proyecto</span>
            <span className="project-arrow-icon">&rarr;</span>
          </a>
          <a href={link || '#'} target="_blank" rel="noopener noreferrer" className="project-external-btn" aria-label={`Abrir enlace ${title}`} title="Ver en vivo">
            <svg viewBox="0 0 24 24" className="ext-link-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}
