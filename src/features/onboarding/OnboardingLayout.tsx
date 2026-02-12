import { useNavigate } from 'react-router-dom'
import { Button, LogoMark, Chip } from '@/shared/ui'
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
  const { reset } = useOnboarding()

  const progressWidth: number = step === 1 ? 33 : step === 2 ? 66 : 100

  const handleStartOver = (): void => {
    reset()
    void navigate('/')
  }

  const handleBack = (): void => {
    void navigate(backTo)
  }

  const handleContinue = (): void => {
    void navigate(continueTo)
  }

  return (
    <div
      className="min-h-screen py-[22px]"
      style={{
        background: `
          radial-gradient(1200px 700px at 20% 0%, rgba(31,111,74,0.10), transparent 60%),
          radial-gradient(900px 600px at 85% 15%, rgba(31,111,74,0.07), transparent 55%),
          linear-gradient(to bottom, rgba(31,111,74,0.05) 0%, rgba(245,247,245,1) 70%)
        `,
      }}
    >
      <div className="mx-auto min-h-screen w-full max-w-app px-4 py-[22px]">
        <main className="overflow-hidden rounded-[18px] border border-black/[0.06] bg-background shadow-[0_18px_70px_rgba(0,0,0,0.08)]">
          {/* Topbar */}
          <div className="flex items-center justify-between border-b border-border bg-white/75 px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <div>
                <div className="block text-sm font-semibold">{title}</div>
                <div className="block text-xs text-muted-foreground">{subtitle}</div>
              </div>
            </div>

            <div className="flex justify-center">
              <Chip>Step {step} of 3</Chip>
            </div>

            <div className="flex justify-end">
              <Button
                variant="secondary"
                onClick={handleStartOver}
                className="h-auto w-auto whitespace-nowrap px-3.5 py-3 text-base font-black text-muted-foreground hover:bg-card hover:border-border hover:text-foreground"
              >
                Start over
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="px-[18px] pb-[18px] pt-3.5">
            <div className="mx-auto max-w-content">
              {/* Header */}
              <div className="mb-3 flex items-end justify-between gap-3">
                <div>
                  <h2 className="m-0 text-lg font-semibold">{heading}</h2>
                  <p className="mt-2 text-xs text-muted-foreground">{description}</p>
                </div>
                <Chip>{timeEstimate}</Chip>
              </div>

              {/* Progress */}
              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <span>Plan</span>
                <div className="flex-1 overflow-hidden rounded-full border border-[#1f6f4a]/[0.12] bg-[#1f6f4a]/[0.08]">
                  <div
                    className="h-2 animate-flowPulse bg-[length:200%_100%]"
                    style={{
                      width: `${String(progressWidth)}%`,
                      background:
                        'linear-gradient(90deg, hsl(var(--accent)), rgba(31,111,74,0.65), hsl(var(--accent)))',
                    }}
                  />
                </div>
                <span>Launch</span>
              </div>

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
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
