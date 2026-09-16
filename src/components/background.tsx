/** Fixed, non-interactive backdrop: dot grid, two drifting colour blobs, grain. */
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="dot-grid absolute inset-0" />
      <div
        className="animate-float absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-[70%] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--blob-1), transparent 70%)" }}
      />
      <div
        className="animate-float-slow absolute -top-20 left-1/2 h-[36rem] w-[36rem] translate-x-[5%] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--blob-2), transparent 70%)" }}
      />
      <div className="noise absolute inset-0" />
    </div>
  );
}
