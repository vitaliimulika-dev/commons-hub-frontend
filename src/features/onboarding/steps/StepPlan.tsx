import { Card, Chip } from '@/shared/ui'
import { OnboardingLayout } from '../OnboardingLayout'

interface Feature {
  title: string
  description: string
}

interface PlanCardProps {
  title: string
  description: string
  price: number
  features: Feature[]
  note: string
  highlighted?: boolean
  badge?: string
}

function PlanCard({
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
          <Chip>{badge}</Chip>
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
          <div
            key={index}
            className="rounded-sm border border-border bg-card-secondary px-2.5 py-2.5"
          >
            <div className="text-[13px] font-semibold">{feature.title}</div>
            <div className="mt-1 text-xs text-muted-foreground">{feature.description}</div>
          </div>
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

export default function StepPlan(): React.JSX.Element {
  const starterFeatures: Feature[] = [
    {
      title: 'Hosted community',
      description: 'Mastodon-based, managed for you',
    },
    {
      title: 'Basic funding',
      description: 'Supporter memberships + one-time tips',
    },
    {
      title: 'Commons address',
      description: 'Use a commonshub.social subdomain to start',
    },
    {
      title: 'Standard support',
      description: 'Email support, typically within 48 hours',
    },
    {
      title: '1,000 character posts',
      description: 'A little extra room by default',
    },
    {
      title: 'Backups + monitoring',
      description: 'Included',
    },
  ]

  const growthFeatures: Feature[] = [
    {
      title: 'Everything in Starter',
      description: 'Plus the upgrades below',
    },
    {
      title: 'Custom domain',
      description: 'Use your own community address',
    },
    {
      title: 'Fundraising goals',
      description: 'Goal-based campaigns with progress tracking',
    },
    {
      title: 'Priority support',
      description: 'Email support, typically within 24 hours',
    },
    {
      title: 'More media capacity',
      description: 'Higher storage & throughput',
    },
  ]

  return (
    <OnboardingLayout
      step={1}
      title="Set up your community"
      subtitle="Choose a simple plan"
      heading="Pick a plan"
      description="Keep it simple for MVP. Upgrade options later."
      timeEstimate="5–minute launch"
      backTo="/"
      continueTo="/setup/basics"
    >
      <div className="grid gap-3 max-[860px]:grid-cols-1 min-[860px]:grid-cols-2">
        <PlanCard
          title="Starter"
          description="For launching your community"
          price={15}
          features={starterFeatures}
          note="Best for busy creators who want a **sane, high-signal** community without tech overhead."
        />

        <PlanCard
          title="Growth"
          description="For more active communities"
          price={29}
          features={growthFeatures}
          note="Best once your community is active and you want goal-oriented fundraising."
          highlighted
          badge="Most creators"
        />
      </div>

      <div className="mt-3 rounded-sm border border-[#1f6f4a]/[0.18] bg-[#1f6f4a]/[0.06] px-2.5 py-2.5 text-xs text-muted-foreground">
        <strong className="text-foreground">Simple billing:</strong> pay monthly, cancel anytime.
      </div>
    </OnboardingLayout>
  )
}
