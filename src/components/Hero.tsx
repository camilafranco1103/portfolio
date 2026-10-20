import heroDevices from '../assets/hero-devices.png'

function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-bg flex items-center px-6 md:px-12 pt-32 pb-16 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 items-center">

        {/* Contenido */}
        <div className="min-w-0">

          {/* Kicker */}
          <p className="text-sm tracking-widest text-muted mb-6">
            DESARROLLO · AUTOMATIZACIÓN · IA
          </p>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-text leading-tight max-w-3xl">
            Ideas que{' '}
            <span className="bg-gradient-to-r from-sage to-cream bg-clip-text text-transparent">
              funcionan.
            </span>
          </h1>

          {/* Pitch */}
          <p className="max-w-xl text-muted text-lg mt-6">
            Construyo soluciones que integran sistemas, automatizan procesos y aplican IA —
            desde chatbots conectados a APIs reales hasta flujos completos en n8n.
          </p>

          {/* Botones */}
          <div className="flex gap-4 mt-10">
            <a
              href="#proyectos"
              className="px-6 py-3 rounded-lg bg-cream text-bg font-semibold hover:opacity-90 transition-opacity"
            >
              Ver proyectos
            </a>

            <a
              href="#contacto"
              className="px-6 py-3 rounded-lg border border-sage/40 text-text font-semibold hover:border-sage transition-colors"
            >
              Hablemos
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-2xl">
            <div>
              <p className="text-3xl font-bold text-text">+3</p>
              <p className="text-sm text-muted mt-1">Proyectos completados</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-text">2026</p>
              <p className="text-sm text-muted mt-1">Egreso UTN</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-text">100%</p>
              <p className="text-sm text-muted mt-1">Compromiso</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-text">∞</p>
              <p className="text-sm text-muted mt-1">Ideas por construir</p>
            </div>
          </div>

        </div>

        {/* Imagen */}
        <div className="group relative flex w-full min-w-0 justify-center [perspective:1400px] lg:justify-end">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[12%] rounded-full bg-sage/15 blur-3xl transition-colors duration-700 group-hover:bg-sage/25"
          />
          <img
            src={heroDevices}
            alt="Laptop y celular mostrando soluciones digitales y automatizaciones"
            className="hero-device-image relative z-10 block h-auto w-full max-w-[900px] object-contain"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
