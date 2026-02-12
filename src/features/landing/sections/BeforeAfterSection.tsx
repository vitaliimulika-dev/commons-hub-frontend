import { Card } from '@/shared/ui'
import { BeforeBox } from '../components/BeforeBox'
import { ArrowDivider } from '../components/ArrowDivider'
import { FeedItem } from '../components/FeedItem'

export function BeforeAfterSection(): React.JSX.Element {
  return (
    <div
      className="mt-10 animate-riseFade rounded-[28px] border border-border bg-secondary px-7 py-[30px] opacity-0 shadow-[0_10px_30px_rgba(16,32,24,0.06)]"
      style={{ animationDelay: '170ms' }}
    >
      {/* Grid */}
      <div className="grid items-center gap-[18px] md:grid-cols-[1fr_auto_1fr]">
        {/* Before */}
        <div>
          <div className="mb-2.5 text-xs font-black uppercase tracking-[0.14em] text-foreground/65">
            Before
          </div>
          <div className="space-y-2.5">
            <BeforeBox>YouTube Comments</BeforeBox>
            <BeforeBox>Substack Replies</BeforeBox>
            <BeforeBox>Twitter Threads</BeforeBox>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex">
          <ArrowDivider />
        </div>

        {/* After */}
        <div>
          <div className="mb-2.5 text-xs font-black uppercase tracking-[0.14em] text-foreground/65">
            After
          </div>
          <Card className="rounded-[18px] p-3.5">
            <div className="divide-y divide-border/70">
              <FeedItem
                name="Alex"
                text="This episode hit hard. Especially the part about sustainable communities."
                delay={220}
              />
              <FeedItem
                name="Jordan"
                text="Same here. I love having one place to continue the conversation."
                delay={300}
              />
              <FeedItem
                name="You"
                text="Appreciate that. This is exactly why we built this space."
                delay={380}
              />
            </div>
          </Card>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-4 text-center text-sm text-muted-foreground">
        <strong className="text-foreground">Before:</strong> scattered, linear comment threads.{' '}
        <strong className="text-foreground">After:</strong> a media-rich, two-way conversation feed.
      </div>

      {/* Tagline */}
      <div className="mt-2.5 text-center font-black text-[#1f6f4a]">
        From scattered threads to shared community.
      </div>
    </div>
  )
}
