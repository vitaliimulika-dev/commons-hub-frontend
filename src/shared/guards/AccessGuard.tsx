import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useOnboarding } from '@/features/onboarding/OnboardingContext'
import { useSetupWizard } from '@/features/setup-wizard'
import { useFunding } from '@/features/funding/FundingContext'
import { AccessLevel } from './types'

interface AccessGuardProps {
  level: AccessLevel
  children: ReactNode
}

/**
 * Centralized route access control component
 *
 * Enforces hierarchical access levels based on application state:
 * - Public: No requirements
 * - OnboardingCompleted: Requires onboarding completion
 * - SetupCompleted: Requires onboarding + setup wizard completion
 * - FundingCompleted: Requires onboarding + setup + funding completion
 *
 * Automatically redirects to appropriate fallback route when access is denied.
 */
export function AccessGuard({ level, children }: AccessGuardProps): React.JSX.Element {
  const { data: onboardingData } = useOnboarding()
  const { data: setupData } = useSetupWizard()
  const { data: fundingData } = useFunding()

  // Check access based on required level
  const hasAccess = checkAccess(level, {
    isOnboardingComplete: onboardingData.isOnboardingComplete,
    isSetupComplete: setupData.isComplete,
    isFundingComplete: fundingData.isFundingComplete,
  })

  if (hasAccess) {
    return <>{children}</>
  }

  // Determine fallback redirect based on current state
  const fallbackRoute = getFallbackRoute({
    isOnboardingComplete: onboardingData.isOnboardingComplete,
    isSetupComplete: setupData.isComplete,
    isFundingComplete: fundingData.isFundingComplete,
  })

  return <Navigate to={fallbackRoute} replace />
}

/**
 * Centralized access check logic
 * This is the single source of truth for access control
 */
function checkAccess(
  level: AccessLevel,
  state: {
    isOnboardingComplete: boolean
    isSetupComplete: boolean
    isFundingComplete: boolean
  }
): boolean {
  switch (level) {
    case AccessLevel.Public:
      return true

    case AccessLevel.OnboardingCompleted:
      return state.isOnboardingComplete

    case AccessLevel.SetupCompleted:
      return state.isOnboardingComplete && state.isSetupComplete

    case AccessLevel.FundingCompleted:
      return state.isOnboardingComplete && state.isSetupComplete && state.isFundingComplete

    default: {
      // Type-safe exhaustive check
      const _exhaustive: never = level
      return _exhaustive
    }
  }
}

/**
 * Determines where to redirect based on current application state
 * Redirects to the highest accessible route
 */
function getFallbackRoute(state: {
  isOnboardingComplete: boolean
  isSetupComplete: boolean
  isFundingComplete: boolean
}): string {
  // Not completed onboarding -> landing page
  if (!state.isOnboardingComplete) {
    return '/'
  }

  // Completed onboarding but not setup -> dashboard
  if (!state.isSetupComplete) {
    return '/dashboard'
  }

  // Completed setup but not funding -> dashboard
  if (!state.isFundingComplete) {
    return '/dashboard'
  }

  // Everything completed -> dashboard
  return '/dashboard'
}
