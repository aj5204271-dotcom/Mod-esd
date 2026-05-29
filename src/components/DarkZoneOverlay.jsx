export default function DarkZoneOverlay() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl border border-red-500/40 bg-zinc-950 shadow-2xl overflow-hidden">
        <div className="relative p-6 border-b border-red-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent" />
          <h1 className="text-3xl font-black tracking-widest text-red-500">
            DARK ZONE
          </h1>
          <p className="text-zinc-400 text-sm mt-1 tracking-wide">
            Underground Gaming Overlay
          </p>
        </div>

        <div className="p-6 space-y-4">
          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 flex items-center justify-between">
            <div>
              <p className="text-zinc-400 text-xs uppercase tracking-widest">
                Status
              </p>
              <h2 className="text-xl font-bold text-green-400">
                Connected
              </h2>
            </div>
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4">
              <p className="text-zinc-500 text-xs uppercase tracking-widest">
                FPS
              </p>
              <h3 className="text-2xl font-black mt-2">90</h3>
            </div>

            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4">
              <p className="text-zinc-500 text-xs uppercase tracking-widest">
                Ping
              </p>
              <h3 className="text-2xl font-black mt-2 text-red-500">12ms</h3>
            </div>
          </div>

          <div className="rounded-2xl bg-zinc-900 border border-red-500/30 p-4">
            <p className="text-red-500 text-xs uppercase tracking-widest mb-3">
              Features
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Custom Overlay</span>
                <span className="text-green-400">ON</span>
              </div>

              <div className="flex justify-between">
                <span>Gaming HUD</span>
                <span className="text-green-400">ACTIVE</span>
              </div>

              <div className="flex justify-between">
                <span>Streamer Mode</span>
                <span className="text-green-400">READY</span>
              </div>
            </div>
          </div>

          <button className="w-full rounded-2xl bg-red-600 hover:bg-red-500 transition-all py-4 font-black tracking-widest shadow-lg shadow-red-900/40">
            ENTER DARK ZONE
          </button>
        </div>
      </div>
    </div>
  );
}