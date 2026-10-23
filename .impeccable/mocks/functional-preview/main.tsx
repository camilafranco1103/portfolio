import { StrictMode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent, PointerEvent as ReactPointerEvent } from 'react'
import '../../../src/index.css'
import './preview.css'
import heroDevices from '../../../src/assets/hero-devices.png'
import logo from '../../../src/assets/logo.png'
import foodStoreLight from '../../../src/assets/dashboard_foodStore_claro.png'
import foodStoreDark from '../../../src/assets/dashboard_foodStore_oscuro.png'
import ProjectCard from '../../../src/components/ProjectCard'
import About from '../../../src/components/About'
import Contact from '../../../src/components/Contact'
import WhatsAppButton from '../../../src/components/WhatsAppButton'

const previewProjects = [
  {
    category: 'Automatización',
    title: 'Chatbot IT — WhatsApp + GLPI',
    description:
      'Chatbot que automatiza la creación, consulta y seguimiento de tickets de soporte técnico vía WhatsApp, integrado con GLPI. Incluye triage con IA y notificaciones automáticas.',
    tags: ['n8n', 'WhatsApp API', 'GLPI', 'IA'],
    link: 'https://github.com/camilafranco1103/chatbot-glpi-whatsapp-n8n',
  },
  {
    category: 'Desarrollo Web',
    title: 'Food Store App',
    description:
      'Aplicación full-stack para gestión de una tienda de alimentos, con backend en FastAPI y frontend en React.',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    link: 'https://github.com/camilafranco1103/frontend-store-app',
    detailLink: '/proyectos/food-store',
    screenshots: [
      { src: foodStoreLight, label: 'Modo claro', alt: 'Página de inicio de Food Store en modo claro' },
      { src: foodStoreDark, label: 'Modo oscuro', alt: 'Página de inicio de Food Store en modo oscuro' },
    ],
  },
  {
    category: 'Plataforma',
    title: 'Active Trace',
    description:
      'Plataforma multi-tenant de gestión académica, co-desarrollada con otro programador.',
    tags: ['React', 'Multi-tenant'],
    link: undefined,
  },
]

const navigationLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
]

function PreviewNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!isMenuOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <header className="preview-header">
      <nav className="preview-nav" aria-label="Navegación principal">
        <a className="preview-brand" href="#inicio" aria-label="Camila Franco, Inicio">
          <img src={logo} alt="Camila Franco" />
        </a>
        <div className="preview-desktop-links">
          {navigationLinks.map(({ href, label }) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </div>
        <a className="preview-nav-availability" href="#contacto">
          <span aria-hidden="true" />Disponible para proyectos
        </a>
        <button
          ref={menuButtonRef}
          className={`preview-menu-button${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={isMenuOpen}
          aria-controls="preview-mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div
          id="preview-mobile-navigation"
          className="preview-mobile-menu"
          hidden={!isMenuOpen}
        >
          {navigationLinks.map(({ href, label }) => (
            <a href={href} key={href} onClick={closeMenu}>{label}</a>
          ))}
        </div>
      </nav>
    </header>
  )
}

function PreviewHero() {
  const imageRef = useRef<HTMLImageElement>(null)

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 6
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -4
    imageRef.current?.style.setProperty('--pointer-x', `${x.toFixed(2)}deg`)
    imageRef.current?.style.setProperty('--pointer-y', `${y.toFixed(2)}deg`)
  }

  function resetPointer() {
    imageRef.current?.style.setProperty('--pointer-x', '0deg')
    imageRef.current?.style.setProperty('--pointer-y', '0deg')
  }

  return (
    <section id="inicio" className="preview-hero">
      <div className="preview-hero-grid">
        <div className="preview-hero-copy">
          <p className="preview-eyebrow"><span /> DESARROLLO · AUTOMATIZACIÓN · IA</p>
          <h1>Ideas que <span>funcionan.</span></h1>
          <p className="preview-hero-description">
            Construyo soluciones que integran sistemas, automatizan procesos y aplican IA —
            desde chatbots conectados a APIs reales hasta flujos completos en n8n.
          </p>
          <div className="preview-hero-actions">
            <a className="preview-primary-action" href="#proyectos">Ver proyectos <span aria-hidden="true">↗</span></a>
            <a className="preview-secondary-action" href="#contacto">Hablemos</a>
          </div>
          <div className="preview-stats" aria-label="Datos del portfolio">
            <div><strong>+3</strong><span>Proyectos completados</span></div>
            <div><strong>2026</strong><span>Egreso UTN</span></div>
            <div><strong>100%</strong><span>Compromiso</span></div>
            <div><strong>∞</strong><span>Ideas por construir</span></div>
          </div>
        </div>
        <div
          className="preview-device-stage"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <div className="preview-light-orbit" aria-hidden="true" />
          <div className="preview-stage-index" aria-hidden="true"><span>01</span> SYSTEMS / IN MOTION</div>
          <img
            ref={imageRef}
            className="preview-device-image"
            src={heroDevices}
            alt="Laptop y celular mostrando soluciones digitales y automatizaciones"
          />
          <span className="preview-stage-crosshair preview-stage-crosshair-one" aria-hidden="true" />
          <span className="preview-stage-crosshair preview-stage-crosshair-two" aria-hidden="true" />
        </div>
      </div>
      <a className="preview-scroll-cue" href="#proyectos"><span /> Desplazar para explorar</a>
    </section>
  )
}

function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  function updateActiveIndex() {
    const track = trackRef.current
    if (!track) return
    const firstSlide = track.querySelector<HTMLElement>('.preview-project-slide')
    if (!firstSlide) return
    const slideStep = firstSlide.offsetWidth + Number.parseFloat(getComputedStyle(track).columnGap || '0')
    setActiveIndex(Math.min(previewProjects.length - 1, Math.max(0, Math.round(track.scrollLeft / slideStep))))
  }

  function moveTo(index: number) {
    const track = trackRef.current
    const target = track?.querySelectorAll<HTMLElement>('.preview-project-slide')[index]
    target?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest', inline: 'start' })
  }

  function handleTrackKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      moveTo(Math.min(previewProjects.length - 1, activeIndex + 1))
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      moveTo(Math.max(0, activeIndex - 1))
    }
  }

  return (
    <section id="proyectos" className="preview-projects">
      <div className="preview-section-heading">
        <div>
          <p className="preview-eyebrow"><span /> PROYECTOS · 02</p>
          <h2>Proyectos destacados</h2>
        </div>
        <div className="preview-carousel-controls" aria-label="Controles del carrusel de proyectos">
          <button type="button" aria-label="Proyecto anterior" onClick={() => moveTo(Math.max(0, activeIndex - 1))} disabled={activeIndex === 0}>
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button type="button" aria-label="Proyecto siguiente" onClick={() => moveTo(Math.min(previewProjects.length - 1, activeIndex + 1))} disabled={activeIndex === previewProjects.length - 1}>
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>
      <div className="preview-carousel-frame">
        <div
          ref={trackRef}
          className="preview-projects-track"
          role="list"
          aria-label="Proyectos destacados"
          tabIndex={0}
          onScroll={updateActiveIndex}
          onKeyDown={handleTrackKeyDown}
        >
          {previewProjects.map((project, index) => (
            <article
              className="preview-project-slide"
              role="listitem"
              key={project.title}
              aria-label={`${index + 1} de ${previewProjects.length}: ${project.title}`}
            >
              <ProjectCard {...project} />
            </article>
          ))}
        </div>
        <div className="preview-carousel-progress" aria-hidden="true">
          <span style={{ '--progress': `${((activeIndex + 1) / previewProjects.length) * 100}%` } as CSSProperties} />
          <span>{String(activeIndex + 1).padStart(2, '0')} <i>/</i> {String(previewProjects.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
}

function FunctionalPreview() {
  return (
    <>
      <PreviewNavbar />
      <main>
        <PreviewHero />
        <ProjectsCarousel />
        <About />
        <Contact />
      </main>
      <WhatsAppButton />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FunctionalPreview />
  </StrictMode>,
)
