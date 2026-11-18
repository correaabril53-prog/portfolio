import { useRef } from 'react'

export default function Contact() {
  const copyBadgeRef = useRef(null)
  const originalContentRef = useRef(null)

  const handleCopyEmail = async () => {
    const email = 'correaabril53@gmail.com'
    const badge = copyBadgeRef.current
    if (!badge) return

    try {
      await navigator.clipboard.writeText(email)
      badge.classList.add('copied')
      badge.innerHTML = `
        <svg class="copy-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span class="copy-text-label">¡Copiado!</span>
      `
      setTimeout(() => {
        badge.classList.remove('copied')
        badge.innerHTML = originalContentRef.current
      }, 2200)
    } catch (err) {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <section className="content-section" id="contacto">
      <span className="section-tag">03 // Conectar</span>
      <h2 className="section-title">¿Tienes un proyecto en mente?</h2>
      <div className="glass-card contact-card-wrapper">
        <p className="contact-card-desc">
          Construyamos juntos algo fuera de este mundo. Puedes conectar conmigo en mis redes, revisar mi código o descargar mi currículum.
        </p>

        {/* Social and Action Buttons */}
        <div className="contact-action-group">
          {/* CV Button */}
          <a href={`${import.meta.env.BASE_URL}assets/media_1792450685383_dc74e478.pdf`} className="contact-btn-item btn-cv" aria-label="Descargar Curriculum Vitae" title="Descargar CV">
            <svg className="contact-btn-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <g className="cv-arrow-group">
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <polyline points="9 15 12 18 15 15"></polyline>
              </g>
            </svg>
            <span>CV</span>
          </a>

          {/* GitHub Button */}
          <a href="https://github.com/correaabril53-prog" target="_blank" rel="noopener noreferrer" className="contact-btn-item btn-github" aria-label="Visitar GitHub" title="Ver GitHub">
            <svg className="contact-btn-svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>

          {/* LinkedIn Button */}
          <a href="https://www.linkedin.com/in/abril-correa-54046a445/" target="_blank" rel="noopener noreferrer" className="contact-btn-item btn-linkedin" aria-label="Visitar LinkedIn" title="Ver LinkedIn">
            <svg className="contact-btn-svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* WhatsApp Button */}
          <a href="https://wa.me/5492216947762?text=Hola%20April,%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20contactarte" target="_blank" rel="noopener noreferrer" className="contact-btn-item btn-whatsapp" aria-label="Contactar por WhatsApp" title="WhatsApp">
            <svg className="contact-btn-svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>WhatsApp</span>
            <span className="wa-status-dot" aria-hidden="true"></span>
          </a>
        </div>

        {/* Direct Email Pill Display with Copy Action */}
        <div className="contact-email-badge">
          <span className="email-badge-label">Correo directo:</span>
          <button
            type="button"
            className="email-badge-link"
            id="emailCopyBtn"
            title="Click para copiar al portapapeles"
            aria-label="Copiar correo correaabril53@gmail.com"
            onClick={handleCopyEmail}
          >
            <svg className="email-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span className="email-address-text">correaabril53@gmail.com</span>
            <span
              className="copy-badge-pill"
              id="copyBadgeStatus"
              ref={(el) => {
                copyBadgeRef.current = el
                if (el && !originalContentRef.current) {
                  originalContentRef.current = el.innerHTML
                }
              }}
            >
              <svg className="copy-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              <span className="copy-text-label">Copiar</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
