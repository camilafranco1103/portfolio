import { useRef, useState, type FormEvent } from 'react'
import { createWhatsAppMessageUrl } from '../lib/whatsapp'

function Contact() {
  const [projectType, setProjectType] = useState<string | null>(null)
  const [validationErrors, setValidationErrors] = useState({ name: '', message: '' })
  const nameInputRef = useRef<HTMLInputElement>(null)
  const messageInputRef = useRef<HTMLTextAreaElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const nextValidationErrors = {
      name: name ? '' : 'Escribí tu nombre; no puede contener solo espacios.',
      message: message ? '' : 'Escribí un mensaje; no puede contener solo espacios.',
    }

    setValidationErrors(nextValidationErrors)

    if (nextValidationErrors.name || nextValidationErrors.message) {
      if (nextValidationErrors.name) {
        nameInputRef.current?.focus()
      } else {
        messageInputRef.current?.focus()
      }

      return
    }

    const messageLines = [
      'Hola Camila, te contacto desde tu portfolio.',
      '',
      `Nombre: ${name}`,
      `Email: ${email}`,
      ...(projectType ? [`Tipo de proyecto: ${projectType}`] : []),
      '',
      'Mensaje:',
      message,
    ]

    window.location.assign(createWhatsAppMessageUrl(messageLines.join('\n')))
  }

  return (
    <section
      id="contacto"
      className="contact-section min-h-screen bg-bg px-6 md:px-12 py-32 flex items-center"
    >
      <div className="w-full max-w-6xl mx-auto" data-reveal-on-scroll>

        {/* Encabezado */}
        <div className="mb-16">
          <p className="text-sm tracking-widest text-muted mb-5">
            CONTACTO · 04
          </p>

          <h2 className="contact-heading portfolio-section-heading text-text max-w-4xl">
            Hagamos algo{' '}
            <span className="signature-font contact-heading-accent">
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
                <span className="w-2.5 h-2.5 rounded-full bg-sage motion-safe:animate-pulse" />

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

                  <span className="text-muted group-hover:text-sage motion-safe:group-hover:translate-x-1 transition-all">
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

                  <span className="text-muted group-hover:text-sage motion-safe:group-hover:translate-x-1 transition-all">
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

                  <span className="text-muted group-hover:text-sage motion-safe:group-hover:translate-x-1 transition-all">
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
          <form
            aria-label="Formulario de contacto por WhatsApp"
            onSubmit={handleSubmit}
            className="rounded-2xl border border-sage/20 p-8 md:p-10 min-h-[620px]"
          >

            <div className="space-y-8">

              {/* Nombre */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-muted mb-3"
                >
                  Nombre <span aria-hidden="true">*</span>
                </label>

                <input
                  ref={nameInputRef}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="¿Cómo te llamás?"
                  autoComplete="name"
                  required
                  aria-invalid={Boolean(validationErrors.name)}
                  aria-describedby={validationErrors.name ? 'name-error' : undefined}
                  onChange={(event) => {
                    if (event.currentTarget.value.trim()) {
                      setValidationErrors((errors) => ({ ...errors, name: '' }))
                    }
                  }}
                  className="w-full bg-transparent border-b border-sage/30 py-3 text-text placeholder:text-muted outline-none transition-colors focus:border-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                />
                {validationErrors.name && (
                  <p id="name-error" role="alert" className="mt-2 text-sm text-sage">
                    {validationErrors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-muted mb-3"
                >
                  Email <span aria-hidden="true">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  autoComplete="email"
                  required
                  className="w-full bg-transparent border-b border-sage/30 py-3 text-text placeholder:text-muted outline-none transition-colors focus:border-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                />
              </div>

              {/* Tipo de proyecto */}
              <div>
                <p id="project-type-label" className="text-sm text-muted mb-4">
                  ¿Qué tenés en mente? <span className="text-muted/80">(opcional)</span>
                </p>

                <div role="group" aria-labelledby="project-type-label" className="flex flex-wrap gap-2">
                  {['Desarrollo web', 'Automatización', 'IA / Integraciones', 'UI / UX', 'Otro'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      aria-pressed={projectType === type}
                      onClick={() => setProjectType((current) => current === type ? null : type)}
                      className={`min-h-11 rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${
                        projectType === type
                          ? 'border-sage bg-sage/20 text-text'
                          : 'border-sage/30 text-muted hover:border-sage hover:text-text'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-muted mb-3"
                >
                  Mensaje <span aria-hidden="true">*</span>
                </label>

                <textarea
                  ref={messageInputRef}
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Contame brevemente sobre tu proyecto..."
                  required
                  aria-invalid={Boolean(validationErrors.message)}
                  aria-describedby={validationErrors.message ? 'message-error' : undefined}
                  onChange={(event) => {
                    if (event.currentTarget.value.trim()) {
                      setValidationErrors((errors) => ({ ...errors, message: '' }))
                    }
                  }}
                  className="w-full resize-none bg-transparent border-b border-sage/30 py-3 text-text placeholder:text-muted outline-none transition-colors focus:border-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                />
                {validationErrors.message && (
                  <p id="message-error" role="alert" className="mt-2 text-sm text-sage">
                    {validationErrors.message}
                  </p>
                )}
              </div>

              {/* Botón */}
              <div>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  Al continuar, se abrirá WhatsApp con el mensaje preparado para que lo revises y lo envíes desde allí.
                </p>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-between rounded-lg bg-cream px-6 py-4 font-semibold text-bg transition-all duration-300 motion-safe:hover:scale-[1.02] hover:bg-sage hover:shadow-[0_0_30px_rgba(138,154,126,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                >
                  <span>Preparar mensaje en WhatsApp</span>

                  <span aria-hidden="true" className="text-xl transition-transform duration-300 motion-safe:group-hover:translate-x-2">
                    →
                  </span>
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
