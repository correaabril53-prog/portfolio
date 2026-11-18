export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">april<span className="highlight-pink">.</span></span>
          <span className="footer-role">Web Developer</span>
        </div>

        <p className="footer-copy">
          &copy; 2026 April Correa &middot; Diseñado y desarrollado con <span className="footer-heart">♡</span> en Argentina.
        </p>

        <a href="#inicio" className="back-to-top" aria-label="Volver al inicio" title="Volver al inicio">
          <span>Arriba</span>
          <svg viewBox="0 0 24 24" className="back-to-top-icon" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </a>
      </div>
    </footer>
  )
}
