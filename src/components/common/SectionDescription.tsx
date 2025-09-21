import React from "react";

interface SectionDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionDescription: React.FC<SectionDescriptionProps> = ({ 
  children, 
  className = "" 
}) => (
  <p 
    className={`text-[#606f7f] text-base leading-[26px] font-normal tracking-[0] ${className}`}
    style={{ fontFamily: 'Work Sans' }}
  >
    {children}
  </p>
);
