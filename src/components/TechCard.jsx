export default function TechCard({ title, desc, highlight, children }) {
  return (
    <article className={`tech-card-box${highlight ? ' tech-card-highlight' : ''}`} data-tilt>
      <div className="tech-card-glow"></div>
      <div className="tech-icon-container">
        {children}
      </div>
      <h3 className="tech-card-title">{title}</h3>
      <p className="tech-card-desc">{desc}</p>
      <div className="tech-card-footer">
        <span className="tech-arrow-icon">&rarr;</span>
      </div>
    </article>
  )
}
