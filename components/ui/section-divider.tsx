export function SectionDivider() {
  return (
    <div aria-hidden className="relative h-px w-full bg-border">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-accent" />
    </div>
  )
}
