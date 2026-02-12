import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui'

export function CTASection(): React.JSX.Element {
  const navigate = useNavigate()

  const handleStartCommunity = (): void => {
    void navigate('/setup/plan')
  }

  return (
    <>
      {/* Promise */}
      <p className="mx-auto mb-[18px] mt-[26px] text-center text-lg font-black text-[#1f6f4a] max-sm:text-base">
        No ads • No algorithms • Community funded
      </p>

      {/* CTA Button */}
      <div
        className="flex animate-riseFade justify-center opacity-0"
        style={{ animationDelay: '320ms' }}
      >
        <Button
          onClick={handleStartCommunity}
          className="h-auto animate-ctaBreathe rounded-[16px] bg-[#1f6f4a] px-[22px] py-3.5 font-black hover:-translate-y-px hover:bg-[#1f6f4a] text-base"
        >
          Start Your Community
        </Button>
      </div>
    </>
  )
}
