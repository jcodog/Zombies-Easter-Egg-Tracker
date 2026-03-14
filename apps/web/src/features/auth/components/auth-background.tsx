export function AuthBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* Layered gradients and a restrained grid keep the aside atmospheric without turning into a generic hero blob. */}
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#0f0f11_0%,#14100f_46%,#191310_100%)]" />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(circle at 18% 20%, rgba(228, 110, 58, 0.28) 0, transparent 34%),
            radial-gradient(circle at 76% 18%, rgba(255, 237, 213, 0.12) 0, transparent 28%),
            radial-gradient(circle at 62% 82%, rgba(255, 160, 122, 0.16) 0, transparent 24%)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 16%, black 84%, transparent)",
        }}
      />
      <div className="absolute inset-y-8 left-8 right-8 border border-white/8 lg:inset-y-12 lg:left-12 lg:right-12" />
      <div className="absolute left-8 top-8 h-px w-28 bg-gradient-to-r from-transparent to-white/35 lg:left-12 lg:top-12 lg:w-36" />
      <div className="absolute bottom-10 right-10 h-px w-32 bg-gradient-to-r from-[#e46e3a] to-transparent lg:bottom-14 lg:right-14 lg:w-40" />
    </div>
  )
}
