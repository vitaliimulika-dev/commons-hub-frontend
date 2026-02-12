interface BeforeBoxProps {
  children: React.ReactNode
}

export function BeforeBox({ children }: BeforeBoxProps): React.JSX.Element {
  return (
    <div className="rounded-[14px] border border-border bg-card px-3 py-2.5 text-[13px] text-foreground/[0.78]">
      {children}
    </div>
  )
}
