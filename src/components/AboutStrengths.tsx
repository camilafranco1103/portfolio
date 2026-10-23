import { BookOpen, Heart, Lightbulb, Sparkles, UsersRound } from 'lucide-react'

const strengths = [
  { Icon: BookOpen, title: 'Aprendizaje continuo' },
  { Icon: Lightbulb, title: 'Resolución de problemas' },
  { Icon: Sparkles, title: 'Adaptabilidad' },
  { Icon: UsersRound, title: 'Trabajo en equipo' },
  { Icon: Heart, title: 'Compromiso' },
]

function AboutStrengths() {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-3 md:grid-cols-5">
      {strengths.map(({ Icon, title }) => (
        <div key={title} className="flex min-w-0 items-center justify-center gap-1.5 text-center text-muted">
          <Icon aria-hidden="true" className="shrink-0 text-cream" size={16} strokeWidth={1.7} />
          <span className="text-[10px] leading-tight sm:text-xs">{title}</span>
        </div>
      ))}
    </div>
  )
}

export default AboutStrengths
