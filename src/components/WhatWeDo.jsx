export default function WhatWeDo() {
  return (
    <section style={{ backgroundColor: '#2D3741' }} className="w-full py-16 md:py-24 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-10">
        <div className="space-y-4 text-lg leading-relaxed">
          <Line>We don’t sell square-metres.</Line>
          <Line>We clarify ascent.</Line>
          <Line>Experience first, signature second.</Line>
        </div>
        <div className="space-y-4 text-lg leading-relaxed md:text-right">
          <Line>Inventory &gt; ₹5 Cr</Line>
          <Line>Sold before crane stops.</Line>
          <Line>Outcome-contract: 20 % fee at-risk.</Line>
        </div>
      </div>
    </section>
  );
}

function Line({ children }) {
  return (
    <p className="text-white/90">{children}</p>
  );
}
