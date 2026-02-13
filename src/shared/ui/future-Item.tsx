interface FeatureItemProps {
  title: string
  description: string
}

export function FeatureItem({ title, description }: FeatureItemProps): React.JSX.Element {
  return (
    <div className="rounded-sm border border-border bg-card-secondary px-2.5 py-2.5">
      <div className="text-[13px] font-semibold">{title}</div>
      <div className="mt-1 text-xs text-muted-foreground">{description}</div>
    </div>
  )
}
