import { useState } from 'react'
import { FundingLayout } from '../FundingLayout'
import { Button, Input } from '@/shared/ui'
import { useFunding } from '../FundingContext'

export function FundingOptionsPage(): React.JSX.Element {
  const { data, updateData } = useFunding()

  const supportLink = data.supportLink

  const [showSupportField, setShowSupportField] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(supportLink)
    } catch {
      // Clipboard API might fail silently
    }

    setShowSupportField(true)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  /* ------------------------------
     Subscriptions logic
  ------------------------------ */
  const toggleSubAmount = (value: string) => {
    const current = new Set(data.subscriptionAmounts)

    if (current.has(value)) {
      if (current.size === 1) return
      current.delete(value)
    } else {
      current.add(value)
    }

    updateData({ subscriptionAmounts: Array.from(current) })
  }

  /* ------------------------------
     Tips logic
  ------------------------------ */
  const toggleTipAmount = (value: string) => {
    const current = new Set(data.tipAmounts)

    if (current.has(value)) {
      if (current.size === 1) return
      current.delete(value)
    } else {
      current.add(value)
    }

    updateData({ tipAmounts: Array.from(current) })
  }

  const chipBase = 'border-2 font-semibold transition-all duration-150'
  const activeChip = 'border-[#1f6f4a]/30 bg-[#1f6f4a]/5'
  const inactiveChip = 'border-border bg-card'

  const subsSelected = new Set(data.subscriptionAmounts)
  const tipsSelected = new Set(data.tipAmounts)

  return (
    <FundingLayout
      title="Funding"
      subtitle="Choose what to offer · change anytime"
      backTo="/dashboard"
      continueTo="/funding/post"
      continueLabel="Continue"
    >
      {/* ------------------------------
          Support link
      ------------------------------ */}
      <div className="rounded-[14px] border border-border bg-card p-3.5">
        <h3 className="text-sm font-semibold">Support link</h3>

        <p className="text-xs mt-1.5 text-muted-foreground">
          This is the link you can share anywhere (Substack, YouTube, email, socials).
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Button
            onClick={() => {
              void handleCopy()
            }}
            className="flex-1 min-w-[220px] bg-[#1f6f4a] text-base font-black"
          >
            {copied ? 'Copied' : 'Copy support link'}
          </Button>

          <Button variant="secondary" className="flex-1 min-w-[220px] text-base font-black">
            Preview page
          </Button>
        </div>

        {showSupportField && (
          <div className="mt-4 animate-riseFade">
            <label className="block text-xs font-semibold mb-1.5">Support link</label>

            <Input value={supportLink} readOnly />

            <p className="mt-1.5 text-xs text-muted-foreground">
              Tip: you can also post this link as a pinned post.
            </p>
          </div>
        )}
      </div>

      {/* ------------------------------
          What to offer
      ------------------------------ */}
      <div className="mt-4 rounded-[14px] border border-border bg-card p-3.5">
        <h3 className="text-sm font-semibold">What to offer</h3>

        <p className="mt-1.5 text-xs text-muted-foreground">
          Participation is always free. Support is optional.
        </p>

        {/* ---------------- Subscriptions ---------------- */}
        <div className="mt-4 rounded-[14px] border border-border bg-card-secondary p-3.5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="font-semibold">Subscriptions</div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                Monthly support with a small supporter badge.
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Off</span>
              <input
                type="checkbox"
                checked={data.subscriptionsEnabled}
                onChange={() => {
                  updateData({
                    subscriptionsEnabled: !data.subscriptionsEnabled,
                  })
                }}
              />
              <span>On</span>
            </label>
          </div>

          {data.subscriptionsEnabled && (
            <div className="mt-4">
              <div className="mb-2 text-xs text-muted-foreground">Suggested amounts</div>

              <div className="flex flex-wrap gap-3">
                {[
                  { label: '$1 / mo', value: '1' },
                  { label: '$3 / mo', value: '3' },
                  { label: 'Other', value: 'other' },
                ].map(item => {
                  const active = subsSelected.has(item.value)

                  return (
                    <Button
                      key={item.value}
                      variant="secondary"
                      onClick={() => {
                        toggleSubAmount(item.value)
                      }}
                      className={`${chipBase} ${active ? activeChip : inactiveChip}`}
                    >
                      {item.label}
                    </Button>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* ---------------- Tips ---------------- */}
        <div className="mt-4 rounded-[14px] border border-border bg-card-secondary p-3.5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="font-semibold">One-time tips</div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                A simple thank-you. No perks required.
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Off</span>
              <input
                type="checkbox"
                checked={data.tipsEnabled}
                onChange={() => {
                  updateData({
                    tipsEnabled: !data.tipsEnabled,
                  })
                }}
              />
              <span>On</span>
            </label>
          </div>

          {data.tipsEnabled && (
            <div className="mt-4">
              <div className="mb-2 text-xs text-muted-foreground">Suggested amounts</div>

              <div className="flex flex-wrap gap-3">
                {[
                  { label: '$1', value: '1' },
                  { label: '$3', value: '3' },
                  { label: 'Other', value: 'other' },
                ].map(item => {
                  const active = tipsSelected.has(item.value)

                  return (
                    <Button
                      key={item.value}
                      variant="secondary"
                      onClick={() => {
                        toggleTipAmount(item.value)
                      }}
                      className={`${chipBase} ${active ? activeChip : inactiveChip}`}
                    >
                      {item.label}
                    </Button>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Campaigns */}
        <div className="mt-3.5 rounded-[12px] border border-border bg-card-secondary p-2.5 text-xs text-muted-foreground">
          <strong className="text-foreground">Campaigns:</strong> Coming later (goal-based
          fundraising).
        </div>
      </div>
    </FundingLayout>
  )
}
