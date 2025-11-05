import HeroSection from './components/HeroSection';
import WhatWeDo from './components/WhatWeDo';
import ServiceStack from './components/ServiceStack';
import VisualProof from './components/VisualProof';
import TeamPhalanx from './components/TeamPhalanx';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#2D3741', color: '#FFFFFF', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
      <HeroSection />
      <WhatWeDo />
      <ServiceStack />
      <VisualProof />
      <TeamPhalanx />
      <FooterCTA />
    </div>
  );
}
