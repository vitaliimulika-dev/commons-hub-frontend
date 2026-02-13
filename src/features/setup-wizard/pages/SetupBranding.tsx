import { useState, useRef, type ChangeEvent } from 'react'
import { SetupWizardLayout } from '../SetupWizardLayout'
import { StepHeader } from '@/shared/components'
import { Label } from '@/shared/ui'
import { useSetupWizard } from '../SetupWizardContext'

export function SetupBranding(): React.JSX.Element {
  const { updateData } = useSetupWizard()
  const bannerInputRef = useRef<HTMLInputElement>(null)
  const avatarInputRef = useRef<HTMLInputElement>(null)

  const [bannerPreview, setBannerPreview] = useState<string | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)

  const handleBannerChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) {
      updateData({ bannerFile: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setBannerPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) {
      updateData({ avatarFile: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <SetupWizardLayout
      step={1}
      progressLabel="Branding"
      continueTo="/setup-wizard/purpose"
      continueLabel="Save and continue"
    >
      <StepHeader
        step={1}
        totalSteps={3}
        title="Brand your community"
        description="Make the community feel real and recognizable before you invite anyone."
      />

      {/* Banner */}
      <div className="field mt-0">
        <Label className="mb-1.5 text-xs block">Community banner</Label>

        {/* Visual default preview */}
        <div className="mt-2 overflow-hidden rounded-[14px] border border-border bg-card-secondary">
          <div className="px-3 py-3 font-bold">
            {bannerPreview ? 'Custom banner uploaded' : 'Default community banner'}
          </div>
          <div
            className="flex h-[120px] items-center justify-center opacity-70"
            style={
              bannerPreview
                ? { backgroundImage: `url(${bannerPreview})`, backgroundSize: 'cover' }
                : {}
            }
          >
            {!bannerPreview && '(Default banner preview)'}
          </div>
        </div>

        <div className="note mt-2.5 rounded-[12px] border border-[#1f6f4a]/[0.18] bg-[#1f6f4a]/[0.06] px-2.5 py-2.5 text-xs text-muted-foreground">
          <span className="font-bold text-foreground">Default:</span> A Commonshub-branded banner
          already applied. Uploading a custom banner is optional.
        </div>

        <input
          ref={bannerInputRef}
          type="file"
          accept="image/*"
          onChange={handleBannerChange}
          className="mt-2.5 w-full px-3 py-2.5 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-sm file:font-semibold"
        />
        <div className="muted mt-1.5 text-xs text-muted-foreground">
          Appears on the public community page and during signup.
        </div>
      </div>

      {/* Avatar */}
      <div className="field mt-[18px]">
        <Label>Owner avatar (your "face" in the community)</Label>

        <div className="mt-2.5 flex items-center gap-3">
          <div
            className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-[16px] border border-border bg-card-secondary opacity-70"
            style={
              avatarPreview
                ? {
                    backgroundImage: `url(${avatarPreview})`,
                    backgroundSize: 'cover',
                    opacity: 1,
                  }
                : {}
            }
          >
            {!avatarPreview && '(Avatar)'}
          </div>
          <div className="muted flex-1 text-xs text-muted-foreground">
            {avatarPreview ? 'Custom avatar uploaded' : 'Default avatar applied'}
          </div>
        </div>

        <input
          ref={avatarInputRef}
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="mt-2.5 w-full rounded-[14px] px-3 py-2.5 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-sm file:font-semibold"
        />
        <div className="muted mt-1.5 text-xs text-muted-foreground">
          This avatar appears next to every post you make and helps members recognize you.
        </div>
      </div>
    </SetupWizardLayout>
  )
}
