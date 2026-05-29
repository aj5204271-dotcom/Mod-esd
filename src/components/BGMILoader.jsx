export default function BGMILoader() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl border border-blue-500/40 bg-zinc-950 shadow-2xl overflow-hidden">
        <div className="relative p-8 border-b border-blue-500/20 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent" />
          <h1 className="text-4xl font-black tracking-widest text-blue-500">
            BGMI
          </h1>
          <p className="text-zinc-400 text-sm mt-2 tracking-wide">
            Battlegrounds Mobile India
          </p>
        </div>

        <div className="p-8 space-y-6">
          {/* Loading Bar */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-zinc-400 text-xs uppercase tracking-widest">
                Loading Resources
              </p>
              <span className="text-blue-400 text-sm font-bold">85%</span>
            </div>
            <div className="w-full h-3 bg-zinc-900 rounded-full border border-zinc-800 overflow-hidden">
              <div className="h-full w-[85%] bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-lg shadow-blue-500/50 animate-pulse" />
            </div>
          </div>

          {/* Loading Status */}
          <div className="rounded-2xl bg-zinc-900 border border-blue-500/30 p-4 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <p className="text-zinc-300 text-sm">Initializing Game Engine...</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: "0.2s" }} />
              <p className="text-zinc-300 text-sm">Loading Maps & Assets...</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: "0.4s" }} />
              <p className="text-zinc-300 text-sm">Connecting to Server...</p>
            </div>
          </div>

          {/* Game Info Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 text-center">
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">
                Players Online
              </p>
              <h3 className="text-2xl font-black text-blue-400">2.4M</h3>
            </div>

            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 text-center">
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">
                Servers
              </p>
              <h3 className="text-2xl font-black text-green-400">Online</h3>
            </div>
          </div>

          {/* Animated Spinner */}
          <div className="flex justify-center py-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-zinc-800 rounded-full" />
              <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-blue-400 rounded-full animate-spin" />
            </div>
          </div>

          {/* Enter Button */}
          <button className="w-full rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all py-3 font-black tracking-widest shadow-lg shadow-blue-900/40">
            ENTER BATTLEGROUND
          </button>

          {/* Tips */}
          <p className="text-center text-zinc-500 text-xs">
            Pro Tip: Land on Pochinki or School for quick action! 🎮
          </p>
        </div>
      </div>
    </div>
  );
}