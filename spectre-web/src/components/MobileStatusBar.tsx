import React from "react";
import { Wifi, Signal, BatteryFull } from "lucide-react";

export default function MobileStatusBar({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const isDark = theme === "dark";
  return (
    <div
      className={`flex items-center justify-between w-full px-6 pt-4 pb-2 text-xs font-semibold select-none ${isDark ? "text-white/80" : "text-[#222]"}`}
    >
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <Wifi className={`w-4 h-4 ${isDark ? "text-white/60" : "text-[#222]/60"}`} />
        <Signal className={`w-4 h-4 ${isDark ? "text-white/60" : "text-[#222]/60"}`} />
        <span>100%</span>
        <BatteryFull className={`w-5 h-5 ml-1 ${isDark ? "text-white/60" : "text-[#222]/60"}`} />
      </div>
    </div>
  );
} 