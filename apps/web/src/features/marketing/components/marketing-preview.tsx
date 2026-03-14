import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

const phaseRows = [
  {
    name: "Power & access",
    detail: "Doors, switches, and the first route commit.",
    status: "complete",
  },
  {
    name: "Cipher route",
    detail: "Keep the active sequence visible while the squad moves.",
    status: "active",
  },
  {
    name: "Boss prep",
    detail: "Armor, wonder weapon, and final setup hold.",
    status: "queued",
  },
  {
    name: "Final clear",
    detail: "Lock the route and finish without scrambling notes.",
    status: "queued",
  },
] as const

const checkpointRows = [
  "Canal access secured",
  "Valve order confirmed",
  "Key item path stable",
  "Boss entry prep held",
] as const

const routeNotes = [
  "Hold the second trigger until the squad is in position.",
  "Keep the wonder weapon branch visible next to the main path.",
] as const

const statusStyles = {
  complete: "border-primary/40 bg-primary/20",
  active: "border-primary bg-primary",
  queued: "border-foreground/15 bg-transparent",
} as const

export function MarketingPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[42rem] lg:mx-0">
      <div aria-hidden className="absolute inset-4 border border-primary/20" />

      <Card className="relative bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] py-0">
        <CardHeader className="gap-3 border-b border-border/80 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">Paradox Junction</Badge>
            <Badge variant="secondary">Main Quest</Badge>
            <Badge variant="outline">Standard Route</Badge>
          </div>

          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div className="flex min-w-0 flex-col gap-1">
              <CardTitle className="text-base tracking-tight">
                A run board built around phases, checkpoints, and route notes.
              </CardTitle>
              <p className="text-sm leading-6 text-muted-foreground">
                The active sequence stays visible, the next phase stays obvious,
                and split decisions stay attached to the run.
              </p>
            </div>

            <p className="text-sm text-muted-foreground">Live run surface</p>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-3 py-4">
          <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_14rem]">
            <section className="border border-border/80 bg-background/40 p-3.5">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium tracking-tight">Phase track</p>
                <p className="text-sm text-muted-foreground">
                  Current sequence
                </p>
              </div>

              <div className="mt-3 flex flex-col gap-0">
                {phaseRows.map((phase, index) => (
                  <div key={phase.name} className="flex flex-col">
                    {index > 0 ? <Separator /> : null}
                    <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 py-2.5">
                      <div className="flex flex-col items-center">
                        <div
                          aria-hidden
                          className={cn(
                            "mt-1 size-3 border",
                            statusStyles[phase.status]
                          )}
                        />
                        {index < phaseRows.length - 1 ? (
                          <div
                            aria-hidden
                            className="mt-2 h-full w-px bg-border"
                          />
                        ) : null}
                      </div>

                      <div className="min-w-0">
                        <p className="font-medium tracking-tight">
                          {phase.name}
                        </p>
                        <p className="text-sm leading-5.5 text-muted-foreground">
                          {phase.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="border border-border/80 bg-background/60 p-3.5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="font-medium tracking-tight">
                    Active checkpoint
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Sewer relay alignment
                  </p>
                </div>

                <Separator />

                <div className="flex flex-col gap-2.5">
                  {checkpointRows.map((item, index) => (
                    <div
                      key={item}
                      className={cn(
                        "flex items-start gap-3",
                        index === 1
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      <div
                        aria-hidden
                        className={cn(
                          "mt-1 size-2 shrink-0 border",
                          index < 2
                            ? "border-primary bg-primary/70"
                            : "border-border"
                        )}
                      />
                      <p className="leading-5.5">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)]">
            <section className="border border-border/80 bg-background/40 p-3.5">
              <div className="flex flex-col gap-2.5">
                <p className="font-medium tracking-tight">Route notes</p>
                <Separator />
                <div className="flex flex-col gap-2.5">
                  {routeNotes.map((note) => (
                    <p
                      key={note}
                      className="text-sm leading-5.5 text-muted-foreground"
                    >
                      {note}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            <section className="border border-border/80 bg-background/40 p-3.5">
              <div className="flex h-full flex-col justify-between gap-5">
                <div className="flex flex-col gap-2">
                  <p className="font-medium tracking-tight">Checkpoint stack</p>
                  <p className="text-sm leading-5.5 text-muted-foreground">
                    Completed, active, and held steps stay in one compact read.
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {checkpointRows.map((item, index) => (
                    <div
                      key={item}
                      className={cn(
                        "h-2 border",
                        index < 2
                          ? "border-primary bg-primary/70"
                          : "border-border bg-background"
                      )}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
