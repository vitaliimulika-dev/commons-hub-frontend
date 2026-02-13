interface ProgressIndicatorProps {
  progress: number // 0-100
  label?: string // Single label on the right (for setup wizard)
  startLabel?: string // Label on the left (for onboarding)
  endLabel?: string // Label on the right (for onboarding)
}

export function ProgressIndicator({
  progress,
  label,
  startLabel,
  endLabel,
}: ProgressIndicatorProps): React.JSX.Element {
  return (
    <div className="mb-3.5 mt-3 flex items-center gap-2 text-xs text-muted-foreground">
      {startLabel && <span>{startLabel}</span>}
      <div className="flex-1 overflow-hidden rounded-full border border-[#1f6f4a]/[0.12] bg-[#1f6f4a]/[0.08]">
        <div className="progress-animated h-2" style={{ width: `${String(progress)}%` }} />
      </div>
      {label && <div className="text-xs text-muted-foreground">{label}</div>}
      {endLabel && <span>{endLabel}</span>}
    </div>
  )
}
