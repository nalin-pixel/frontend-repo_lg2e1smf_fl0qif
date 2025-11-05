export default function TeamPhalanx() {
  return (
    <section style={{ backgroundColor: '#2D3741' }} className="w-full py-16 md:py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <HelmCard title="Strategos" subtitle="Vision lock, outcome owner" />
          <HelmCard title="Front-End" subtitle="190 k followers, 0.87 % CPAHR" />
          <HelmCard title="Voice" subtitle="1.2 M words, zero re-writes" />
          <HelmCard title="Pixel" subtitle="47 walk-throughs, zero re-renders" />
        </div>
      </div>
    </section>
  );
}

function HelmCard({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center rounded-xl p-6" style={{ border: '1px solid #FFFFFF' }}>
      <HelmetSVG className="h-20 w-20 mb-4" />
      <h3 className="text-lg font-normal">{title}</h3>
      <p className="mt-2 text-center text-sm text-white/80">{subtitle}</p>
    </div>
  );
}

function HelmetSVG({ className = '' }) {
  // Minimal no-face helmet silhouette (single stroke) to respect anonymity
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 36 C8 20 20 8 32 8 C44 8 56 20 56 36 L56 52 L8 52 Z" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M12 40 L52 40" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M24 40 L24 52" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M40 40 L40 52" stroke="#FFFFFF" strokeWidth="2" />
    </svg>
  );
}
