function Contact() {
  return (
    <section
      id="contacto"
      className="min-h-screen bg-bg px-6 md:px-12 py-32 flex items-center"
    >
      <div className="w-full max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="mb-16">
          <p className="text-sm tracking-widest text-muted mb-5">
            CONTACTO · 04
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-text leading-tight max-w-4xl">
            Hagamos algo{' '}
            <span className="bg-gradient-to-r from-sage to-cream bg-clip-text text-transparent">
              que funcione.
            </span>
          </h2>

          <p className="text-muted text-lg max-w-2xl mt-6 leading-relaxed">
            ¿Tenés una idea, un proyecto o un proceso que podría mejorar?
            Contame qué estás buscando y vemos cómo podemos hacerlo realidad.
          </p>
        </div>

        {/* Contenido */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Columna izquierda */}
          <div className="rounded-2xl border border-sage/20 bg-sage/[0.04] p-8 md:p-10 flex flex-col justify-between min-h-[620px]">

            {/* Disponibilidad */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-sage animate-pulse" />

                <span className="text-sm text-text">
                  Disponible para proyectos
                </span>
              </div>

              <p className="text-text text-2xl md:text-3xl font-medium max-w-md leading-snug">
                Construyo soluciones digitales conectando tecnología,
                automatización y comunicación.
              </p>
            </div>

            {/* Áreas */}
            <div className="my-12">

              {/* Desarrollo */}
              <div className="group border-t border-sage/20 py-5 cursor-default">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-5">
                    <span className="text-xs text-muted">
                      01
                    </span>

                    <h3 className="text-text font-medium">
                      DESARROLLO
                    </h3>
                  </div>

                  <span className="text-muted group-hover:text-sage group-hover:translate-x-1 transition-all">
                    ↗
                  </span>
                </div>

                <p className="text-sm text-muted mt-2 ml-9">
                  Java · Python · JavaScript · React · SQL
                </p>
              </div>

              {/* Automatización */}
              <div className="group border-t border-sage/20 py-5 cursor-default">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-5">
                    <span className="text-xs text-muted">
                      02
                    </span>

                    <h3 className="text-text font-medium">
                      AUTOMATIZACIÓN
                    </h3>
                  </div>

                  <span className="text-muted group-hover:text-sage group-hover:translate-x-1 transition-all">
                    ↗
                  </span>
                </div>

                <p className="text-sm text-muted mt-2 ml-9">
                  n8n · APIs REST · PostgreSQL · Integración de sistemas
                </p>
              </div>

              {/* IA & Contenido */}
              <div className="group border-t border-sage/20 py-5 cursor-default">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-5">
                    <span className="text-xs text-muted">
                      03
                    </span>

                    <h3 className="text-text font-medium">
                      IA & CONTENIDO
                    </h3>
                  </div>

                  <span className="text-muted group-hover:text-sage group-hover:translate-x-1 transition-all">
                    ↗
                  </span>
                </div>

                <p className="text-sm text-muted mt-2 ml-9">
                  IA aplicada · Chatbots · Diseño · Estrategia digital
                </p>
              </div>

            </div>

            {/* Información */}
            <div className="border-t border-sage/20 pt-6 grid grid-cols-2 gap-6">

              <div>
                <p className="text-xs tracking-widest text-muted mb-2">
                  UBICACIÓN
                </p>

                <p className="text-sm text-text">
                  Godoy Cruz, Mendoza
                </p>
              </div>

              <div>
                <p className="text-xs tracking-widest text-muted mb-2">
                  CONECTEMOS
                </p>

                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/camilanfranco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-text transition-colors"
                  >
                    LinkedIn ↗
                  </a>

                  <a
                    href="https://github.com/camilafranco1103"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-text transition-colors"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Formulario */}
          <form className="rounded-2xl border border-sage/20 p-8 md:p-10 min-h-[620px]">

            <div className="space-y-8">

              {/* Nombre */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-muted mb-3"
                >
                  Nombre
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="¿Cómo te llamás?"
                  className="w-full bg-transparent border-b border-sage/30 py-3 text-text placeholder:text-muted/60 outline-none focus:border-sage transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-muted mb-3"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full bg-transparent border-b border-sage/30 py-3 text-text placeholder:text-muted/60 outline-none focus:border-sage transition-colors"
                />
              </div>

              {/* Tipo de proyecto */}
              <div>
                <p className="text-sm text-muted mb-4">
                  ¿Qué tenés en mente?
                </p>

                <div className="flex flex-wrap gap-2">

                  <button
                    type="button"
                    className="px-4 py-2 rounded-full border border-sage/30 text-sm text-muted hover:border-sage hover:text-text transition-colors"
                  >
                    Desarrollo web
                  </button>

                  <button
                    type="button"
                    className="px-4 py-2 rounded-full border border-sage/30 text-sm text-muted hover:border-sage hover:text-text transition-colors"
                  >
                    Automatización
                  </button>

                  <button
                    type="button"
                    className="px-4 py-2 rounded-full border border-sage/30 text-sm text-muted hover:border-sage hover:text-text transition-colors"
                  >
                    IA / Integraciones
                  </button>

                  <button
                    type="button"
                    className="px-4 py-2 rounded-full border border-sage/30 text-sm text-muted hover:border-sage hover:text-text transition-colors"
                  >
                    UI / UX
                  </button>

                  <button
                    type="button"
                    className="px-4 py-2 rounded-full border border-sage/30 text-sm text-muted hover:border-sage hover:text-text transition-colors"
                  >
                    Otro
                  </button>

                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-muted mb-3"
                >
                  Mensaje
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Contame brevemente sobre tu proyecto..."
                  className="w-full resize-none bg-transparent border-b border-sage/30 py-3 text-text placeholder:text-muted/60 outline-none focus:border-sage transition-colors"
                />
              </div>

              {/* Botón */}
             <button
  type="submit"
  className="group w-full flex items-center justify-between bg-cream text-bg px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-sage hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(138,154,126,0.18)]"
>
  <span>Enviar mensaje</span>

  <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
    →
  </span>
</button>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact