import { useNavigate } from 'react-router-dom'
import { StageLayout } from '@/shared/layouts'
import { Button, LogoMark } from '@/shared/ui'

interface FundingLayoutProps {
  title: string
  subtitle: string
  backTo?: string
  continueTo?: string
  continueLabel?: string
  topbarRightExtra?: React.ReactNode
  children: React.ReactNode
  hideFooter?: boolean
}

export function FundingLayout({
  title,
  subtitle,
  backTo,
  continueTo,
  continueLabel,
  topbarRightExtra,
  children,
  hideFooter,
}: FundingLayoutProps): React.JSX.Element {
  const navigate = useNavigate()

  const handleBack = (): void => {
    if (backTo) void navigate(backTo)
  }

  const handleContinue = (): void => {
    if (continueTo) void navigate(continueTo)
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
            <div className="text-sm font-semibold">{title}</div>
            <div className="text-xs text-muted-foreground">{subtitle}</div>
          </div>
        </>
      }
      topbarRight={
        <div className="flex items-center gap-2.5">
          {topbarRightExtra}
          <Button
            variant="secondary"
            onClick={() => {
              void navigate('/')
            }}
            className="h-auto w-auto whitespace-nowrap px-3.5 py-3 text-base font-black text-muted-foreground hover:border-border hover:bg-card hover:text-foreground"
          >
            Start over
          </Button>
        </div>
      }
    >
      <div className="rounded-[14px] border border-border bg-card p-3.5 shadow-brand">
        {children}

        {!hideFooter && (Boolean(backTo) || Boolean(continueTo)) && (
          <div className="mt-[18px] flex flex-wrap gap-2.5">
            {backTo && (
              <Button
                variant="secondary"
                onClick={handleBack}
                className="h-auto w-auto whitespace-nowrap rounded-[14px] px-3.5 py-3 text-base font-black"
              >
                Back
              </Button>
            )}

            {continueTo && (
              <Button
                onClick={handleContinue}
                className="h-auto min-w-[220px] flex-1 rounded-[14px] bg-[#1f6f4a] px-3.5 py-3 text-base font-black"
              >
                {continueLabel ?? 'Continue'}
              </Button>
            )}
          </div>
        )}
      </div>
    </StageLayout>
  )
}
