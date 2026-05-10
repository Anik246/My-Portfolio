export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Flare A — indigo, top-left */}
      <div
        className="absolute -top-24 -left-24 w-[55vw] h-[55vw] opacity-70 mix-blend-screen"
        style={{
          background:
            'radial-gradient(closest-side, rgba(99,102,241,0.25), rgba(99,102,241,0) 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Flare B — cyan, right */}
      <div
        className="absolute top-1/3 -right-32 w-[50vw] h-[50vw] opacity-60 mix-blend-screen"
        style={{
          background:
            'radial-gradient(closest-side, rgba(56,189,248,0.22), rgba(56,189,248,0) 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Flare C — pink, bottom */}
      <div
        className="absolute -bottom-[20vh] left-1/4 w-[65vw] h-[65vw] opacity-50 mix-blend-screen"
        style={{
          background:
            'radial-gradient(closest-side, rgba(236,72,153,0.15), rgba(236,72,153,0) 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 50% -10%, rgba(255,255,255,0.04), rgba(0,0,0,0) 60%)',
        }}
      />
    </div>
  );
}
