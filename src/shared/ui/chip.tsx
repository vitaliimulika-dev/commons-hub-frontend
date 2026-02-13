import { Badge } from './badge'

interface ChipProps {
  children: React.ReactNode
}

export function Chip({ children }: ChipProps): React.JSX.Element {
  return (
    <Badge
      variant="secondary"
      className="chip whitespace-nowrap rounded-full border border-border bg-secondary px-2.5 py-1.5 text-xs text-muted-foreground"
    >
      {children}
    </Badge>
  )
}
