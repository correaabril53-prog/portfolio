export default function UpcomingCard({ title, desc, signature }) {
  return (
    <article className="project-card-box project-card-upcoming" data-tilt>
      <div className="project-card-glow"></div>

      <div className="upcoming-circle-wrap">
        <div className="upcoming-circle-btn">
          <span className="upcoming-plus-sign">+</span>
        </div>
      </div>

      <div className="project-content-block upcoming-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">
          {desc.split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              {idx < desc.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>
        
        {/* Star Divider Line */}
        <div className="upcoming-divider-line" aria-hidden="true">
          <span className="up-div-stroke"></span>
          <svg viewBox="0 0 24 24" className="upcoming-star-icon">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
          </svg>
          <span className="up-div-stroke"></span>
        </div>

        {/* Cursive Signature */}
        <p className="upcoming-signature">
          {signature || 'Seguimos creando'} <span className="signature-heart">♡</span>
        </p>
      </div>
    </article>
  )
}
