import { BenefitCard } from '../components/BenefitCard'

const benefits = [
  {
    title: 'Real conversations',
    description:
      'One shared feed. No algorithmic distortion. Your audience talks with you — and each other — openly.',
  },
  {
    title: 'No extra work',
    description:
      'Keep publishing on YouTube or Substack. Just share your link. Conversations happen here.',
  },
  {
    title: 'Sustainable by design',
    description:
      'Built-in community funding keeps it healthy — without ads, algorithms, or platform extraction.',
  },
]

export function BenefitsSection(): React.JSX.Element {
  return (
    <div
      className="mt-[22px] grid animate-riseFade gap-[18px] opacity-0 md:grid-cols-3"
      style={{ animationDelay: '250ms' }}
    >
      {benefits.map(benefit => (
        <BenefitCard key={benefit.title} title={benefit.title} description={benefit.description} />
      ))}
    </div>
  )
}
