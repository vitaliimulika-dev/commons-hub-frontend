import { useNavigate } from 'react-router-dom'
import { SetupWizardLayout } from '../SetupWizardLayout'
import { StepHeader } from '@/shared/components'
import { Label, Textarea } from '@/shared/ui'
import { useSetupWizard } from '../SetupWizardContext'

export function SetupWelcome(): React.JSX.Element {
  const navigate = useNavigate()
  const { data, updateData, complete } = useSetupWizard()

  const handleFinish = (): boolean => {
    complete()
    // Navigate to dashboard after completion
    void navigate('/dashboard')
    // Return false to prevent default navigation
    return false
  }

  return (
    <SetupWizardLayout
      step={3}
      progressLabel="Welcome post"
      backTo="/setup-wizard/purpose"
      continueTo="/dashboard"
      continueLabel="Finish setup"
      onContinue={handleFinish}
    >
      <StepHeader
        step={3}
        totalSteps={3}
        title="Welcome your members"
        description="Create a single pinned welcome post. All other posting happens in Mastodon."
      />

      {/* Welcome Post */}
      <div className="field mt-0">
        <Label>Pinned welcome post (text only)</Label>
        <Textarea
          value={data.welcomePost}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            updateData({ welcomePost: e.target.value })
          }}
          className="mt-2 min-h-[190px]"
        />
        <div className="muted mt-1.5 text-xs text-muted-foreground">
          This is the only post created by the wizard. You'll create all other posts directly in
          Mastodon.
        </div>
      </div>
    </SetupWizardLayout>
  )
}
