export function HeroSection(): React.JSX.Element {
  return (
    <>
      <h1 className="m-0 animate-riseFade text-[clamp(36px,5vw,54px)] font-black leading-[1.03] tracking-tighter opacity-0 [text-wrap:balance]">
        Turn comments into community.
      </h1>

      <p
        className="mx-0 mt-3.5 max-w-[780px] animate-riseFade text-lg text-muted-foreground opacity-0 max-sm:text-base"
        style={{ animationDelay: '90ms' }}
      >
        A <strong className="text-foreground">chronological, Twitter-style feed</strong> for your
        audience — with <strong className="text-foreground">built-in community funding</strong> —
        and <strong className="text-foreground">no extra content</strong> to produce.
      </p>
    </>
  )
}
