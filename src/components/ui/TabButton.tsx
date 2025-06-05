import React from "react";
import { cn } from "@/lib/utils";

interface TabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export function TabButton({ selected, disabled, className, children, ...props }: TabButtonProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      disabled={disabled}
      className={cn(
        "px-8 py-3 rounded-full font-semibold text-lg border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-seaDeep/70",
        selected
          ? "bg-blue-600 text-white border-seaDeep shadow-md border-4 border-red-500"
          : disabled
          ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
          : "bg-white text-seaDeep border-seaDeep hover:bg-seaDeep/10",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
} 