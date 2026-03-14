import type { QuestStep } from "@/domain/content"

export const paradoxJunctionMainSteps: QuestStep[] = [
  {
    id: "get-vial",
    title: "Pick up the vial",
    phaseId: "broken-setup",
    order: 1,
    timeline: "broken",
  },
  {
    id: "fill-vial-with-acid",
    title: "Fill the vial with acid",
    phaseId: "broken-setup",
    order: 2,
    timeline: "broken",
  },
  {
    id: "get-truck-keys",
    title: "Get the truck keys",
    phaseId: "broken-setup",
    order: 3,
    timeline: "broken",
  },
  {
    id: "open-broken-map-doors",
    title: "Open the key broken-map doors",
    phaseId: "broken-setup",
    order: 4,
    timeline: "broken",
  },
  {
    id: "trigger-dog-round-transition",
    title: "Use the dog round to travel to the past",
    phaseId: "dog-round-transition",
    order: 5,
  },
  {
    id: "open-past-map",
    title: "Open the past map",
    phaseId: "past-map-opening",
    order: 6,
    timeline: "past",
  },
  {
    id: "unlock-pack-a-punch",
    title: "Unlock Pack-a-Punch",
    phaseId: "unlock-pack-a-punch",
    order: 7,
    timeline: "past",
  },
]
