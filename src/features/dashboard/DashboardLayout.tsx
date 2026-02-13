import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { StageLayout } from '@/shared/layouts'
import { LogoMark, Badge, Button } from '@/shared/ui'
import { useOnboarding } from '@/features/onboarding/OnboardingContext'
import { useSetupWizard } from '@/features/setup-wizard'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps): React.JSX.Element {
  const navigate = useNavigate()
  const { reset: resetOnboarding } = useOnboarding()
  const { reset: resetSetupWizard } = useSetupWizard()

  useEffect(() => {
    document.body.classList.add('dashboard')
    return () => {
      document.body.classList.remove('dashboard')
    }
  }, [])

  const handleStartOver = (): void => {
    resetOnboarding()
    resetSetupWizard()
    void navigate('/')
  }

  return (
    <StageLayout
      mode="dashboard"
      maxWidth={900}
      centerMaxWidth={860}
      topbarLeft={
        <>
          <LogoMark />
          <div>
            <div className="block text-sm font-semibold">Commons Dashboard</div>
            <div className="block text-xs text-muted-foreground">Stewardship + hosting</div>
          </div>
        </>
      }
      topbarCenter={
        <Badge
          variant="secondary"
          className="whitespace-nowrap border-[var(--dashBorder)] bg-white/10 py-1.5 font-bold text-[var(--dashText)]"
        >
          Owner view
        </Badge>
      }
      topbarRight={
        <Button
          variant="secondary"
          onClick={handleStartOver}
          className="h-auto w-auto whitespace-nowrap px-3.5 py-3 text-base font-black hover:bg-card border-[var(--dashBorder)] hover:border-[var(--dashBorder)] text-[var(--dashText)]"
        >
          Start over
        </Button>
      }
    >
      {/* Header */}
      <div className="header mb-[18px] border-b border-border pb-3.5">
        <h2 className="m-0 text-xl font-black" style={{ letterSpacing: '-0.01em' }}>
          Your community is live
        </h2>
        <p className="mt-2 text-xs text-muted-foreground">
          Your server is running. Next, we'll help you make it feel "real" before you invite anyone.
        </p>
      </div>

      {/* Main Content */}
      {children}
    </StageLayout>
  )
}
