import { useEffect } from 'react';

export default function FooterCTA() {
  useEffect(() => {
    // nothing required; using iframe embed for Calendly for speed
  }, []);

  return (
    <footer id="calendly" style={{ backgroundColor: '#2D3741' }} className="w-full py-20 md:py-28 text-white">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-light">Book the Phalanx</h2>
        <p className="mt-3 text-white/80">3 slots this month, 1 left. One knock only.</p>

        {/* Calendly inline embed */}
        <div className="mt-10 w-full overflow-hidden rounded-xl" style={{ border: '1px solid #FFFFFF' }}>
          <iframe
            title="Calendly Scheduling"
            src="https://calendly.com/luxuryverticalised/strategos?hide_gdpr_banner=1"
            className="w-full"
            style={{ minHeight: '720px' }}
          />
        </div>

        <div className="mt-6 text-xs uppercase tracking-widest text-white/60">No second knock. No second slide.</div>

        {/* Minimal footer meta */}
        <div className="mt-10 flex items-center justify-between text-[10px] text-white/50">
          <span>Luxury Verticalised — Sold Before the Crane Stops</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
