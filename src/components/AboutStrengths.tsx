const strengths = [
  { icon: '◯', title: 'Aprendizaje continuo' },
  { icon: '▥', title: 'Resolución de problemas' },
  { icon: '✧', title: 'Adaptabilidad' },
  { icon: '♧', title: 'Trabajo en equipo' },
  { icon: '♡', title: 'Compromiso' },
]

function AboutStrengths() {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-3 md:grid-cols-5">
      {strengths.map((strength) => (
        <div key={strength.title} className="flex min-w-0 items-center justify-center gap-1.5 text-center text-muted">
          <span aria-hidden="true" className="shrink-0 text-base text-cream">
            {strength.icon}
          </span>
          <span className="text-[10px] leading-tight sm:text-xs">{strength.title}</span>
        </div>
      ))}
    </div>
  )
}

export default AboutStrengths
