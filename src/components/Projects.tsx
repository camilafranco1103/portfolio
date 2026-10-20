import ProjectCard from './ProjectCard'
import foodStoreLight from '../assets/dashboard_foodStore_claro.png'
import foodStoreDark from '../assets/dashboard_foodStore_oscuro.png'

function Projects() {
  const projects = [
    {
      category: 'Automatización',
      title: 'Chatbot IT — WhatsApp + GLPI',
      description:
        'Chatbot que automatiza la creación, consulta y seguimiento de tickets de soporte técnico vía WhatsApp, integrado con GLPI. Incluye triage con IA y notificaciones automáticas.',
      tags: ['n8n', 'WhatsApp API', 'GLPI', 'IA'],
      link: 'https://github.com/camilafranco1103/chatbot-glpi-whatsapp-n8n',
    },
    {
      category: 'Desarrollo Web',
      title: 'Food Store App',
      description:
        'Aplicación full-stack para gestión de una tienda de alimentos, con backend en FastAPI y frontend en React.',
      tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
      link: 'https://github.com/camilafranco1103/frontend-store-app',
      detailLink: '/proyectos/food-store',
      screenshots: [
        { src: foodStoreLight, label: 'Modo claro', alt: 'Página de inicio de Food Store en modo claro' },
        { src: foodStoreDark, label: 'Modo oscuro', alt: 'Página de inicio de Food Store en modo oscuro' },
      ],
    },
    {
      category: 'Plataforma',
      title: 'Active Trace',
      description:
        'Plataforma multi-tenant de gestión académica, co-desarrollada con otro programador.',
      tags: ['React', 'Multi-tenant'],
      link: undefined, // TODO: sumar link cuando lo tengas a mano
    },
  ]

  return (
    <section id="proyectos" className="bg-bg px-6 md:px-12 py-32">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-widest text-muted mb-5">PROYECTOS · 02</p>
        <h2 className="text-4xl md:text-5xl font-bold text-text mb-16">
          Proyectos destacados
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
