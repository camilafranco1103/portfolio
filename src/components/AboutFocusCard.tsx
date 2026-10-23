import type { ReactNode } from 'react'

type AboutFocusCardProps = {
  number: string
  title: string
  description: string
  icon: ReactNode
}

function AboutFocusCard({
  number,
  title,
  description,
  icon,
}: AboutFocusCardProps) {
  return (
    <div className="group flex min-w-0 flex-col rounded-xl border border-sage/20 bg-sage/[0.03] p-3.5 transition-colors duration-300 hover:border-sage/40 hover:bg-sage/[0.06] md:p-4">

      <div className="mb-4 flex items-start justify-between">

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sage/10 text-base text-cream">
          {icon}
        </div>

        <span className="text-sm text-muted">
          {number}
        </span>

      </div>

      <h3 className="mb-2 text-sm font-semibold text-text">
        {title}
      </h3>

      <p className="text-xs leading-relaxed text-muted">
        {description}
      </p>

    </div>
  )
}

export default AboutFocusCard
