export default function Navbar() {
  return (
    <nav className="navbar" role="navigation">
      <ul className="nav-links">
        <li className="nav-item active"><a href="#inicio">Inicio</a></li>
        <li className="nav-item"><a href="#sobre-mi">Sobre Mí</a></li>
        <li className="nav-item"><a href="#habilidades">Habilidades</a></li>
        <li className="nav-item"><a href="#proyectos">Proyectos</a></li>
        <li className="nav-item"><a href="#tecnologias">Tecnologías</a></li>
        <li className="nav-item"><a href="#contacto">Contacto</a></li>
      </ul>
      <div className="nav-code-icon" aria-hidden="true">&lt;/&gt;</div>
    </nav>
  )
}
