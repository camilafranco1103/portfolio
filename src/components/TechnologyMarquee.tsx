const technologies = [
  'n8n',
  'WhatsApp API',
  'GLPI',
  'IA',
  'React',
  'TypeScript',
  'FastAPI',
  'PostgreSQL',
  'Java',
  'Python',
  'JavaScript',
  'SQL',
  'APIs REST',
]

function TechnologyList({ decorative = false }: { decorative?: boolean }) {
  return (
    <ul className="technology-marquee-list" aria-hidden={decorative || undefined}>
      {technologies.map((technology) => (
        <li className="technology-marquee-item" key={technology}>
          {technology}
        </li>
      ))}
    </ul>
  )
}

function TechnologyMarquee() {
  return (
    <section
      className="technology-marquee"
      aria-label="Tecnologías utilizadas"
    >
      <div className="technology-marquee-window">
        <div className="technology-marquee-track">
          <TechnologyList />
          <TechnologyList decorative />
        </div>
      </div>
    </section>
  )
}

export default TechnologyMarquee
