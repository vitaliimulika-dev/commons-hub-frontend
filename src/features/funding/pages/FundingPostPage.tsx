import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FundingLayout } from '../FundingLayout'
import { Button } from '@/shared/ui'
import { useFunding } from '../FundingContext'

export function FundingPostPage(): React.JSX.Element {
  const navigate = useNavigate()
  const { data, updateData } = useFunding()

  const supportLink = data.supportLink

  const [copied, setCopied] = useState(false)

  // Mark funding as complete when user reaches this page
  useEffect(() => {
    if (!data.isFundingComplete) {
      updateData({ isFundingComplete: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(supportLink)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = supportLink
      document.body.appendChild(textarea)
      textarea.select()
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }

    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <FundingLayout
      title="Pinned funding post"
      subtitle="One calm post · links to your support page"
      hideFooter
    >
      <div className="rounded-[14px] border border-border bg-card p-3.5">
        <h3 className="text-sm font-semibold">Pinned post is live</h3>

        <p className="mt-1.5 text-xs text-muted-foreground">
          Nice. Your support link is now easy to find inside the community.
        </p>

        {/* Rendered post preview */}
        <div className="mt-4 rounded-[14px] border border-border bg-card-secondary p-4">
          <div className="text-[13px] text-muted-foreground mb-2">Pinned post (rendered)</div>

          <div className="space-y-4 text-base leading-relaxed break-words">
            <p>If this community is valuable to you, you can help support it.</p>

            <p>Support is optional. Participation is always free.</p>

            <p>
              Support this community → <span className="font-semibold">{supportLink}</span>
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex flex-wrap gap-3">
          <Button
            variant="secondary"
            onClick={() => {
              void handleCopy()
            }}
            className="flex-1 min-w-[220px] text-base font-black"
          >
            {copied ? 'Copied' : 'Copy support link'}
          </Button>

          <Button
            className="flex-1 min-w-[220px] bg-[#1f6f4a] text-base font-black"
            onClick={() => void navigate('/dashboard')}
          >
            Back to dashboard
          </Button>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Want to adjust the post later? Do it in Mastodon. (Commonshub stays out of the way.)
        </p>
      </div>
    </FundingLayout>
  )
}
