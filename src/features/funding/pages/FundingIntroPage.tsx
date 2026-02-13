import { useEffect } from 'react'
import { useFunding } from '../FundingContext'
import { FundingLayout } from '../FundingLayout'
import { FeatureItem } from '@/shared/ui'

export function FundingIntroPage(): React.JSX.Element {
  const { updateData } = useFunding()
  useEffect(() => {
    updateData({ isFundingComplete: false })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FundingLayout
      title="Enable funding"
      subtitle="Optional support · no ads · no pressure"
      backTo="/dashboard"
      continueTo="/funding/payouts"
      continueLabel="Connect payouts"
    >
      <h3 className="mb-1.5 text-sm font-semibold">How funding works</h3>

      <p className="text-xs text-muted-foreground">
        Funding is optional. Participation in your community is always free. Support shows up as a
        simple link you can share — and as a pinned post inside your community.
      </p>

      <div className="mt-4 flex flex-col gap-2.5">
        <FeatureItem
          title="No ads"
          description="Commonshub never inserts advertising or sponsored content."
        />
        <FeatureItem
          title="No algorithms"
          description="Support doesn’t affect visibility or ranking."
        />
        <FeatureItem
          title="Your terms"
          description="You choose whether to offer subscriptions, tips, or both."
        />
      </div>

      <div className="mt-3 rounded-[12px] border border-[#1f6f4a]/[0.18] bg-[#1f6f4a]/[0.06] px-3 py-3 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">How payouts work:</span> Payments are
        handled securely by Stripe. Commonshub never sees card details. Funds deposit directly to
        your bank account.
      </div>

      <div className="mt-3 rounded-[12px] border border-border bg-card-secondary p-3 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">Next:</span> Connect Stripe so payouts can
        go directly to you.
      </div>
    </FundingLayout>
  )
}
