import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { OnboardingProvider } from '@/features/onboarding/OnboardingContext'

function App() {
  return (
    <OnboardingProvider>
      <RouterProvider router={router} />
    </OnboardingProvider>
  )
}

export default App
