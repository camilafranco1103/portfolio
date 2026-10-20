import { useState } from 'react'

type ProjectScreenshot = {
  src: string
  label: string
  alt: string
}

type ProjectCardProps = {
  category: string
  title: string
  description: string
  tags: string[]
  link?: string
  detailLink?: string
  screenshots?: ProjectScreenshot[]
}

function ProjectCard({ category, title, description, tags, link, detailLink, screenshots }: ProjectCardProps) {
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  return (
    <div className="rounded-2xl border border-sage/20 bg-sage/[0.04] overflow-hidden flex flex-col">
      {screenshots?.length ? (
        <div>
          {detailLink ? (
            <a href={detailLink} className="block aspect-video bg-sage/10 overflow-hidden" aria-label={`Ver detalles de ${title}`}>
              <img
                src={screenshots[activeScreenshot].src}
                alt={screenshots[activeScreenshot].alt}
                className="w-full h-full object-cover object-top"
              />
            </a>
          ) : (
            <div className="aspect-video bg-sage/10 overflow-hidden">
              <img
                src={screenshots[activeScreenshot].src}
                alt={screenshots[activeScreenshot].alt}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}
          {screenshots.length > 1 && (
            <div className="flex gap-2 px-4 py-3 border-b border-sage/20" aria-label="Tema de la captura">
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.label}
                  type="button"
                  onClick={() => setActiveScreenshot(index)}
                  aria-pressed={activeScreenshot === index}
                  className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                    activeScreenshot === index
                      ? 'border-sage bg-sage/20 text-text'
                      : 'border-sage/20 text-muted hover:border-sage/50'
                  }`}
                >
                  {screenshot.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="aspect-video bg-sage/10 flex items-center justify-center">
          <span className="text-sm text-muted">Captura próximamente</span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <span className="inline-block w-fit text-xs px-3 py-1 rounded-full border border-sage/30 text-muted mb-4">
          {category}
        </span>

        <h3 className="text-xl font-semibold text-text mb-2">
          {detailLink ? <a href={detailLink} className="hover:text-cream transition-colors">{title}</a> : title}
        </h3>

        <p className="text-sm text-muted mb-6 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-md bg-sage/10 text-text/80"
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
            className="text-sm text-sage hover:text-cream transition-colors"
          >
            GitHub ↗
          </a>
        )}
        {detailLink && (
          <a
            href={detailLink}
            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-text hover:text-cream transition-colors"
          >
            Ver detalles <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
