import heroDevices from '../assets/hero-devices.png'

function Hero() {
  return (
    <section id="inicio" className="portfolio-hero">
      <div className="portfolio-hero-grid">
        <div className="portfolio-hero-copy">
          <p className="portfolio-eyebrow">
            <span aria-hidden="true" /> DESARROLLO · AUTOMATIZACIÓN · IA
          </p>

          <h1 className="portfolio-hero-title">
            Ideas que <span className="signature-font">funcionan.</span>
          </h1>

          <p className="portfolio-hero-description">
            Construyo soluciones que integran sistemas, automatizan procesos y aplican IA —
            desde chatbots conectados a APIs reales hasta flujos completos en n8n.
          </p>

          <div className="portfolio-hero-actions">
            <a href="#proyectos" className="portfolio-primary-action">
              Ver proyectos <span aria-hidden="true">↗</span>
            </a>
            <a href="#contacto" className="portfolio-secondary-action">
              Hablemos
            </a>
          </div>
        </div>

        <div className="portfolio-device-stage">
          <div className="portfolio-device-light" aria-hidden="true" />
          <img
            src={heroDevices}
            alt="Laptop y celular mostrando soluciones digitales y automatizaciones"
            className="hero-device-image portfolio-device-image"
          />
        </div>

        <div className="portfolio-hero-stats" aria-label="Datos del portfolio">
          <div><strong>+3</strong><span>Proyectos completados</span></div>
          <div><strong>2026</strong><span>Egreso UTN</span></div>
          <div><strong>100%</strong><span>Compromiso</span></div>
          <div><strong>∞</strong><span>Ideas por construir</span></div>
        </div>
      </div>

      <a className="portfolio-scroll-cue" href="#proyectos" aria-label="Ver proyectos">
        <span aria-hidden="true" />
      </a>
    </section>
  )
}

export default Hero
