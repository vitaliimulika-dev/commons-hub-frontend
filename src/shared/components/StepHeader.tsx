interface StepHeaderProps {
  step: number
  totalSteps: number
  title: string
  description?: string
}

export function StepHeader({
  step,
  totalSteps,
  title,
  description,
}: StepHeaderProps): React.JSX.Element {
  return (
    <div className="mb-2.5 flex items-start justify-between gap-3">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#1f6f4a]/[0.22] bg-[#1f6f4a]/[0.08] px-2.5 py-1.5 font-black text-[13px]">
          Step {step} of {totalSteps}
        </div>
        <h3 className="m-0 mt-2 text-sm font-semibold">{title}</h3>
        {description && (
          <div className="muted mb-3.5 text-xs text-muted-foreground">{description}</div>
        )}
      </div>
    </div>
  )
}
