import React from 'react'

interface StageLayoutProps {
  /**
   * Layout mode:
   * - 'flow': Uses flowRoot wrapper with special background (onboarding, setup-wizard)
   * - 'dashboard': Simpler wrapper without flowRoot
   */
  mode?: 'flow' | 'dashboard'

  /**
   * Max width for the wrap container (default: 1180px for flow, 900px for dashboard)
   */
  maxWidth?: number

  /**
   * Max width for the center content area (default: 860px)
   */
  centerMaxWidth?: number

  /**
   * Custom background for flow mode (uses default gradient if not provided)
   */
  flowBackground?: string

  /**
   * Left section of topbar (usually LogoMark + meta text)
   */
  topbarLeft: React.ReactNode

  /**
   * Center section of topbar (optional, e.g., Step chip)
   */
  topbarCenter?: React.ReactNode

  /**
   * Right section of topbar (optional, e.g., buttons)
   */
  topbarRight?: React.ReactNode

  /**
   * Main content area
   */
  children: React.ReactNode
}

export function StageLayout({
  mode = 'flow',
  maxWidth,
  centerMaxWidth = 860,
  flowBackground,
  topbarLeft,
  topbarCenter,
  topbarRight,
  children,
}: StageLayoutProps): React.JSX.Element {
  // Default max widths based on mode
  const defaultMaxWidth = mode === 'flow' ? 1180 : 900
  const wrapMaxWidth = maxWidth ?? defaultMaxWidth

  // Default flow background gradient
  const defaultFlowBackground = `
    radial-gradient(1200px 700px at 20% 0%, rgba(31,111,74,0.10), transparent 60%),
    radial-gradient(900px 600px at 85% 15%, rgba(31,111,74,0.07), transparent 55%),
    linear-gradient(to bottom, rgba(31,111,74,0.05) 0%, rgba(245,247,245,1) 70%)
  `

  const stage = (
    <main className="overflow-hidden rounded-[18px] border border-black/[0.06] bg-background shadow-[0_18px_70px_rgba(0,0,0,0.08)]">
      {/* Topbar */}
      <div className="topbar flex items-center justify-between border-b border-border bg-white/75 px-4 py-3.5">
        {topbarLeft && <div className="flex flex-1 items-center gap-2.5">{topbarLeft}</div>}
        {topbarCenter && <div className="flex flex-1 justify-center">{topbarCenter}</div>}
        {topbarRight && <div className="flex flex-1 justify-end">{topbarRight}</div>}
      </div>

      {/* Content */}
      <div className="px-[18px] pb-[18px] pt-3.5">
        <div className="mx-auto" style={{ maxWidth: `${String(centerMaxWidth)}px` }}>
          {children}
        </div>
      </div>
    </main>
  )

  if (mode === 'flow') {
    return (
      <div
        className="min-h-screen py-[22px]"
        style={{
          background: flowBackground ?? defaultFlowBackground,
        }}
      >
        <div
          className="mx-auto min-h-screen w-full px-4 py-[22px]"
          style={{ maxWidth: `${String(wrapMaxWidth)}px` }}
        >
          {stage}
        </div>
      </div>
    )
  }

  // Dashboard mode - simpler wrapper
  return (
    <div className="min-h-screen px-4 py-[22px]">
      <div
        className="mx-auto min-h-screen w-full"
        style={{ maxWidth: `${String(wrapMaxWidth)}px` }}
      >
        {stage}
      </div>
    </div>
  )
}
