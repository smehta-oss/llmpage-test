import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = "" }) => (
  <h2 
    className={`text-black text-[32px] font-bold leading-[39px] font-schnyder-bold ${className}`}
    style={{ fontFamily: 'Schnyder S', fontWeight: 700 }}
  >
    {children}
  </h2>
);
