import Link from "next/link"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const workspaceSections = [
  {
    title: "Run sessions",
    description:
      "Protected run state and active attempts will land here when the live tracking flows are added.",
  },
  {
    title: "Quest routes",
    description:
      "Map-specific step order and checkpoint state will sit on top of Convex-backed data instead of placeholder widgets.",
  },
  {
    title: "Account preferences",
    description:
      "Profile settings are already available through Clerk inside the protected shell.",
  },
] as const

export function DashboardView() {
  return (
    <section className="flex max-w-5xl flex-col gap-8">
      <div className="flex max-w-2xl flex-col gap-3">
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
          Dashboard
        </h1>
        <p className="text-sm leading-7 text-muted-foreground">
          The authenticated shell is live. This space stays intentionally lean
          until the Convex-backed tracking views are ready to replace the
          placeholder copy with real run state.
        </p>
      </div>

      <Card className="max-w-3xl bg-card/70">
        <CardHeader>
          <CardTitle>Workspace</CardTitle>
          <CardDescription>
            The first frontend pass is in place without fake metrics, charts, or
            synthetic activity feeds.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col">
            {workspaceSections.map((section, index) => (
              <div
                key={section.title}
                className={cn(
                  "grid gap-1 py-4 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-4",
                  index > 0 && "border-t border-border"
                )}
              >
                <h2 className="font-medium">{section.title}</h2>
                <p className="text-muted-foreground">{section.description}</p>
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="justify-between gap-3">
          <p className="text-muted-foreground">
            Account management is already wired through Clerk.
          </p>
          <Button asChild size="sm" variant="outline">
            <Link href="/app/account">Open account</Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
