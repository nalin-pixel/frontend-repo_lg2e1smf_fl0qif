import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  const sceneRef = useRef(null);
  const textRef = useRef(null);
  const [enableParallax, setEnableParallax] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setEnableParallax(window.innerWidth >= 768); // no parallax on mobile
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!enableParallax) return;
    const onScroll = () => {
      const y = window.scrollY || 0;
      const slow = y * 0.3; // obelisk moves slower than text → feels heavy
      if (sceneRef.current) {
        sceneRef.current.style.transform = `translateY(${slow}px)`;
      }
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${y * 0.6}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [enableParallax]);

  const scrollToCalendly = () => {
    const el = document.getElementById('calendly');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#2D3741' }}>
      {/* Header with monochrome obelisk mark */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-10 py-5 text-white">
        <div className="flex items-center gap-3" aria-label="Luxury Verticalised">
          <ObeliskLogo className="h-8 w-8" />
          <span className="sr-only">Luxury Verticalised</span>
        </div>
        <div className="text-[10px] tracking-widest uppercase opacity-70">Luxury Verticalised</div>
      </div>

      {/* 3D Spline Scene */}
      <div ref={sceneRef} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient for readability without blocking interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Hero Copy */}
      <div ref={textRef} className="relative z-30 mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6 md:px-10 text-white">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight">Upward, onward, only.</h1>
        <p className="mt-4 max-w-xl text-base md:text-lg text-white/80">We move luxury inventory before gravity notices.</p>
        <div className="mt-8">
          <button
            onClick={scrollToCalendly}
            className="group inline-flex items-center gap-3 rounded-full border px-6 py-3 text-sm md:text-base"
            style={{
              borderColor: '#FFFFFF',
              color: '#FFFFFF',
              boxShadow: '0 0 0 0 rgba(192,178,131,0)',
              transition: 'box-shadow 200ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 8px 0 #C0B283';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 0 rgba(192,178,131,0)';
            }}
            aria-label="Book the Phalanx"
          >
            <span>Book the Phalanx</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function ObeliskLogo({ className = '' }) {
  // Minimal single-stroke obelisk with 1° lean and small TM
  return (
    <div className={className}>
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <path d="M32 3 L40 9 L40 60 L24 60 L24 9 Z" stroke="#FFFFFF" strokeWidth="2" />
        {/* LV voids */}
        <path d="M28 18 L28 48" stroke="#FFFFFF" strokeWidth="2" />
        <path d="M36 18 L30 24" stroke="#FFFFFF" strokeWidth="2" />
      </svg>
      <div className="-mt-1 text-[8px] text-white opacity-80">TM</div>
    </div>
  );
}
