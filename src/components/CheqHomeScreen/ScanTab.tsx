import React, { useState } from "react";
import { X, Zap, Image as ImageIcon, CheckCircle2 } from "lucide-react";

const cornerClass = "absolute w-6 h-6 border-[#E95B2F]";
const borderThickness = "border-4";

const ScanTab: React.FC = () => {
  const [scanned, setScanned] = useState(false);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl overflow-hidden flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-4 absolute top-0 left-0 right-0 z-20 bg-black/40 backdrop-blur-md">
        <button className="text-white" aria-label="Close scan">
          <X className="w-6 h-6" />
        </button>
        <span className="text-white font-semibold text-lg tracking-wide">Scan QR Code</span>
        <div className="w-6" />
      </div>

      {/* Camera Preview Placeholder (soft gradient) */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Scan Area */}
        <div className="absolute left-1/2 top-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 z-20">
          {/* Main scan area background */}
          <div className="absolute inset-0 rounded-2xl bg-black/60 shadow-[0_0_32px_8px_rgba(255,107,0,0.10)]" />
          {/* Corner accents - only at corners, no overlap */}
          <div className={`${cornerClass} ${borderThickness} rounded-tl-2xl top-0 left-0 border-t-4 border-l-4 border-b-0 border-r-0`} />
          <div className={`${cornerClass} ${borderThickness} rounded-tr-2xl top-0 right-0 border-t-4 border-r-4 border-b-0 border-l-0`} />
          <div className={`${cornerClass} ${borderThickness} rounded-bl-2xl bottom-0 left-0 border-b-4 border-l-4 border-t-0 border-r-0`} />
          <div className={`${cornerClass} ${borderThickness} rounded-br-2xl bottom-0 right-0 border-b-4 border-r-4 border-t-0 border-l-0`} />
          {/* Subtle white border for the whole area - always visible */}
          <div className="absolute inset-0 rounded-2xl border-2 border-white/80 pointer-events-none" />
          {/* Animated scan line (moves up and down) */}
          {!scanned && (
            <div className="absolute left-4 right-4 h-1.5 bg-gradient-to-r from-[#E95B2F] via-[#E95B2F] to-[#E95B2F] rounded-full shadow-lg animate-scanline-glow" />
          )}
          {/* Feedback */}
          {scanned && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-40">
              <CheckCircle2 className="text-green-400 w-20 h-20 animate-pulse mb-2" />
              <span className="text-white text-lg font-bold">Scan Successful</span>
            </div>
          )}
        </div>
      </div>

      {/* Simulate Scan Button */}
      {!scanned && (
        <button
          onClick={() => setScanned(true)}
          aria-label="Simulate scan"
          className="absolute left-1/2 top-[72%] -translate-x-1/2 bg-[#E95B2F] hover:bg-[#d14e28] active:scale-95 transition text-white font-bold rounded-full px-8 py-3 shadow-lg z-30 focus:outline-none focus:ring-2 focus:ring-[#E95B2F]"
        >
          Simulate Scan
        </button>
      )}

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-10 py-6 z-20 bg-black/40 backdrop-blur-md rounded-b-2xl">
        <button
          className="bg-black/60 rounded-full p-3 text-white shadow hover:bg-orange-500 active:scale-95 transition focus:outline-none focus:ring-2 focus:ring-orange-400"
          aria-label="Toggle flashlight"
        >
          <Zap className="w-6 h-6" />
        </button>
        <button
          className="bg-black/60 rounded-full p-3 text-white shadow hover:bg-orange-500 active:scale-95 transition focus:outline-none focus:ring-2 focus:ring-orange-400"
          aria-label="Open gallery"
        >
          <ImageIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ScanTab; 