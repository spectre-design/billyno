import React from "react";
import { FinalDesignShowcase } from "./CheqHomeScreen/final-design-showcase";

export default function CheqHomeScreen() {
  return (
    <div className="bg-[#F7F9FB] flex flex-col items-center justify-start" style={{ width: 430, height: 932, borderTopLeftRadius: 40, borderTopRightRadius: 40, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, boxShadow: '0 8px 32px rgba(0,0,0,0.10)', border: '1.5px solid #E5E7EB' }}>
      <FinalDesignShowcase />
    </div>
  );
} 