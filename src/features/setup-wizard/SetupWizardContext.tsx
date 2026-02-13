import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export interface SetupWizardData {
  // Step 1: Branding
  bannerFile: File | null
  avatarFile: File | null

  // Step 2: Purpose
  communityMission: string
  communityNorms: string

  // Step 3: Welcome
  welcomePost: string

  // Completion status
  isComplete: boolean
}

interface SetupWizardContextValue {
  data: SetupWizardData
  updateData: (updates: Partial<SetupWizardData>) => void
  complete: () => void
  reset: () => void
}

const SetupWizardContext = createContext<SetupWizardContextValue | null>(null)

const STORAGE_KEY = 'commonshub_setup_wizard_data'

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

// Helper to load from localStorage
function loadFromStorage(): SetupWizardData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored) as SetupWizardData
      // Files can't be serialized, so they'll always be null from storage
      return { ...initialData, ...parsed, bannerFile: null, avatarFile: null }
    }
  } catch (error) {
    console.error('Failed to load setup wizard data from storage:', error)
  }
  return initialData
}

// Helper to save to localStorage
function saveToStorage(data: SetupWizardData): void {
  try {
    // Don't serialize File objects
    const toStore = { ...data, bannerFile: null, avatarFile: null }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore))
  } catch (error) {
    console.error('Failed to save setup wizard data to storage:', error)
  }
}

export function SetupWizardProvider({ children }: { children: ReactNode }): React.JSX.Element {
  const [data, setData] = useState<SetupWizardData>(loadFromStorage)

  // Persist to localStorage whenever data changes
  useEffect(() => {
    saveToStorage(data)
  }, [data])

  const updateData = (updates: Partial<SetupWizardData>): void => {
    setData(prev => ({ ...prev, ...updates }))
  }

  const complete = (): void => {
    setData(prev => ({ ...prev, isComplete: true }))
  }

  const reset = (): void => {
    setData(initialData)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (error) {
      console.error('Failed to remove setup wizard data from storage:', error)
    }
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
