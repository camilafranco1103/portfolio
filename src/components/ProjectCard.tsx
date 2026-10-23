import { useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

type ProjectScreenshot = {
  src: string
  label: string
  alt: string
}

export type PortfolioProject = {
  category: string
  title: string
  description: string
  tags: string[]
  link?: string
  detailLink?: string
  screenshots?: ProjectScreenshot[]
}

type ProjectCardProps = PortfolioProject & {
  featured?: boolean
  onOpenDetails: (project: PortfolioProject, trigger: HTMLButtonElement) => void
}

function ProjectCard({ category, title, description, tags, link, detailLink, screenshots, featured = false, onOpenDetails }: ProjectCardProps) {
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  return (
    <div
      className={`project-card${featured ? ' project-card-featured' : ''}`}
    >
      <button
        type="button"
        className="project-card-open"
        aria-label={`Abrir descripción completa de ${title}`}
        aria-haspopup="dialog"
        onClick={(event) => onOpenDetails({ category, title, description, tags, link, detailLink, screenshots }, event.currentTarget)}
      />
      {screenshots?.length ? (
        <div className="project-card-media">
          {detailLink ? (
            <a href={detailLink} className="project-card-image-link" aria-label={`Ver detalles de ${title}`}>
              <img
                src={screenshots[activeScreenshot].src}
                alt={screenshots[activeScreenshot].alt}
                className="project-card-image"
              />
            </a>
          ) : (
            <div className="project-card-image-link">
              <img
                src={screenshots[activeScreenshot].src}
                alt={screenshots[activeScreenshot].alt}
                className="project-card-image"
              />
            </div>
          )}
          {screenshots.length > 1 && (
            <div className="project-card-screenshot-controls" aria-label="Tema de la captura">
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.label}
                  type="button"
                  onClick={() => setActiveScreenshot(index)}
                  aria-pressed={activeScreenshot === index}
                  className={`project-card-screenshot-button${activeScreenshot === index ? ' is-active' : ''}`}
                >
                  {screenshot.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="project-card-placeholder">
          <span>Captura próximamente</span>
        </div>
      )}

      <div className="project-card-content">
        <span className="project-card-category">
          {category}
        </span>

        <h3 className="project-card-title">
          {detailLink ? <a href={detailLink} className="hover:text-cream transition-colors">{title}</a> : title}
        </h3>

        <p className="project-card-description">{description}</p>

        <div className="project-card-tags">
          {tags.map((tag) => (
            <span
              key={tag}
              className="project-card-tag"
            >
              {tag}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            GitHub <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.7} />
          </a>
        )}
        {detailLink && (
          <a
            href={detailLink}
            className="project-card-link project-card-detail-link"
          >
            Ver detalles <ArrowRight aria-hidden="true" size={15} strokeWidth={1.7} />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
