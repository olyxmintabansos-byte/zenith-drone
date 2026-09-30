'use client';

import { useState } from 'react';

const FPVHUDSVG = ({ altitude, battery }: { altitude: number; battery: number }) => {
  const battColor = battery > 50 ? '#eab308' : battery > 20 ? '#f59e0b' : '#ef4444';
  return (
    <svg viewBox="0 0 280 220" className="w-full h-full">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#eab308" strokeWidth="0.3" opacity="0.2"/>
        </pattern>
      </defs>
      <rect width="280" height="220" fill="url(#grid)"/>
      
      <line x1="0" y1="110" x2="280" y2="110" stroke="#eab308" strokeWidth="1" opacity="0.4"/>
      <line x1="140" y1="0" x2="140" y2="220" stroke="#eab308" strokeWidth="1" opacity="0.4"/>
      
      <circle cx="140" cy="110" r="40" fill="none" stroke="#eab308" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="140" cy="110" r="3" fill="#eab308"/>
      <line x1="125" y1="110" x2="155" y2="110" stroke="#eab308" strokeWidth="2"/>
      <line x1="140" y1="95" x2="140" y2="125" stroke="#eab308" strokeWidth="2"/>
      
      <text x="10" y="20" fontSize="10" fill="#eab308" fontFamily="monospace">ALT: {altitude}m</text>
      <text x="10" y="35" fontSize="10" fill={battColor} fontFamily="monospace">BAT: {battery}%</text>
      <text x="10" y="50" fontSize="10" fill="#eab308" fontFamily="monospace">MODE: FPV</text>
      
      <rect x="230" y="10" width="40" height="80" fill="none" stroke="#eab308" strokeWidth="1" opacity="0.5"/>
      <rect x="230" y={(90 - battery * 0.8)} width="40" height={battery * 0.8} fill={battColor} opacity="0.6"/>
      
      <text x="140" y="210" textAnchor="middle" fontSize="9" fill="#eab308" opacity="0.7">8K REC ACTIVE</text>
    </svg>
  );
};

const GlobalMaisonBar = ({ onCartOpen }: { onCartOpen: () => void }) => (
  <div className="border-b sticky top-0 z-40" style={{borderColor:'rgba(234,179,8,0.2)',background:'#11141a'}}>
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-sm font-mono"><span className="font-bold" style={{color:'#eab308'}}>OLYX</span><span style={{color:'rgba(234,179,8,0.4)'}} className="mx-2">//</span><span style={{color:'#ffffff',fontSize:'0.75rem'}}>MAISONS</span></div>
      <button onClick={onCartOpen} style={{color:'#eab308'}} className="text-sm font-mono">CART</button>
    </div>
  </div>
);

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <>
    {isOpen && <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />}
    <div className={`fixed right-0 top-0 h-screen w-96 transform transition z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{background:'#11141a',borderLeft:'1px solid rgba(234,179,8,0.3)'}}>
      <div className="p-6"><h2 className="text-2xl mb-4 font-mono font-bold" style={{color:'#eab308'}}>CART</h2><p className="text-sm font-mono" style={{color:'rgba(255,255,255,0.4)'}}>Empty.</p></div>
    </div>
  </>
);

export default function ZenithHome() {
  const [cartOpen, setCartOpen] = useState(false);
  const [altitude, setAltitude] = useState(50);
  const [battery, setBattery] = useState(85);
  const [flightMode, setFlightMode] = useState('sport');
  const [gimbalType, setGimbalType] = useState('3axis');

  const modes = [
    { id: 'sport', name: 'Sport', speed: '73 km/h' },
    { id: 'normal', name: 'Normal', speed: '50 km/h' },
    { id: 'cinematic', name: 'Cinematic', speed: '28 km/h' },
  ];

  const specs = [
    { label: 'Camera', value: '8K 60fps cinema' },
    { label: 'Sensor', value: '1-inch Bayer' },
    { label: 'Flight Time', value: '23 minutes max' },
    { label: 'Max Speed', value: '73 km/h' },
    { label: 'Transmission', value: 'OcuSync 3.0 FHD' },
    { label: 'Airframe', value: 'Carbon <250g' },
    { label: 'Obstacle', value: 'Omni-directional' },
    { label: 'Battery', value: '2250 mAh hot-swap' }
  ];

  const calcFlightTime = () => Math.round(23 * (battery / 100));

  return (
    <main style={{background:'#11141a',minHeight:'100vh',color:'#ffffff'}}>
      <GlobalMaisonBar onCartOpen={() => setCartOpen(true)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-mono font-bold mb-2 leading-tight" style={{color:'#eab308'}}>ZENITH</h1>
          <h2 className="text-xl mb-6 font-mono" style={{color:'rgba(234,179,8,0.7)'}}>8K Foldable Drone</h2>
          <p className="text-lg mb-8" style={{color:'rgba(255,255,255,0.6)',lineHeight:1.8}}>Aerospace carbon fiber sub-250g. 8K 60fps cinema sensor with 3-axis gimbal stabilization. OcuSync 3.0 FHD transmission. 23-minute flight envelope.</p>
          <div className="flex gap-6 items-center mb-12">
            <div><div className="text-3xl font-mono font-bold" style={{color:'#eab308'}}>$2,290</div><div className="text-sm font-mono" style={{color:'rgba(255,255,255,0.3)'}}>Rp 35.800.000 / €2,125</div></div>
            <button onClick={() => setCartOpen(true)} className="px-8 py-3 font-mono font-bold" style={{background:'#eab308',color:'#11141a'}}>ADD TO CART</button>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded" style={{background:'rgba(234,179,8,0.08)',border:'1px solid rgba(234,179,8,0.2)'}}>
              <label className="block text-sm mb-2 font-mono" style={{color:'#eab308'}}>Altitude: {altitude}m</label>
              <input type="range" min="0" max="120" value={altitude} onChange={(e) => setAltitude(parseInt(e.target.value))} className="w-full" />
            </div>
            <div className="p-4 rounded" style={{background:'rgba(234,179,8,0.08)',border:'1px solid rgba(234,179,8,0.2)'}}>
              <label className="block text-sm mb-2 font-mono" style={{color:'#eab308'}}>Battery: {battery}% — {calcFlightTime()}min flight time</label>
              <input type="range" min="0" max="100" value={battery} onChange={(e) => setBattery(parseInt(e.target.value))} className="w-full" />
            </div>
            <div className="p-4 rounded" style={{background:'rgba(234,179,8,0.08)',border:'1px solid rgba(234,179,8,0.2)'}}>
              <label className="block text-sm mb-3 font-mono" style={{color:'#eab308'}}>Flight Mode</label>
              <div className="grid grid-cols-3 gap-2">
                {modes.map((m) => (
                  <button key={m.id} onClick={() => setFlightMode(m.id)} className="px-3 py-2 text-xs font-mono transition" style={{background: flightMode === m.id ? 'rgba(234,179,8,0.3)' : 'rgba(234,179,8,0.1)',border:'1px solid rgba(234,179,8,0.3)',color:'#eab308'}}>
                    {m.name}<br/><span style={{fontSize:'0.65rem',opacity:0.7}}>{m.speed}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="aspect-square rounded flex items-center justify-center" style={{background:'#000000',border:'1px solid rgba(234,179,8,0.3)'}}>
          <FPVHUDSVG altitude={altitude} battery={battery} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-mono font-bold mb-12" style={{color:'#eab308'}}>TECHNICAL SPECS</h2>
        <div className="grid grid-cols-4 gap-4">{specs.map((s, i) => (
          <div key={i} className="p-4 rounded font-mono" style={{border:'1px solid rgba(234,179,8,0.2)',background:'rgba(234,179,8,0.03)'}}>
            <div className="text-xs mb-1" style={{color:'#eab308'}}>{s.label}</div>
            <div className="text-sm" style={{color:'#ffffff'}}>{s.value}</div>
          </div>
        ))}</div>
      </section>

      <footer className="py-8" style={{borderTop:'1px solid rgba(234,179,8,0.2)'}}>
        <div className="max-w-7xl mx-auto px-6 text-center text-xs font-mono" style={{color:'rgba(255,255,255,0.3)'}}>ZENITH / Aerospace carbon drones since 2024</div>
      </footer>
    </main>
  );
}
