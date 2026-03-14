"use client"

import Beams from "@workspace/ui/components/Beams"

export function AuthBeams() {
  return (
    <div className="absolute inset-0">
      <Beams
        beamGapPx={1}
        beamHeight={18}
        beamNumber={9}
        beamWidth={1.65}
        noiseIntensity={0.42}
        scale={0.18}
        speed={1.35}
      />
    </div>
  )
}
