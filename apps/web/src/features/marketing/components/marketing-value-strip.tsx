import { cn } from "@workspace/ui/lib/utils"

const valueItems = [
  {
    title: "Phase clarity",
    description: "Keep the quest path readable while the run is still moving.",
  },
  {
    title: "Checkpoint memory",
    description: "Track what is locked in, what is active, and what comes next.",
  },
  {
    title: "Route discipline",
    description:
      "Carry split decisions and adjustment notes forward between attempts.",
  },
] as const

export function MarketingValueStrip() {
  return (
    <section className="grid overflow-hidden border-y border-border/80 bg-card/35 sm:grid-cols-3">
      {valueItems.map((item, index) => (
        <div
          key={item.title}
          className={cn(
            "flex flex-col gap-1.5 px-4 py-3 sm:px-5",
            index > 0 && "border-t border-border/80 sm:border-t-0 sm:border-l"
          )}
        >
          <p className="font-medium tracking-tight">{item.title}</p>
          <p className="text-sm leading-5.5 text-muted-foreground">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  )
}
