import AboutProfile from './AboutProfile'
import AboutFocusCard from './AboutFocusCard'
import AboutStrengths from './AboutStrengths'
import logo from '../assets/logo.png'

function About() {
  return (
    <section id="sobre-mi" className="about-section scroll-mt-20 bg-bg px-6 py-20 md:scroll-mt-[5.5rem] md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl" data-reveal-on-scroll>
        <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <AboutProfile />

          <div className="min-w-0">
            <div className="mb-5 flex items-start justify-between gap-6">
              <p className="pt-1 text-[10px] tracking-[0.3em] text-muted">
                SOBRE MÍ · 03
              </p>
              <div className="-mt-3 hidden h-16 w-16 shrink-0 sm:block">
                <img src={logo} alt="Camila Franco" className="h-full w-full object-contain" />
              </div>
            </div>

            <h2 className="about-heading portfolio-section-heading mb-5 text-text">
              Tecnología con una
              <br />
              mirada{' '}
              <span className="signature-font about-heading-accent">
                integral.
              </span>
            </h2>

            <div className="max-w-3xl space-y-3 text-sm leading-relaxed text-muted md:text-[15px]">
              <p>
                Soy <span className="text-text">Camila Franco</span>, Técnica
                Universitaria en Programación y apasionada por la tecnología,
                la automatización y la inteligencia artificial.
              </p>
              <p>
                Me interesa crear soluciones que conecten sistemas, automaticen
                procesos y resuelvan problemas reales, siempre con una mirada
                práctica y orientada a resultados.
              </p>
              <p>
                Mi experiencia combina desarrollo de software, bases de datos,
                integración de APIs y automatización de workflows. También tengo
                experiencia en comunicación digital y diseño de contenido, lo
                que me permite unir lo técnico con lo creativo.
              </p>
              <p>
                Disfruto entender un problema, analizarlo y convertir una
                solución en algo concreto, funcional y fácil de usar.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <AboutFocusCard
                number="01"
                icon="</>"
                title="Desarrollo"
                description="Aplicaciones web, programación orientada a objetos, bases de datos y soluciones a medida."
              />
              <AboutFocusCard
                number="02"
                icon="⚙"
                title="Automatización"
                description="Integración de APIs, workflows y sistemas para optimizar procesos y ahorrar tiempo."
              />
              <AboutFocusCard
                number="03"
                icon="✧"
                title="IA & Comunicación"
                description="Inteligencia artificial, chatbots y procesos digitales con una mirada creativa."
              />
            </div>
          </div>
        </div>

        <div className="mt-7 border-t border-sage/10 pt-5">
          <AboutStrengths />
        </div>
      </div>
    </section>
  )
}

export default About
