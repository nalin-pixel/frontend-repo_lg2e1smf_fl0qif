export default function ServiceStack() {
  return (
    <section style={{ backgroundColor: '#2D3741' }} className="w-full py-16 md:py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Live-Impact Broadcasting">
            <p className="text-sm text-white/80">4K drone + Vision Pro → donor watches relief in real time.</p>
          </Card>
          <Card title="Blockchain Ledger">
            <p className="text-sm text-white/80">Every rupee → smart-contract → milestone unlock → zero leakage.</p>
          </Card>
          <Card title="Heartbeat Signature">
            <p className="text-sm text-white/80">11-second close, biometric thumb + pulse, zero paper.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div
      className="rounded-xl p-6 md:p-8 h-full"
      style={{ border: '1px solid #FFFFFF' }}
    >
      <h3 className="mb-3 text-lg md:text-xl font-normal">{title}</h3>
      {children}
    </div>
  );
}
