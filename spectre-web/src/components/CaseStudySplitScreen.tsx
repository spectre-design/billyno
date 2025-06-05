import React from "react";

interface CaseStudySplitScreenProps {
  children: React.ReactNode; // MDX content
  prototype: React.ReactNode; // Mobile prototype
}

export default function CaseStudySplitScreen({ children, prototype }: CaseStudySplitScreenProps) {
  return (
    <section
      className="w-full max-w-screen-2xl mx-auto px-4 py-12 grid grid-cols-1 xl:grid-cols-2 gap-8 min-h-[80vh]"
      style={{ minWidth: "320px" }}
    >
      {/* Left: MDX Content */}
      <div className="flex flex-col justify-center max-w-xl mx-auto xl:mx-0">
        {children}
      </div>
      {/* Right: iPhone Frame */}
      <div className="flex justify-center items-center">
        <div
          className="relative bg-black rounded-[48px] shadow-2xl overflow-hidden flex items-center justify-center border-[8px] border-[#222]"
          style={{
            width: "430px",
            height: "932px",
            maxWidth: "90vw",
            maxHeight: "80vh",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          }}
          aria-label="iPhone 15 Pro Max frame"
        >
          {/* Safe area insets */}
          <div
            className="absolute top-[59px] left-0 right-0 bottom-[34px] bg-white rounded-[48px] overflow-hidden"
            style={{
              left: 0,
              right: 0,
              top: "59px",
              bottom: "34px",
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              {prototype}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 