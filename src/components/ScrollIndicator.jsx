export default function ScrollIndicator({ href, className = '' }) {
  return (
    <a href={href} className={`scroll-indicator ${className}`} aria-label="Desplázate hacia abajo">
      <div className="scroll-mouse-wrap">
        <svg className="scroll-mouse" viewBox="0 0 24 40" aria-hidden="true">
          <rect width="18" height="30" x="3" y="5" rx="9" ry="9" stroke="#ff699f" fill="none" strokeWidth="1.5"/>
          <line x1="12" y1="12" x2="12" y2="18" stroke="#ff699f" strokeWidth="1.5" strokeLinecap="round" className="scroll-dot"/>
        </svg>
      </div>
      <div className="scroll-star-below" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="scroll-sparkle-icon">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
        </svg>
      </div>
    </a>
  )
}
