import { useEffect } from 'react'
import { FundingLayout } from '../FundingLayout'
import { FeatureItem, Input, Badge } from '@/shared/ui'
import { useFunding } from '../FundingContext'

export function FundingPayoutConnectPage(): React.JSX.Element {
  const { updateData } = useFunding()
  useEffect(() => {
    updateData({
      subscriptionsEnabled: false,
      tipsEnabled: false,
      isFundingComplete: false,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <FundingLayout
      title="Stripe (mock)"
      subtitle="Connect payouts for Commonshub"
      backTo="/funding/intro"
      continueTo="/funding/options"
      continueLabel="Finish & return"
      topbarRightExtra={
        <Badge
          variant="secondary"
          className="whitespace-nowrap border-border py-1.5 text-muted-foreground"
        >
          External step
        </Badge>
      }
    >
      {/* Header */}
      <div className="mb-4 flex flex-1 items-start justify-between gap-4">
        <div className="flex w-full flex-col">
          <h2 className="text-lg font-black">Finish your payout setup</h2>
          <div className="flex items-end justify-between gap-3">
            <p className="mt-2 text-xs text-muted-foreground">
              This is a simulated Stripe onboarding page. In the real flow, you’d enter identity +
              bank details here.
            </p>
            <Badge
              variant="secondary"
              className="whitespace-nowrap border-border py-1.5 text-muted-foreground"
            >
              ~2 minutes
            </Badge>
          </div>
        </div>
      </div>

      {/* What Stripe collects */}
      <div className="rounded-[14px] border border-border bg-card p-3.5">
        <h3 className="mb-2.5 text-sm font-semibold">What Stripe will collect</h3>

        <div className="flex flex-col gap-2.5">
          <FeatureItem title="Identity" description="Name, address, and verification details" />
          <FeatureItem title="Bank payouts" description="Where funds should be deposited" />
          <FeatureItem title="Tax information" description="As required by your country" />
        </div>

        <div className="mt-3 rounded-sm border border-[#1f6f4a]/[0.18] bg-[#1f6f4a]/[0.06] px-2.5 py-2.5 text-xs text-muted-foreground">
          <strong className="text-foreground">Important:</strong> Commonshub doesn’t see card
          details. Stripe handles payments securely.
        </div>

        {/* Mock status */}
        <div className="mt-4">
          <label className="block text-xs font-semibold mb-1.5">Mock status</label>

          <Input value="Ready to connect" readOnly />

          <p className="mt-1.5 text-xs text-muted-foreground">
            Click “Finish & return” to simulate a successful Stripe connection.
          </p>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          You will return to Commonshub to choose subscriptions and/or tips.
        </p>
      </div>
    </FundingLayout>
  )
}
