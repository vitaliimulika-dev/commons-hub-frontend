import { OnboardingLayout } from '../OnboardingLayout'
import type { Feature } from '@/shared/components/PlanCard'
import { PlanCard } from '@/shared/components/PlanCard'

export function StepPlan(): React.JSX.Element {
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
