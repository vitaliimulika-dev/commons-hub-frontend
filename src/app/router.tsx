import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '@/features/landing/LandingPage'
import { StepPlan, StepBasics, StepReview } from '@/features/onboarding/pages'
import { DashboardPage } from '@/features/dashboard/DashboardPage'
import { SetupBranding, SetupPurpose, SetupWelcome } from '@/features/setup-wizard'
import {
  FundingIntroPage,
  FundingPayoutConnectPage,
  FundingOptionsPage,
  FundingPostPage,
} from '@/features/funding/pages'
import CommunityPage from '@/features/community/CommunityPage'
import InvitePage from '@/features/community/InvitePage'
import CommunityFundingPage from '@/features/community/CommunityFundingPage'
import { AccessGuard, AccessLevel } from '@/shared/guards'

export const router = createBrowserRouter([
  // ==================== Public Routes ====================
  // Available to everyone, no requirements
  {
    path: '/',
    element: (
      <AccessGuard level={AccessLevel.Public}>
        <LandingPage />
      </AccessGuard>
    ),
  },
  {
    path: '/invite',
    element: (
      <AccessGuard level={AccessLevel.Public}>
        <InvitePage />
      </AccessGuard>
    ),
  },

  // ==================== Onboarding Routes ====================
  // Initial setup flow - available before onboarding completion
  {
    path: '/setup/plan',
    element: (
      <AccessGuard level={AccessLevel.Public}>
        <StepPlan />
      </AccessGuard>
    ),
  },
  {
    path: '/setup/basics',
    element: (
      <AccessGuard level={AccessLevel.Public}>
        <StepBasics />
      </AccessGuard>
    ),
  },
  {
    path: '/setup/review',
    element: (
      <AccessGuard level={AccessLevel.Public}>
        <StepReview />
      </AccessGuard>
    ),
  },

  // ==================== Dashboard Routes ====================
  // Requires: OnboardingCompleted
  {
    path: '/dashboard',
    element: (
      <AccessGuard level={AccessLevel.OnboardingCompleted}>
        <DashboardPage />
      </AccessGuard>
    ),
  },
  {
    path: '/dashboard/community',
    element: (
      <AccessGuard level={AccessLevel.OnboardingCompleted}>
        <CommunityPage />
      </AccessGuard>
    ),
  },
  {
    path: '/dashboard/community/funding',
    element: (
      <AccessGuard level={AccessLevel.OnboardingCompleted}>
        <CommunityFundingPage />
      </AccessGuard>
    ),
  },

  // ==================== Setup Wizard Routes ====================
  // Requires: OnboardingCompleted
  {
    path: '/setup-wizard/branding',
    element: (
      <AccessGuard level={AccessLevel.OnboardingCompleted}>
        <SetupBranding />
      </AccessGuard>
    ),
  },
  {
    path: '/setup-wizard/purpose',
    element: (
      <AccessGuard level={AccessLevel.OnboardingCompleted}>
        <SetupPurpose />
      </AccessGuard>
    ),
  },
  {
    path: '/setup-wizard/welcome',
    element: (
      <AccessGuard level={AccessLevel.OnboardingCompleted}>
        <SetupWelcome />
      </AccessGuard>
    ),
  },

  // ==================== Funding Routes ====================
  // Requires: OnboardingCompleted + SetupCompleted
  {
    path: '/funding/intro',
    element: (
      <AccessGuard level={AccessLevel.SetupCompleted}>
        <FundingIntroPage />
      </AccessGuard>
    ),
  },
  {
    path: '/funding/payouts',
    element: (
      <AccessGuard level={AccessLevel.SetupCompleted}>
        <FundingPayoutConnectPage />
      </AccessGuard>
    ),
  },
  {
    path: '/funding/options',
    element: (
      <AccessGuard level={AccessLevel.SetupCompleted}>
        <FundingOptionsPage />
      </AccessGuard>
    ),
  },
  {
    path: '/funding/post',
    element: (
      <AccessGuard level={AccessLevel.SetupCompleted}>
        <FundingPostPage />
      </AccessGuard>
    ),
  },
])
