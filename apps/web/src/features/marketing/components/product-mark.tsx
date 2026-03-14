export function ProductMark() {
  return (
    <div className="flex items-center gap-4">
      <div
        aria-hidden
        className="relative grid size-12 shrink-0 place-items-center border border-foreground/12 bg-card/60"
      >
        <div className="absolute inset-1.5 border border-foreground/10" />
        <div className="absolute inset-x-3 top-1/2 h-px -translate-y-px bg-primary/40" />
        <div className="absolute inset-y-3 left-1/2 w-px -translate-x-px bg-primary/40" />
        <div className="size-2 bg-primary" />
      </div>

      <div className="flex min-w-0 flex-col gap-0.5">
        <p className="text-sm font-medium tracking-tight">
          Zombies Easter Egg Tracker
        </p>
        <p className="max-w-[28rem] text-sm leading-5.5 text-muted-foreground">
          A tactical companion for route memory, checkpoint clarity, and live
          run coordination.
        </p>
      </div>
    </div>
  )
}
