import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '@/features/landing/LandingPage'
import StepPlan from '@/features/onboarding/steps/StepPlan'
import StepBasics from '@/features/onboarding/steps/StepBasics'
import StepReview from '@/features/onboarding/steps/StepReview'
import { Dashboard } from '@/features/dashboard/Dashboard'
import { SetupBranding, SetupPurpose, SetupWelcome } from '@/features/setup-wizard'
import FundingPage from '@/features/funding/FundingPage'
import FundingStripePage from '@/features/funding/FundingStripePage'
import FundingOptionsPage from '@/features/funding/FundingOptionsPage'
import FundingPostPage from '@/features/funding/FundingPostPage'
import CommunityPage from '@/features/community/CommunityPage'
import InvitePage from '@/features/community/InvitePage'
import CommunityFundingPage from '@/features/community/CommunityFundingPage'

export const router = createBrowserRouter([
  // Public
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/invite',
    element: <InvitePage />,
  },
  // Setup
  {
    path: '/setup/plan',
    element: <StepPlan />,
  },
  {
    path: '/setup/basics',
    element: <StepBasics />,
  },
  {
    path: '/setup/review',
    element: <StepReview />,
  },
  // Dashboard
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  // Setup Wizard
  {
    path: '/setup-wizard/branding',
    element: <SetupBranding />,
  },
  {
    path: '/setup-wizard/purpose',
    element: <SetupPurpose />,
  },
  {
    path: '/setup-wizard/welcome',
    element: <SetupWelcome />,
  },
  {
    path: '/dashboard/funding',
    element: <FundingPage />,
  },
  {
    path: '/dashboard/funding/stripe',
    element: <FundingStripePage />,
  },
  {
    path: '/dashboard/funding/options',
    element: <FundingOptionsPage />,
  },
  {
    path: '/dashboard/funding/post',
    element: <FundingPostPage />,
  },
  {
    path: '/dashboard/community',
    element: <CommunityPage />,
  },
  {
    path: '/dashboard/community/funding',
    element: <CommunityFundingPage />,
  },
])
