import foodStoreLight from '../assets/dashboard_foodStore_claro.png'
import foodStoreDark from '../assets/dashboard_foodStore_oscuro.png'
import foodStoreAdminDashboard from '../assets/foodstore-admin-dashboard.png.png'
import foodStoreAdminProducts from '../assets/foodstore-admin-productos.png.png'
import foodStoreCart from '../assets/foodstore-carrito.png.png'
import foodStoreCatalog from '../assets/foodstore-catalogo.png.png'
import foodStoreProduct from '../assets/foodstore-detalle-producto.png.png'
import foodStoreLogin from '../assets/foodstore-login.png.png'
import foodStoreRegister from '../assets/foodstore-registro.png.png'

type Screenshot = { src: string; title: string; alt: string }

const storeScreenshots: Screenshot[] = [
  { src: foodStoreLight, title: 'Inicio · modo claro', alt: 'Página de inicio de FoodStore en modo claro' },
  { src: foodStoreDark, title: 'Inicio · modo oscuro', alt: 'Página de inicio de FoodStore en modo oscuro' },
  { src: foodStoreCatalog, title: 'Catálogo', alt: 'Catálogo de productos de FoodStore' },
  { src: foodStoreProduct, title: 'Detalle del producto', alt: 'Detalle de un producto de FoodStore' },
  { src: foodStoreCart, title: 'Carrito', alt: 'Carrito de compras de FoodStore' },
]

const accountScreenshots: Screenshot[] = [
  { src: foodStoreLogin, title: 'Inicio de sesión', alt: 'Pantalla de inicio de sesión de FoodStore' },
  { src: foodStoreRegister, title: 'Registro', alt: 'Pantalla de registro de FoodStore' },
]

const adminScreenshots: Screenshot[] = [
  { src: foodStoreAdminDashboard, title: 'Dashboard', alt: 'Dashboard administrativo de FoodStore' },
  { src: foodStoreAdminProducts, title: 'Gestión de productos', alt: 'Gestión de productos del panel administrativo de FoodStore' },
]

const storeFeatures = [
  'Explorar, buscar y filtrar productos',
  'Consultar precios, stock, ingredientes y detalles',
  'Agregar productos y editar cantidades en el carrito',
  'Crear y consultar pedidos',
]

const adminFeatures = [
  'Dashboard con métricas',
  'Gestión de productos, categorías e ingredientes',
  'Gestión de usuarios y stock',
  'Administración de pedidos',
]

const technologyGroups = [
  { title: 'Frontend', items: 'React · TypeScript · Tailwind CSS · React Query · Axios · Zustand' },
  { title: 'Backend', items: 'Python · FastAPI · API REST' },
  { title: 'Base de datos', items: 'PostgreSQL' },
  { title: 'Acceso', items: 'Autenticación · roles · permisos' },
]

const sectionLinks = [
  { href: '#tienda', number: '01', label: 'Tienda' },
  { href: '#cuenta', number: '02', label: 'Cuenta' },
  { href: '#admin', number: '03', label: 'Administración' },
  { href: '#tecnologia', number: '04', label: 'Tecnología' },
]

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-xl border border-sage/15 bg-bg/40 px-4 py-3 text-sm leading-relaxed text-text/85">
          <span className="mt-0.5 text-sage" aria-hidden="true">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function SectionHeading({ id, number, eyebrow, title, description }: { id: string; number: string; eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-8 flex gap-4 md:gap-6">
      <span className="pt-1 text-sm font-medium tracking-widest text-sage">{number}</span>
      <div>
        <p className="text-xs tracking-[0.2em] text-muted mb-3">{eyebrow}</p>
        <h2 id={id} className="text-2xl md:text-3xl font-semibold text-text mb-3">{title}</h2>
        <p className="max-w-3xl text-sm md:text-base leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  )
}

function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  return (
    <div>
      <p className="mb-4 text-xs text-muted">Seleccioná una captura para abrirla en tamaño completo.</p>
      <div className="grid md:grid-cols-2 gap-5">
        {screenshots.map((screenshot) => (
          <figure key={screenshot.title} className="overflow-hidden rounded-2xl border border-sage/20 bg-sage/[0.04] transition-colors hover:border-sage/50">
            <a
              href={screenshot.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group block aspect-video overflow-hidden bg-black/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sage"
              aria-label={`Abrir captura: ${screenshot.title}`}
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                loading="lazy"
                decoding="async"
                className="block h-full w-full object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.025]"
              />
            </a>
            <figcaption className="flex items-center justify-between gap-3 px-4 py-3.5">
              <span className="text-sm font-medium text-text/90">{screenshot.title}</span>
              <a
                href={screenshot.src}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full border border-[#c45738]/40 bg-[#c45738]/10 px-3 py-1.5 text-xs font-medium text-[#e89170] transition-colors hover:border-[#c45738] hover:bg-[#c45738]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e89170]"
              >
                Abrir imagen <span aria-hidden="true">↗</span>
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

function FoodStoreDetails() {
  return (
    <main className="min-h-screen bg-bg px-6 py-10 text-text md:px-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <a href="/#proyectos" className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text">
          <span aria-hidden="true">←</span> Volver a proyectos
        </a>

        <header className="mb-10 rounded-3xl border border-sage/20 bg-gradient-to-br from-sage/[0.12] via-sage/[0.04] to-transparent p-6 md:mb-12 md:p-10">
          <p className="mb-6 inline-flex rounded-full border border-sage/30 bg-sage/10 px-4 py-2 text-xs tracking-widest text-sage">
            E-COMMERCE GASTRONÓMICO · FULL-STACK
          </p>
          <h1 className="mb-5 text-4xl font-bold md:text-6xl">FoodStore</h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            Una tienda online para explorar y comprar productos gastronómicos, junto con un panel
            administrativo para gestionar la operación. Ambas partes se conectan a una API REST
            con persistencia en PostgreSQL.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/camilafranco1103/frontend-store-app"
              target="_blank"
              rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#c45738] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#c45738]/20 transition-all motion-safe:hover:-translate-y-0.5 hover:bg-[#d36545] hover:shadow-lg hover:shadow-[#c45738]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e89170]"
            >
              Ver repositorio
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
                <path d="M5.5 3.5h7v7M12.25 3.75 4 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <span className="text-xs text-muted">React · TypeScript · FastAPI · PostgreSQL</span>
          </div>
        </header>

        <nav aria-label="Secciones del proyecto" className="mb-14 flex flex-wrap items-center gap-x-3 gap-y-2.5">
          {sectionLinks.map(({ href, number, label }) => (
            <a key={href} href={href} className="group inline-flex w-fit shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border border-[#d7e1ce] bg-[#d7e1ce] px-4 py-2.5 text-sm font-medium text-[#20271e] shadow-sm transition-colors hover:border-[#c45738] hover:bg-[#c45738] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e89170]">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#a8b99b] text-[11px] font-bold text-[#20271e] transition-colors group-hover:bg-white/20 group-hover:text-white">{number}</span>
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <section id="tienda" aria-labelledby="store-title" className="mb-20 scroll-mt-28 md:mb-24">
          <SectionHeading
            id="store-title"
            number="01"
            eyebrow="EXPERIENCIA DE CLIENTE"
            title="Tienda online"
            description="Un recorrido de compra de principio a fin: descubrir productos, revisar sus detalles y gestionar el pedido desde el carrito."
          />
          <div className="mb-8 rounded-2xl border border-sage/20 bg-sage/[0.04] p-4 md:p-6">
            <FeatureList items={storeFeatures} />
          </div>
          <ScreenshotGallery screenshots={storeScreenshots} />
        </section>

        <section id="cuenta" aria-labelledby="account-title" className="mb-20 scroll-mt-28 md:mb-24">
          <SectionHeading
            id="account-title"
            number="02"
            eyebrow="ACCESO DE CLIENTES"
            title="Registro e inicio de sesión"
            description="La autenticación permite acceder a las funciones de cliente y diferencia los permisos según el rol."
          />
          <ScreenshotGallery screenshots={accountScreenshots} />
        </section>

        <section id="admin" aria-labelledby="admin-title" className="mb-20 scroll-mt-28 md:mb-24">
          <SectionHeading
            id="admin-title"
            number="03"
            eyebrow="OPERACIÓN DEL E-COMMERCE"
            title="Panel administrativo"
            description="Un espacio para supervisar métricas y administrar los recursos principales de la plataforma."
          />
          <div className="mb-8 rounded-2xl border border-sage/20 bg-sage/[0.04] p-4 md:p-6">
            <FeatureList items={adminFeatures} />
          </div>
          <ScreenshotGallery screenshots={adminScreenshots} />
        </section>

        <section id="tecnologia" aria-labelledby="technology-title" className="mb-20 scroll-mt-28 md:mb-24">
          <SectionHeading
            id="technology-title"
            number="04"
            eyebrow="IMPLEMENTACIÓN"
            title="Tecnología y arquitectura"
            description="El frontend consulta la API con React Query y Axios; Zustand mantiene el estado del carrito. FastAPI expone los recursos y PostgreSQL persiste los datos del sistema."
          />
          <div className="flex flex-wrap justify-center gap-4">
            {technologyGroups.map((group) => (
              <article key={group.title} className="w-fit max-w-full rounded-2xl border border-sage/20 bg-sage/[0.04] px-6 py-5 text-center">
                <h3 className="mb-2 text-sm font-semibold text-sage">{group.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{group.items}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-sage/20 pt-6">
          <p className="text-sm text-muted">FoodStore · E-commerce gastronómico full-stack</p>
          <a href="/#proyectos" className="text-sm text-sage transition-colors hover:text-cream">Volver a proyectos ↑</a>
        </footer>
      </div>
    </main>
  )
}

export default FoodStoreDetails
