import { Card } from '@/shared/ui'

interface BenefitCardProps {
  title: string
  description: string
}

export function BenefitCard({ title, description }: BenefitCardProps): React.JSX.Element {
  return (
    <Card className="rounded-[18px] p-[18px]">
      <h3 className="m-0 mb-2 text-base font-semibold text-foreground">{title}</h3>
      <p className="m-0 text-sm leading-[1.45] text-muted-foreground">{description}</p>
    </Card>
  )
}
