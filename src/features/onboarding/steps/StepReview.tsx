import { Card } from '@/shared/ui'
import { OnboardingLayout } from '../OnboardingLayout'
import { useOnboarding } from '../OnboardingContext'

export default function StepReview(): React.JSX.Element {
  const { data } = useOnboarding()

  return (
    <OnboardingLayout
      step={3}
      title="Set up your community"
      subtitle="Confirm + launch"
      heading="Ready to launch"
      description="This takes a few minutes. Then we'll drop you into your dashboard."
      timeEstimate="~5 minutes"
      backTo="/setup/basics"
      continueTo="/dashboard"
      continueLabel="Launch"
    >
      <Card className="rounded-[14px] p-3.5">
        <h3 className="m-0 mb-2 text-sm font-semibold">Confirm details</h3>

        <div className="mt-2.5 flex flex-col gap-2.5">
          <div className="rounded-sm border border-border bg-card-secondary px-2.5 py-2.5">
            <div className="text-[13px] font-semibold">Owner</div>
            <div className="mt-1 text-xs text-muted-foreground">{data.ownerName || 'Not set'}</div>
          </div>

          <div className="rounded-sm border border-border bg-card-secondary px-2.5 py-2.5">
            <div className="text-[13px] font-semibold">Email</div>
            <div className="mt-1 text-xs text-muted-foreground">{data.ownerEmail || 'Not set'}</div>
          </div>

          <div className="rounded-sm border border-border bg-card-secondary px-2.5 py-2.5">
            <div className="text-[13px] font-semibold">Community</div>
            <div className="mt-1 text-xs text-muted-foreground">
              {data.communityName || 'Not set'}
            </div>
          </div>

          <div className="rounded-sm border border-border bg-card-secondary px-2.5 py-2.5">
            <div className="text-[13px] font-semibold">Address</div>
            <div className="mt-1 text-xs text-muted-foreground">
              {data.communityAddress ? `${data.communityAddress}.commonshub.social` : 'Not set'}
            </div>
          </div>

          <div className="rounded-sm border border-border bg-card-secondary px-2.5 py-2.5">
            <div className="text-[13px] font-semibold">Plan</div>
            <div className="mt-1 text-xs text-muted-foreground">
              {data.selectedPlan === 'growth' ? 'Growth — ' : 'Starter — '}
              <strong className="text-foreground">
                ${data.selectedPlan === 'growth' ? '29' : '15'} / month
              </strong>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-sm border border-[#1f6f4a]/[0.18] bg-[#1f6f4a]/[0.06] px-2.5 py-2.5 text-xs text-muted-foreground">
          <strong className="text-foreground">Double-check spelling:</strong> your address becomes
          your community's home.
        </div>
      </Card>

      <div className="mt-3 rounded-sm border border-[#1f6f4a]/[0.18] bg-[#1f6f4a]/[0.06] px-2.5 py-2.5 text-xs text-muted-foreground">
        You can cancel anytime from your dashboard.
      </div>
    </OnboardingLayout>
  )
}
