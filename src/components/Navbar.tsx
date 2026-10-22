import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'

const navigationLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const desktopNavigationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return

    const desktopBreakpoint = window.matchMedia('(min-width: 64rem)')

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    function handleBreakpointChange(event: MediaQueryListEvent) {
      if (!event.matches) return

      setIsMenuOpen(false)
      window.requestAnimationFrame(() => {
        if (desktopBreakpoint.matches) {
          desktopNavigationRef.current?.querySelector('a')?.focus()
        }
      })
    }

    document.addEventListener('keydown', handleKeyDown)
    desktopBreakpoint.addEventListener('change', handleBreakpointChange)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      desktopBreakpoint.removeEventListener('change', handleBreakpointChange)
    }
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <nav
      aria-label="Navegación principal"
      className="portfolio-navbar fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 sm:px-8 lg:px-10"
    >
      <a href="#inicio" className="portfolio-navbar-logo flex items-center gap-2">
        <img src={logo} alt="Camila Franco" className="object-contain" />
      </a>

      <button
        ref={menuButtonRef}
        type="button"
        className={`portfolio-menu-button flex items-center justify-center rounded-lg border text-text transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage lg:hidden ${
          isMenuOpen
            ? 'border-sage bg-sage/15 text-cream'
            : 'border-sage/60 bg-transparent hover:border-sage hover:bg-sage/10'
        }`}
        aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-site-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          {isMenuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <div ref={desktopNavigationRef} className="portfolio-desktop-navigation hidden items-center gap-6 text-sm text-muted lg:flex xl:gap-8">
        {navigationLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={href === '#inicio' ? 'border-b border-sage pb-1 text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage' : 'transition-colors hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage'}
          >
            {label}
          </a>
        ))}
      </div>

      <a
        href="#contacto"
        className="portfolio-availability hidden min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm text-text transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage lg:flex"
      >
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-sage" />
        Disponible para proyectos
      </a>

      <div
        id="mobile-site-navigation"
        hidden={!isMenuOpen}
        className="portfolio-mobile-panel absolute top-full w-80 max-w-[calc(100vw_-_2.5rem)] rounded-xl border p-3 shadow-xl lg:hidden"
      >
        <div className="flex flex-col gap-1">
          {navigationLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="portfolio-mobile-link flex min-h-11 items-center rounded-lg px-4 text-text transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sage"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
