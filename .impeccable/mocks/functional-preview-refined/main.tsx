import { StrictMode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import type { KeyboardEvent as ReactKeyboardEvent, PointerEvent as ReactPointerEvent } from 'react'
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

const projects = [
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
    category: 'Automatización',
    title: 'Chatbot IT — WhatsApp + GLPI',
    description:
      'Chatbot que automatiza la creación, consulta y seguimiento de tickets de soporte técnico vía WhatsApp, integrado con GLPI. Incluye triage con IA y notificaciones automáticas.',
    tags: ['n8n', 'WhatsApp API', 'GLPI', 'IA'],
    link: 'https://github.com/camilafranco1103/chatbot-glpi-whatsapp-n8n',
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

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
]

function PreviewNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        window.requestAnimationFrame(() => menuButtonRef.current?.focus({ preventScroll: true }))
      }
    }

    function onBreakpointChange(event: MediaQueryListEvent) {
      if (event.matches) setIsOpen(false)
    }

    const desktopBreakpoint = window.matchMedia('(min-width: 48rem)')
    document.addEventListener('keydown', onKeyDown)
    desktopBreakpoint.addEventListener('change', onBreakpointChange)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      desktopBreakpoint.removeEventListener('change', onBreakpointChange)
    }
  }, [isOpen])

  function closeMenu() {
    setIsOpen(false)
    window.requestAnimationFrame(() => menuButtonRef.current?.focus({ preventScroll: true }))
  }

  return (
    <header className="refined-header">
      <nav className="refined-nav" aria-label="Navegación principal">
        <a className="refined-brand" href="#inicio" aria-label="Camila Franco, Inicio">
          <img src={logo} alt="Camila Franco" />
        </a>

        <div className="refined-desktop-links">
          {links.map(({ href, label }) => <a href={href} key={href}>{label}</a>)}
        </div>

        <a className="refined-availability" href="#contacto">
          <span aria-hidden="true" />Disponible para proyectos
        </a>

        <button
          ref={menuButtonRef}
          className={`refined-menu-button${isOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={isOpen}
          aria-controls="refined-mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>

        <div id="refined-mobile-navigation" className="refined-mobile-menu" hidden={!isOpen}>
          {links.map(({ href, label }) => (
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
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 5
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -3
    imageRef.current?.style.setProperty('--pointer-x', `${x.toFixed(2)}deg`)
    imageRef.current?.style.setProperty('--pointer-y', `${y.toFixed(2)}deg`)
  }

  function resetPointer() {
    imageRef.current?.style.setProperty('--pointer-x', '0deg')
    imageRef.current?.style.setProperty('--pointer-y', '0deg')
  }

  return (
    <section id="inicio" className="refined-hero">
      <div className="refined-hero-grid">
        <div className="refined-hero-copy">
          <p className="refined-eyebrow"><span aria-hidden="true" /> DESARROLLO · AUTOMATIZACIÓN · IA</p>
          <h1>Ideas que <span>funcionan.</span></h1>
          <p className="refined-hero-description">
            Construyo soluciones que integran sistemas, automatizan procesos y aplican IA —
            desde chatbots conectados a APIs reales hasta flujos completos en n8n.
          </p>
          <div className="refined-hero-actions">
            <a className="refined-primary-action" href="#proyectos">Ver proyectos <span aria-hidden="true">↗</span></a>
            <a className="refined-secondary-action" href="#contacto">Hablemos</a>
          </div>
        </div>

        <div className="refined-device-stage" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
          <div className="refined-device-light" aria-hidden="true" />
          <img
            ref={imageRef}
            className="refined-device-image"
            src={heroDevices}
            alt="Laptop y celular mostrando soluciones digitales y automatizaciones"
          />
        </div>

        <div className="refined-stats" aria-label="Datos del portfolio">
          <div><strong>+3</strong><span>Proyectos completados</span></div>
          <div><strong>2026</strong><span>Egreso UTN</span></div>
          <div><strong>100%</strong><span>Compromiso</span></div>
          <div><strong>∞</strong><span>Ideas por construir</span></div>
        </div>
      </div>
      <a className="refined-scroll-cue" href="#proyectos" aria-label="Ver proyectos">
        <span aria-hidden="true" />
      </a>
    </section>
  )
}

function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  function updateActiveIndex() {
    const track = trackRef.current
    const firstSlide = track?.querySelector<HTMLElement>('.refined-project-slide')
    if (!track || !firstSlide) return
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || '0')
    setActiveIndex(Math.min(projects.length - 1, Math.max(0, Math.round(track.scrollLeft / (firstSlide.offsetWidth + gap)))))
  }

  function moveTo(index: number) {
    const slide = trackRef.current?.querySelectorAll<HTMLElement>('.refined-project-slide')[index]
    slide?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }

  function handleKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      moveTo(Math.min(projects.length - 1, activeIndex + 1))
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      moveTo(Math.max(0, activeIndex - 1))
    }
  }

  return (
    <section id="proyectos" className="refined-projects">
      <div className="refined-projects-header">
        <div>
          <p className="refined-eyebrow"><span aria-hidden="true" /> PROYECTOS · 02</p>
          <h2>Proyectos destacados</h2>
        </div>
        <div className="refined-carousel-controls" aria-label="Controles del carrusel de proyectos">
          <button type="button" aria-label="Proyecto anterior" onClick={() => moveTo(Math.max(0, activeIndex - 1))} disabled={activeIndex === 0}>
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button type="button" aria-label="Proyecto siguiente" onClick={() => moveTo(Math.min(projects.length - 1, activeIndex + 1))} disabled={activeIndex === projects.length - 1}>
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      <div className="refined-carousel-frame">
        <div
          ref={trackRef}
          className="refined-project-track"
          role="list"
          aria-label="Proyectos destacados"
          tabIndex={0}
          onScroll={updateActiveIndex}
          onKeyDown={handleKeyDown}
        >
          {projects.map((project, index) => (
            <article
              className={`refined-project-slide${index === 0 ? ' has-captures' : ''}`}
              role="listitem"
              aria-label={`${index + 1} de ${projects.length}: ${project.title}`}
              key={project.title}
            >
              <ProjectCard {...project} />
            </article>
          ))}
        </div>
        <div className="refined-carousel-meter" aria-hidden="true"><span style={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }} /></div>
      </div>
    </section>
  )
}

function RefinedPreview() {
  useEffect(() => {
    const sectionId = window.location.hash.slice(1)
    if (!sectionId) return
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(sectionId))?.scrollIntoView({ behavior: 'auto', block: 'start' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

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
    <RefinedPreview />
  </StrictMode>,
)
