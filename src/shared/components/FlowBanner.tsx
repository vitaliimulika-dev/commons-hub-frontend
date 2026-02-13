import { Button } from '@/shared/ui'

interface FlowBannerProps {
  title: string
  subtitle: string
  actionLabel: string
  onAction: () => void
}

export function FlowBanner({
  title,
  subtitle,
  actionLabel,
  onAction,
}: FlowBannerProps): React.JSX.Element {
  return (
    <div className="mb-3.5 flex items-center justify-between gap-3 rounded-[14px] border border-[#1f6f4a]/[0.18] bg-[#1f6f4a]/[0.06] px-3 py-2.5">
      <div>
        <span className="font-black">{title}</span>
        <span className="muted ml-1 text-xs text-muted-foreground">{subtitle}</span>
      </div>
      <Button
        variant="secondary"
        onClick={onAction}
        className="h-auto w-auto whitespace-nowrap rounded-[14px] border border-border bg-white px-3.5 py-3 text-base font-black hover:bg-card"
      >
        {actionLabel}
      </Button>
    </div>
  )
}
