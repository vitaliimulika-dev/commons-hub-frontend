import { createContext, useContext, useState, type ReactNode } from 'react'

export interface OnboardingData {
  selectedPlan: 'starter' | 'growth' | null
  ownerName: string
  ownerEmail: string
  communityName: string
  communityAddress: string
}

interface OnboardingContextValue {
  data: OnboardingData
  updateData: (updates: Partial<OnboardingData>) => void
  reset: () => void
}

const OnboardingContext = createContext<OnboardingContextValue | null>(null)

const initialData: OnboardingData = {
  selectedPlan: null,
  ownerName: '',
  ownerEmail: '',
  communityName: '',
  communityAddress: '',
}

export function OnboardingProvider({ children }: { children: ReactNode }): React.JSX.Element {
  const [data, setData] = useState<OnboardingData>(initialData)

  const updateData = (updates: Partial<OnboardingData>): void => {
    setData(prev => ({ ...prev, ...updates }))
  }

  const reset = (): void => {
    setData(initialData)
  }

  return (
    <OnboardingContext.Provider value={{ data, updateData, reset }}>
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
