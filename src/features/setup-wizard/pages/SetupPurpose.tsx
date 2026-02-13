import { SetupWizardLayout } from '../SetupWizardLayout'
import { StepHeader } from '@/shared/components'
import { Label, Textarea } from '@/shared/ui'
import { useSetupWizard } from '../SetupWizardContext'

export function SetupPurpose(): React.JSX.Element {
  const { data, updateData } = useSetupWizard()

  return (
    <SetupWizardLayout
      step={2}
      progressLabel="Purpose"
      backTo="/setup-wizard/branding"
      continueTo="/setup-wizard/welcome"
      continueLabel="Save and continue"
    >
      <StepHeader
        step={2}
        totalSteps={3}
        title="Community purpose"
        description="Define the mission and friendly norms before anyone joins."
      />

      {/* Community Mission */}
      <div className="field mt-0">
        <Label>Community mission (About)</Label>
        <Textarea
          value={data.communityMission}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            updateData({ communityMission: e.target.value })
          }}
          className="mt-2 min-h-[90px]"
        />
        <div className="muted mt-1.5 text-xs text-muted-foreground">
          Shown on the public/about page and previewed during signup.
        </div>
      </div>

      {/* Community Norms */}
      <div className="field mt-4">
        <Label>Community norms (short + friendly)</Label>
        <Textarea
          value={data.communityNorms}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            updateData({ communityNorms: e.target.value })
          }}
          className="mt-2 min-h-[110px]"
        />
        <div className="muted mt-1.5 text-xs text-muted-foreground">
          Members are asked to accept these during signup.
        </div>
      </div>
    </SetupWizardLayout>
  )
}
