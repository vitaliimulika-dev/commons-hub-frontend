/**
 * Access levels for route protection
 * Levels are hierarchical - higher levels require all lower levels
 */
export const AccessLevel = {
  /**
   * Public routes - no requirements
   * Available to everyone
   */
  Public: 'public',

  /**
   * Requires onboarding completion
   * User has completed initial setup steps
   */
  OnboardingCompleted: 'onboarding_completed',

  /**
   * Requires setup wizard completion
   * Implies OnboardingCompleted
   */
  SetupCompleted: 'setup_completed',

  /**
   * Requires funding setup completion
   * Implies SetupCompleted and OnboardingCompleted
   */
  FundingCompleted: 'funding_completed',
} as const

export type AccessLevel = (typeof AccessLevel)[keyof typeof AccessLevel]
