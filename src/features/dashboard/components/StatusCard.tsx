import { Button, Card } from '@/shared/ui'

interface StatusItem {
  label: string
  value: string
}

interface StatusCardProps {
  title: string
  subtitle?: string
  items: StatusItem[]
  note?: {
    label: string
    text: string
  }
  action?: {
    label: string
    onClick: () => void
  }
}

export function StatusCard({
  title,
  subtitle,
  items,
  note,
  action,
}: StatusCardProps): React.JSX.Element {
  return (
    <Card className="card rounded-[14px] p-3.5">
      <h3 className="m-0 text-sm font-semibold">{title}</h3>
      {subtitle && <div className="muted mt-0.5 text-xs">{subtitle}</div>}

      {/* List items */}
      <div className="mt-2.5 flex flex-col gap-2.5">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-sm border border-border bg-card-secondary px-2.5 py-2.5"
          >
            <div className="text-[13px] font-semibold">{item.label}</div>
            <div className="muted mt-1 text-xs">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Note */}
      {note && (
        <div className="mt-3 rounded-sm border border-[#1f6f4a]/[0.18] bg-[#1f6f4a]/[0.06] px-2.5 py-2.5 text-xs text-muted-foreground">
          <span className="font-bold text-foreground">{note.label}:</span> {note.text}
        </div>
      )}

      {/* Action */}
      {action && (
        <div className="mt-3 flex gap-2.5">
          <Button
            onClick={action.onClick}
            className="h-auto min-w-[220px] flex-1 rounded-[14px] bg-[#1f6f4a] px-3.5 py-3 text-base font-black hover:translate-y-0 hover:shadow-brand-sm"
          >
            {action.label}
          </Button>
        </div>
      )}
    </Card>
  )
}
