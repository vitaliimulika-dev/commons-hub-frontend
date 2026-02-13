import { Card, Badge, FeatureItem } from '@/shared/ui'

export interface Feature {
  title: string
  description: string
}

export interface PlanCardProps {
  title: string
  description: string
  price: number
  features: Feature[]
  note: string
  highlighted?: boolean
  badge?: string
}

export function PlanCard({
  title,
  description,
  price,
  features,
  note,
  highlighted = false,
  badge,
}: PlanCardProps): React.JSX.Element {
  return (
    <Card className={`rounded-[14px] p-3.5 ${highlighted ? 'border-2 border-[#1f6f4a]/25' : ''}`}>
      {badge ? (
        <div className="mb-2 flex items-center justify-between gap-2.5">
          <h3 className="m-0 text-sm font-semibold">{title}</h3>
          <Badge
            variant="secondary"
            className="whitespace-nowrap border-border py-1.5 text-muted-foreground"
          >
            {badge}
          </Badge>
        </div>
      ) : (
        <h3 className="m-0 mb-2 text-sm font-semibold">{title}</h3>
      )}

      <div className="text-xs text-muted-foreground">{description}</div>

      <div className="mt-2 text-[26px] font-black leading-none">
        ${price} <span className="text-sm font-bold text-muted-foreground">/mo</span>
      </div>

      <div className="mt-3 flex flex-col gap-2.5">
        {features.map((feature, index) => (
          <FeatureItem
            key={`${feature.title}-${String(index)}`}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="mt-3 rounded-sm border border-[#1f6f4a]/[0.18] bg-[#1f6f4a]/[0.06] px-2.5 py-2.5 text-xs text-muted-foreground">
        {note.split('**').map((part, index) =>
          index % 2 === 1 ? (
            <strong key={index} className="text-foreground">
              {part}
            </strong>
          ) : (
            part
          )
        )}
      </div>
    </Card>
  )
}
