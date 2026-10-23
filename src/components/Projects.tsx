import { useEffect, useRef, useState, type FocusEvent as ReactFocusEvent, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import ProjectCard, { type PortfolioProject } from './ProjectCard'
import foodStoreLight from '../assets/dashboard_foodStore_claro.png'
import foodStoreDark from '../assets/dashboard_foodStore_oscuro.png'

function Projects() {
  const projects: PortfolioProject[] = [
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
      link: undefined, // TODO: sumar link cuando lo tengas a mano
    },
  ]

  const carouselProjects = [...projects].sort(
    (first, second) => Number(Boolean(second.screenshots?.length)) - Number(Boolean(first.screenshots?.length)),
  )
  const dialogRef = useRef<HTMLDialogElement>(null)
  const dialogOpenerRef = useRef<HTMLButtonElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)
  const [isDocumentHidden, setIsDocumentHidden] = useState(() => document.visibilityState === 'hidden')
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const isPaused = isHovered || hasFocus || isDocumentHidden || prefersReducedMotion || selectedProject !== null

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches)

    motionPreference.addEventListener('change', updateMotionPreference)
    return () => motionPreference.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    const updateVisibility = () => setIsDocumentHidden(document.visibilityState === 'hidden')
    document.addEventListener('visibilitychange', updateVisibility)
    return () => document.removeEventListener('visibilitychange', updateVisibility)
  }, [])

  useEffect(() => {
    if (isPaused || carouselProjects.length < 2) return

    const timeoutId = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % carouselProjects.length)
    }, 2700)

    return () => window.clearTimeout(timeoutId)
  }, [activeIndex, carouselProjects.length, isPaused])

  useEffect(() => {
    const dialog = dialogRef.current
    if (selectedProject && dialog && !dialog.open) dialog.showModal()
  }, [selectedProject])

  function moveTo(index: number) {
    const nextIndex = (index + carouselProjects.length) % carouselProjects.length
    setActiveIndex(nextIndex)
  }

  function handleKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      moveTo(activeIndex + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      moveTo(activeIndex - 1)
    }
  }

  function handleFocusLeave(event: ReactFocusEvent<HTMLElement>) {
    const nextTarget = event.relatedTarget
    if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) setHasFocus(false)
  }

  function handleFocus(event: ReactFocusEvent<HTMLElement>) {
    const target = event.target
    setHasFocus(target instanceof Element && target.closest('.project-carousel-slide') !== null)
  }

  function openProjectDetails(project: PortfolioProject, trigger: HTMLButtonElement) {
    dialogOpenerRef.current = trigger
    setSelectedProject(project)
  }

  function closeProjectDetails() {
    dialogRef.current?.close()
  }

  function handleDialogClose() {
    setSelectedProject(null)
    window.requestAnimationFrame(() => dialogOpenerRef.current?.focus())
  }

  return (
    <section
      id="proyectos"
      className="projects-section"
      aria-labelledby="projects-heading"
      onFocusCapture={handleFocus}
      onBlurCapture={handleFocusLeave}
    >
      <div className="projects-container" data-reveal-on-scroll>
        <div className="projects-header">
          <div>
            <p className="portfolio-eyebrow"><span aria-hidden="true" /> PROYECTOS · 02</p>
            <h2 id="projects-heading" className="projects-heading portfolio-section-heading">Proyectos destacados</h2>
          </div>

          <div className="projects-carousel-controls" role="group" aria-label="Controles del carrusel de proyectos">
            <button
              className="projects-control"
              type="button"
              aria-label="Proyecto anterior"
              onClick={() => moveTo(activeIndex - 1)}
            >
              <ChevronLeft aria-hidden="true" size={20} strokeWidth={1.8} />
            </button>
            <button
              className="projects-control"
              type="button"
              aria-label="Proyecto siguiente"
              onClick={() => moveTo(activeIndex + 1)}
            >
              <ChevronRight aria-hidden="true" size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div className="projects-carousel-frame">
          <div
            className="projects-carousel-viewport"
            role="region"
            aria-label="Proyectos destacados"
            aria-roledescription="carrusel"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="projects-track" role="list" aria-label="Tres proyectos">
              {carouselProjects.map((project, index) => {
                const relativePosition = (index - activeIndex + carouselProjects.length) % carouselProjects.length
                const position = relativePosition === 0 ? 'front' : relativePosition === 1 ? 'right' : 'left'

                return (
                  <article
                    className="project-carousel-slide"
                    data-position={position}
                    role="listitem"
                    aria-label={`${index + 1} de ${carouselProjects.length}: ${project.title}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                    onFocusCapture={() => moveTo(index)}
                    key={project.title}
                  >
                    <ProjectCard
                      {...project}
                      featured={index === activeIndex}
                      onOpenDetails={openProjectDetails}
                    />
                  </article>
                )
              })}
            </div>
          </div>
          <div className="projects-carousel-meter" aria-hidden="true">
            <span style={{ width: `${((activeIndex + 1) / carouselProjects.length) * 100}%` }} />
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="project-details-dialog"
        aria-labelledby="project-dialog-title"
        onClose={handleDialogClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeProjectDetails()
        }}
      >
        {selectedProject && (
          <div className="project-details-panel">
            <button
              type="button"
              className="project-details-close"
              aria-label="Cerrar descripción del proyecto"
              onClick={closeProjectDetails}
            >
              <X aria-hidden="true" size={20} strokeWidth={1.8} />
            </button>
            {selectedProject.screenshots?.[0] && (
              <img
                className="project-details-image"
                src={selectedProject.screenshots[0].src}
                alt={selectedProject.screenshots[0].alt}
              />
            )}
            <div className="project-details-copy">
              <span className="project-card-category">{selectedProject.category}</span>
              <h2 id="project-dialog-title">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <ul className="project-card-tags" aria-label="Tecnologías">
                {selectedProject.tags.map((tag) => <li className="project-card-tag" key={tag}>{tag}</li>)}
              </ul>
              <div className="project-details-links">
                {selectedProject.link && (
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.7} /></a>
                )}
                {selectedProject.detailLink && <a href={selectedProject.detailLink}>Ver detalles <ArrowRight aria-hidden="true" size={15} strokeWidth={1.7} /></a>}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}

export default Projects
