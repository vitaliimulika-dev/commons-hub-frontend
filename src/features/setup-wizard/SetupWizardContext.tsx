import { createContext, useContext, useState, type ReactNode } from 'react'

export interface SetupWizardData {
  bannerFile: File | null
  avatarFile: File | null
  communityMission: string
  communityNorms: string
  welcomePost: string
  isComplete: boolean
}

interface SetupWizardContextValue {
  data: SetupWizardData
  updateData: (updates: Partial<SetupWizardData>) => void
  complete: () => void
  reset: () => void
}

const SetupWizardContext = createContext<SetupWizardContextValue | null>(null)

const initialData: SetupWizardData = {
  bannerFile: null,
  avatarFile: null,
  communityMission:
    'Welcome — this is a community space for thoughtful conversation and shared learning.',
  communityNorms: `Be kind and treat people with respect.
Disagree thoughtfully — critique ideas, not individuals.
Don't post spam or automated content.
Respect privacy and boundaries.`,
  welcomePost: `Welcome 👋

A few simple norms:
• Be kind and human
• No spam
• Disagree thoughtfully

Introduce yourself:
• What brought you here?
• What do you hope to learn or contribute?

Tip: Start with the Local timeline to see what's happening.`,
  isComplete: false,
}

export function SetupWizardProvider({ children }: { children: ReactNode }): React.JSX.Element {
  const [data, setData] = useState<SetupWizardData>(initialData)

  const updateData = (updates: Partial<SetupWizardData>): void => {
    setData(prev => ({ ...prev, ...updates }))
  }

  const complete = (): void => {
    setData(prev => ({ ...prev, isComplete: true }))
  }

  const reset = (): void => {
    setData(initialData)
  }

  return (
    <SetupWizardContext.Provider value={{ data, updateData, complete, reset }}>
      {children}
    </SetupWizardContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSetupWizard(): SetupWizardContextValue {
  const context = useContext(SetupWizardContext)
  if (!context) {
    throw new Error('useSetupWizard must be used within SetupWizardProvider')
  }
  return context
}
