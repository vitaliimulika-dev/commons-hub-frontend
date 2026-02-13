import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { OnboardingProvider } from '@/features/onboarding/OnboardingContext'
import { SetupWizardProvider } from '@/features/setup-wizard'

function App() {
  return (
    <OnboardingProvider>
      <SetupWizardProvider>
        <RouterProvider router={router} />
      </SetupWizardProvider>
    </OnboardingProvider>
  )
}

export default App
