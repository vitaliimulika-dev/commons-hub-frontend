import { createContext, useContext, useState, type ReactNode } from 'react'

/* ============================= */
/* Types */
/* ============================= */

export interface FundingData {
  supportLink: string

  subscriptionsEnabled: boolean
  tipsEnabled: boolean

  subscriptionAmounts: string[]
  tipAmounts: string[]

  postText: string

  isFundingComplete: boolean
}

interface FundingContextValue {
  data: FundingData
  updateData: (updates: Partial<FundingData>) => void
  completeFunding: () => void
  reset: () => void
}

/* ============================= */
/* Initial State */
/* ============================= */

const initialData: FundingData = {
  supportLink: 'https://mycommunity.commonshub.social/support',

  subscriptionsEnabled: true,
  tipsEnabled: true,

  subscriptionAmounts: ['1', '3', 'other'],
  tipAmounts: ['1', '3', 'other'],

  postText: `If this community is valuable to you, you can help support it.

Support is optional. Participation is always free.

Support this community →`,

  isFundingComplete: false,
}

/* ============================= */
/* Context */
/* ============================= */

const FundingContext = createContext<FundingContextValue | null>(null)

export function FundingProvider({ children }: { children: ReactNode }): React.JSX.Element {
  const [data, setData] = useState<FundingData>(initialData)

  const updateData = (updates: Partial<FundingData>): void => {
    setData(prev => ({ ...prev, ...updates }))
  }

  const completeFunding = (): void => {
    setData(prev => ({ ...prev, isFundingComplete: true }))
  }

  const reset = (): void => {
    setData(initialData)
  }

  return (
    <FundingContext.Provider
      value={{
        data,
        updateData,
        completeFunding,
        reset,
      }}
    >
      {children}
    </FundingContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFunding(): FundingContextValue {
  const context = useContext(FundingContext)
  if (!context) {
    throw new Error('useFunding must be used within FundingProvider')
  }
  return context
}
