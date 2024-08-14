import React from "react";

export default function HeaderWrapper({ children }) {
  return (
    <div className="min-h-full bg-white border-b-[1px] border-t-[1px] border-[#E5E7EB] sticky top-0 z-[100] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
      {children}
    </div>
  );
}
