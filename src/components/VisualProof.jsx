export default function VisualProof() {
  return (
    <section style={{ backgroundColor: '#2D3741' }} className="w-full py-16 md:py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextureCard title="60× micro-edge still (metal card)">
            <MicroEdgeTexture />
          </TextureCard>
          <TextureCard title="UV-blink still (365 nm light)">
            <UVBlinkTexture />
          </TextureCard>
        </div>
        <p className="mt-6 text-center text-white/80">Micro-serial edge — microscope-proof authenticity.</p>
      </div>
    </section>
  );
}

function TextureCard({ title, children }) {
  return (
    <div className="w-full overflow-hidden rounded-xl" style={{ border: '1px solid #FFFFFF' }}>
      <div className="aspect-[16/10] w-full bg-black/40">
        {children}
      </div>
      <div className="border-t border-white/30 px-4 py-3 text-sm text-white/80">{title}</div>
    </div>
  );
}

function MicroEdgeTexture() {
  // CSS-only metallic micro-edge impression
  return (
    <div className="h-full w-full relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/5 to-transparent" />
      <div className="absolute inset-0" style={{
        backgroundImage:
          'repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 3px)'
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 4px)'
      }} />
      <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.6)' }} />
    </div>
  );
}

function UVBlinkTexture() {
  // CSS-only UV blink impression
  return (
    <div className="h-full w-full relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a]" />
      <div className="absolute inset-0 opacity-80" style={{
        backgroundImage:
          'radial-gradient(circle at 30% 40%, rgba(167, 199, 231, 0.35), transparent 35%), radial-gradient(circle at 70% 60%, rgba(167, 199, 231, 0.25), transparent 40%)'
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage:
          'repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 6px)'
      }} />
      <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 80px rgba(0,0,0,0.7)' }} />
    </div>
  );
}
