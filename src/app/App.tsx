import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { OnboardingProvider } from '@/features/onboarding/OnboardingContext'
import { SetupWizardProvider } from '@/features/setup-wizard'
import { FundingProvider } from '@/features/funding/FundingContext'
import { ErrorBoundary } from '@/shared/components'

function App() {
  return (
    <ErrorBoundary>
      <OnboardingProvider>
        <SetupWizardProvider>
          <FundingProvider>
            <RouterProvider router={router} />
          </FundingProvider>
        </SetupWizardProvider>
      </OnboardingProvider>
    </ErrorBoundary>
  )
}

export default App
