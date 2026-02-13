import { createContext, useContext, useState, type ReactNode } from 'react'

export interface OnboardingData {
  selectedPlan: 'starter' | 'growth' | null
  ownerName: string
  ownerEmail: string
  communityName: string
  communityAddress: string
  isOnboardingComplete: boolean
}

interface OnboardingContextValue {
  data: OnboardingData
  updateData: (updates: Partial<OnboardingData>) => void
  completeOnboarding: () => void
  reset: () => void
}

const OnboardingContext = createContext<OnboardingContextValue | null>(null)

const initialData: OnboardingData = {
  selectedPlan: null,
  ownerName: '',
  ownerEmail: '',
  communityName: '',
  communityAddress: '',
  isOnboardingComplete: false,
}

export function OnboardingProvider({ children }: { children: ReactNode }): React.JSX.Element {
  const [data, setData] = useState<OnboardingData>(initialData)

  const updateData = (updates: Partial<OnboardingData>): void => {
    setData(prev => ({ ...prev, ...updates }))
  }

  const completeOnboarding = (): void => {
    setData(prev => ({ ...prev, isOnboardingComplete: true }))
  }

  const reset = (): void => {
    setData(initialData)
  }

  return (
    <OnboardingContext.Provider value={{ data, updateData, completeOnboarding, reset }}>
      {children}
    </OnboardingContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useOnboarding(): OnboardingContextValue {
  const context = useContext(OnboardingContext)
  if (!context) {
    throw new Error('useOnboarding must be used within OnboardingProvider')
  }
  return context
}
