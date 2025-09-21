import React from "react";

interface TableCellProps {
  children: React.ReactNode;
  isHeader?: boolean;
  isProvider?: boolean;
  className?: string;
}

export const TableCell: React.FC<TableCellProps> = ({ 
  children, 
  isHeader = false, 
  isProvider = false, 
  className = "" 
}) => {
  const baseClasses = "px-2 py-3 border-[0.5px] border-[#cdced1] text-left";
  const headerClasses = isHeader ? "bg-[#ecf1ff] font-semibold text-[#333333]" : "bg-white";
  const providerClasses = isProvider ? "font-semibold text-[#007ac8] underline" : "font-normal text-[#6a6a6a]";
  
  const Tag = isHeader ? 'th' : 'td';
  
  return (
    <Tag className={`${baseClasses} ${headerClasses} ${providerClasses} ${className}`}>
      <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
        {children}
      </span>
    </Tag>
  );
};
