import React, { useEffect, useRef } from "react";

export const CustomNavigationSection = (): JSX.Element => {
  const subHeaderRef = useRef<HTMLDivElement>(null);
  
  const navigationItems = [
    "All Insurance",
    "Car Insurance", 
    "Travel Insurance",
    "Pet Insurance",
    "Life Insurance",
    "Home Insurance",
    "Renters Insurance",
    "Business Insurance",
    "Health Insurance",
  ];

  const getFontSize = (itemName: string) => {
    switch (itemName) {
      case "All Insurance": return "text-[13.89px]";
      case "Car Insurance": return "text-[13.67px]";
      case "Health Insurance": return "text-[13.67px]";
      default: return "text-[13.56px]";
    }
  };

  useEffect(() => {
    const updateSubHeaderConstraints = () => {
      if (subHeaderRef.current) {
        const subHeader = subHeaderRef.current;
        const parentElement = subHeader.parentElement;
        
        if (parentElement) {
          const parentRect = parentElement.getBoundingClientRect();
          subHeader.style.width = parentRect.width + 'px';
          subHeader.style.left = parentRect.left + 'px';
          subHeader.style.right = 'auto';
        }
      }
    };

    // Update on mount
    updateSubHeaderConstraints();

    // Update on window resize
    window.addEventListener('resize', updateSubHeaderConstraints);
    
    // Update on scroll (in case parent position changes)
    window.addEventListener('scroll', updateSubHeaderConstraints);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('resize', updateSubHeaderConstraints);
      window.removeEventListener('scroll', updateSubHeaderConstraints);
    };
  }, []);

  return (
    <div 
      ref={subHeaderRef}
      className="sub-header-nav fixed top-14 w-full z-[2] py-px bg-white border-t border-b border-[#EDEDED] flex items-center overflow-hidden"
    >
      {/* Container that matches the main content width constraints */}
      <div className="w-full max-w-[1440px] min-w-[378px] mx-auto px-5 sm:px-6 md:px-8 lg:px-[90px] flex items-center overflow-hidden">
        {/* Fixed Insurance Title */}
        <div className="flex-shrink-0 pr-3 sm:pr-[21px] border-r border-[#D7DCE5] flex items-center h-full min-w-0">
          <div className="text-[#1E2125] text-lg sm:text-xl md:text-2xl font-inter font-semibold leading-[29px] whitespace-nowrap">
            Insurance
          </div>
        </div>
        
        {/* Scrollable Navigation Links */}
        <div 
          className="flex-1 overflow-x-auto scrollbar-hide min-w-0"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex items-start gap-3 sm:gap-4 md:gap-6 pl-3 sm:pl-4 md:pl-6 min-w-max">
          {navigationItems.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="py-[18px] px-2 bg-white flex items-center cursor-pointer hover:bg-gray-50 transition-colors">
                <div className={`text-black ${getFontSize(item)} font-graphik font-normal capitalize leading-4 whitespace-nowrap`}>
                  {item}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};