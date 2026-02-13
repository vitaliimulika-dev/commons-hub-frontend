import { useNavigate } from 'react-router-dom'
import { StageLayout } from '@/shared/layouts'
import { Button, LogoMark, Badge } from '@/shared/ui'
import { ProgressIndicator } from '@/shared/components'
import { useOnboarding } from './OnboardingContext'

interface OnboardingLayoutProps {
  step: number
  title: string
  subtitle: string
  heading: string
  description: string
  timeEstimate: string
  backTo: string
  continueTo: string
  continueLabel?: string
  children: React.ReactNode
}

export function OnboardingLayout({
  step,
  title,
  subtitle,
  heading,
  description,
  timeEstimate,
  backTo,
  continueTo,
  continueLabel = 'Continue',
  children,
}: OnboardingLayoutProps): React.JSX.Element {
  const navigate = useNavigate()
  const { reset, completeOnboarding } = useOnboarding()

  const progressWidth: number = step === 1 ? 33 : step === 2 ? 66 : 100

  const handleStartOver = (): void => {
    reset()
    void navigate('/')
  }

  const handleBack = (): void => {
    void navigate(backTo)
  }

  const handleContinue = (): void => {
    // Complete onboarding on final step before navigating to dashboard
    if (step === 3) {
      completeOnboarding()
    }
    void navigate(continueTo)
  }

  return (
    <StageLayout
      mode="flow"
      maxWidth={1180}
      centerMaxWidth={860}
      topbarLeft={
        <>
          <LogoMark />
          <div>
            <div className="block text-sm font-semibold">{title}</div>
            <div className="block text-xs text-muted-foreground">{subtitle}</div>
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
          className="h-auto w-auto whitespace-nowrap px-3.5 py-3 text-base font-black text-muted-foreground hover:bg-card hover:border-border hover:text-foreground"
        >
          Start over
        </Button>
      }
    >
      {/* Header */}
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <h2 className="m-0 text-lg font-semibold">{heading}</h2>
          <p className="mt-2 text-xs text-muted-foreground">{description}</p>
        </div>
        <Badge
          variant="secondary"
          className="whitespace-nowrap border-border py-1.5 text-muted-foreground"
        >
          {timeEstimate}
        </Badge>
      </div>

      {/* Progress */}
      <ProgressIndicator progress={progressWidth} startLabel="Plan" endLabel="Launch" />

      {/* Main Content */}
      <div className="mt-3">{children}</div>

      {/* Footer Bar */}
      <div className="mt-3.5 flex flex-wrap gap-2.5">
        <Button
          variant="secondary"
          onClick={handleBack}
          className="h-auto w-40 rounded-[14px] px-3.5 py-3 text-base font-black hover:bg-card hover:border-border"
        >
          Back
        </Button>
        <Button
          onClick={handleContinue}
          className="h-auto min-w-[220px] flex-1 rounded-[14px] bg-[#1f6f4a] px-3.5 py-3 text-base font-black hover:translate-y-0 hover:shadow-brand-sm"
        >
          {continueLabel}
        </Button>
      </div>
    </StageLayout>
  )
}
