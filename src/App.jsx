import React from 'react';
import HeroSection from './components/HeroSection';
import ServiceStack from './components/ServiceStack';
import VisualProof from './components/VisualProof';
import TeamPhalanx from './components/TeamPhalanx';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#2D3741] text-white antialiased">
      <HeroSection />
      <ServiceStack />
      <VisualProof />
      <TeamPhalanx />
      <FooterCTA />
    </div>
  );
}
