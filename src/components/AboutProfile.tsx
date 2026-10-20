import profileImage from '../assets/profile.jpeg'
import nameLogo from '../assets/camila-franco.png'

function AboutProfile() {
  return (
    <div className="relative mx-auto w-full max-w-[430px]">

      {/* Foto */}
      <div className="overflow-hidden rounded-2xl border border-sage/20">
        <img
          src={profileImage}
          alt="Camila Franco"
          className="aspect-[3/5] w-full object-cover object-center"
        />
      </div>

      {/* Nombre */}
      <div className="absolute bottom-5 right-8 z-20 w-[130px]">
        <img
          src={nameLogo}
          alt="Camila Franco"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Información */}
      <div className="absolute bottom-3 left-3 z-10 w-[190px] rounded-xl border border-sage/30 bg-bg/90 p-4 backdrop-blur-md sm:left-4">

        <div className="space-y-3">

          <div>
            <p className="text-xs text-muted mb-1">
              UBICACIÓN
            </p>

            <p className="text-sm text-text">
              Godoy Cruz, Mendoza
            </p>
          </div>

          <div className="h-px bg-sage/10" />

          <div>
            <p className="text-xs text-muted mb-1">
              FORMACIÓN
            </p>

            <p className="text-sm text-text">
              Técnica Universitaria
              <br />
              en Programación
            </p>
          </div>

          <div className="h-px bg-sage/10" />

          <div>
            <p className="text-xs text-muted mb-1">
              EGRESO
            </p>

            <p className="text-sm text-text">
              UTN · 2026
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AboutProfile
