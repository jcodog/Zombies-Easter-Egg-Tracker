export type TimelineId = string

export interface QuestStep {
  id: string
  title: string
  description?: string
  phaseId: string
  order: number
  timeline?: TimelineId
  optional?: boolean
}

export interface QuestPhase {
  id: string
  title: string
  order: number
}

export interface QuestRoute {
  id: string
  name: string
  description?: string
}

export interface QuestDefinition {
  id: string
  mapId: string
  name: string
  version: number
}
