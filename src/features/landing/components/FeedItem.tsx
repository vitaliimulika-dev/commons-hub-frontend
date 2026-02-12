interface FeedItemProps {
  name: string
  text: string
  delay?: number
}

export function FeedItem({ name, text, delay = 0 }: FeedItemProps): React.JSX.Element {
  return (
    <div
      className="flex gap-2.5 rounded-[14px] px-2 py-2.5 opacity-0 animate-riseFade"
      style={{ animationDelay: `${String(delay)}ms` }}
    >
      <div className="mt-0.5 h-7 w-7 flex-shrink-0 rounded-full bg-[#cfd7d1]" />
      <div className="flex-1">
        <div className="text-[13px] font-extrabold leading-tight text-foreground">{name}</div>
        <div className="mt-0.5 text-[13px] leading-[1.35] text-muted-foreground">{text}</div>
      </div>
    </div>
  )
}
