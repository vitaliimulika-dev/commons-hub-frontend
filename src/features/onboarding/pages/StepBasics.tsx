import { Card, Input, Label } from '@/shared/ui'
import { OnboardingLayout } from '../OnboardingLayout'
import { useOnboarding } from '../OnboardingContext'

export function StepBasics(): React.JSX.Element {
  const { data, updateData } = useOnboarding()

  return (
    <OnboardingLayout
      step={2}
      title="Set up your community"
      subtitle="Basics: name + address"
      heading="Basics"
      description="Just enough to create the community. Everything else can be edited later."
      timeEstimate="2–minute setup"
      backTo="/setup/plan"
      continueTo="/setup/review"
    >
      <Card className="rounded-[14px] p-3.5">
        <div className="mt-3">
          <Label htmlFor="ownerName" className="mb-1.5 block text-xs text-muted-foreground">
            Owner display name
          </Label>
          <Input
            id="ownerName"
            type="text"
            placeholder="e.g., Lou Reynolds"
            value={data.ownerName}
            onChange={e => {
              updateData({ ownerName: e.target.value })
            }}
            className="rounded-[14px] border-border bg-white px-3 py-3 text-sm"
          />
        </div>

        <div className="mt-3">
          <Label htmlFor="ownerEmail" className="mb-1.5 block text-xs text-muted-foreground">
            Owner email
          </Label>
          <Input
            id="ownerEmail"
            type="email"
            placeholder="e.g., lou@yourdomain.com"
            autoComplete="email"
            value={data.ownerEmail}
            onChange={e => {
              updateData({ ownerEmail: e.target.value })
            }}
            className="rounded-[14px] border-border bg-white px-3 py-3 text-sm"
          />
          <div className="mt-1.5 text-xs text-muted-foreground">
            Used for login, important updates, and billing.
          </div>
        </div>

        <div className="mt-3">
          <Label htmlFor="communityName" className="mb-1.5 block text-xs text-muted-foreground">
            Community name
          </Label>
          <Input
            id="communityName"
            type="text"
            placeholder="e.g., The Commons Hub"
            value={data.communityName}
            onChange={e => {
              updateData({ communityName: e.target.value })
            }}
            className="rounded-[14px] border-border bg-white px-3 py-3 text-sm"
          />
        </div>

        <div className="mt-3">
          <Label htmlFor="communityAddress" className="mb-1.5 block text-xs text-muted-foreground">
            Community address (subdomain)
          </Label>
          <Input
            id="communityAddress"
            type="text"
            placeholder="e.g., mycommunity"
            value={data.communityAddress}
            onChange={e => {
              updateData({ communityAddress: e.target.value })
            }}
            className="rounded-[14px] border-border bg-white px-3 py-3 text-sm"
          />
          <div className="mt-1.5 text-xs text-muted-foreground">
            This becomes <strong className="text-foreground">mycommunity.commonshub.social</strong>
          </div>
        </div>

        <div className="mt-3 rounded-sm border border-[#1f6f4a]/[0.18] bg-[#1f6f4a]/[0.06] px-2.5 py-2.5 text-xs text-muted-foreground">
          <strong className="text-foreground">Tip:</strong> You can upgrade to a custom domain later
          without losing your community.
        </div>
      </Card>
    </OnboardingLayout>
  )
}
