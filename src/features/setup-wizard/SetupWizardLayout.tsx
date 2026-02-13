import { useNavigate } from 'react-router-dom'
import { StageLayout } from '@/shared/layouts'
import { Button, LogoMark, Badge } from '@/shared/ui'
import { FlowBanner, ProgressIndicator } from '@/shared/components'
import { useSetupWizard } from './SetupWizardContext'

interface SetupWizardLayoutProps {
  step: number
  progressLabel: string
  backTo?: string
  continueTo: string
  continueLabel?: string
  onContinue?: () => boolean // Returns false to prevent navigation
  children: React.ReactNode
}

export function SetupWizardLayout({
  step,
  progressLabel,
  backTo,
  continueTo,
  continueLabel = 'Save and continue',
  onContinue,
  children,
}: SetupWizardLayoutProps): React.JSX.Element {
  const navigate = useNavigate()
  const { reset } = useSetupWizard()

  const progressPercent = step === 1 ? 33 : step === 2 ? 66 : 100

  const handleStartOver = (): void => {
    reset()
    void navigate('/')
  }

  const handleReturnToDashboard = (): void => {
    void navigate('/dashboard')
  }

  const handleBack = (): void => {
    if (backTo) {
      void navigate(backTo)
    }
  }

  const handleContinue = (): void => {
    // Allow parent to validate before navigation
    if (onContinue && !onContinue()) {
      return
    }
    void navigate(continueTo)
  }

  return (
    <StageLayout
      mode="flow"
      maxWidth={980}
      centerMaxWidth={760}
      topbarLeft={
        <>
          <LogoMark />
          <div>
            <div className="block text-sm font-semibold">Setup your community</div>
            <div className="block text-xs text-muted-foreground">3 calm steps · ~5 minutes</div>
          </div>
        </>
      }
      topbarCenter={
        <Badge
          variant="secondary"
          className="whitespace-nowrap border-border py-1.5 text-muted-foreground"
        >
          Step {step} of 3
        </Badge>
      }
      topbarRight={
        <Button
          variant="secondary"
          onClick={handleStartOver}
          className="h-auto w-auto whitespace-nowrap px-3.5 py-3 text-base font-black text-muted-foreground hover:border-border hover:bg-card hover:text-foreground"
        >
          Start over
        </Button>
      }
    >
      {/* Flow Banner */}
      <FlowBanner
        title="Guided setup"
        subtitle="· Temporary flow · You'll return to your dashboard when finished."
        actionLabel="Return to dashboard"
        onAction={handleReturnToDashboard}
      />

      {/* Main Card */}
      <div className="rounded-[14px] border border-border bg-card p-3.5 shadow-brand">
        {/* Progress */}
        <ProgressIndicator progress={progressPercent} label={progressLabel} />

        {/* Step Content */}
        {children}

        {/* Footer Bar */}
        <div className="mt-[18px] flex flex-wrap gap-2.5">
          {backTo ? (
            <Button
              variant="secondary"
              onClick={handleBack}
              className="h-auto w-auto whitespace-nowrap rounded-[14px] px-3.5 py-3 text-base font-black hover:border-border hover:bg-card"
            >
              Back
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={handleReturnToDashboard}
              className="h-auto w-auto whitespace-nowrap rounded-[14px] px-3.5 py-3 text-base font-black hover:border-border hover:bg-card"
            >
              Return to dashboard
            </Button>
          )}
          <Button
            onClick={handleContinue}
            className="h-auto min-w-[220px] flex-1 rounded-[14px] bg-[#1f6f4a] px-3.5 py-3 text-base font-black hover:translate-y-0 hover:shadow-brand-sm"
          >
            {continueLabel}
          </Button>
        </div>
      </div>
    </StageLayout>
  )
}
