import { HeroSection } from './sections/HeroSection'
import { BeforeAfterSection } from './sections/BeforeAfterSection'
import { BenefitsSection } from './sections/BenefitsSection'
import { CTASection } from './sections/CTASection'

export default function LandingPage(): React.JSX.Element {
  return (
    <main className="flex justify-center px-[18px] pb-[70px] pt-20 max-sm:px-4 max-sm:pb-14 max-sm:pt-16">
      <div className="m-0 w-full max-w-landing px-14 max-sm:px-[22px]">
        <HeroSection />
        <BeforeAfterSection />
        <BenefitsSection />
        <CTASection />
      </div>
    </main>
  )
}
