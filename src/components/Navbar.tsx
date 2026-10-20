import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-bg/80 backdrop-blur-sm">
      {/* Logo */}
      <a href="#inicio" className="flex items-center gap-2">
        <img src={logo} alt="Camila Franco" className="w-20 h-20 object-contain" />
      </a>

      {/* Links de navegación */}
      <div className="hidden md:flex items-center gap-8 text-sm text-muted">
        <a href="#inicio" className="text-text border-b border-sage pb-1">Inicio</a>
        <a href="#proyectos" className="hover:text-text transition-colors">Proyectos</a>
        <a href="#sobre-mi" className="hover:text-text transition-colors">Sobre mí</a>
        <a href="#contacto" className="hover:text-text transition-colors">Contacto</a>
      </div>

      {/* Badge de disponibilidad */}
      <a
        href="#contacto"
        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-sage/40 text-sm text-text hover:border-sage transition-colors"
      >
        <span className="w-2 h-2 rounded-full bg-sage"></span>
        Disponible para proyectos
      </a>
    </nav>
  )
}

export default Navbar