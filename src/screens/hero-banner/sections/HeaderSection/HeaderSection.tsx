import React, { useEffect, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { ForbesLogo, HamburgerIcon, MailIcon, SearchIcon } from "../../../../assets/icons";

export const HeaderSection = (): JSX.Element => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeaderConstraints = () => {
      if (headerRef.current) {
        const header = headerRef.current;
        const parentElement = header.parentElement;
        
        if (parentElement) {
          const parentRect = parentElement.getBoundingClientRect();
          header.style.width = parentRect.width + 'px';
          header.style.left = parentRect.left + 'px';
          header.style.right = 'auto';
        }
      }
    };

    // Update on mount
    updateHeaderConstraints();

    // Update on window resize
    window.addEventListener('resize', updateHeaderConstraints);
    
    // Update on scroll (in case parent position changes)
    window.addEventListener('scroll', updateHeaderConstraints);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('resize', updateHeaderConstraints);
      window.removeEventListener('scroll', updateHeaderConstraints);
    };
  }, []);

  return (
    <header 
      ref={headerRef}
      className="header-div flex z-[3] flex-col w-full h-14 items-start fixed top-0 bg-neutral-900 py-2 overflow-hidden"
    >
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        {/* Container that matches the main content width constraints */}
        <div className="w-full max-w-[1440px] min-w-[378px] mx-auto px-5 sm:px-6 md:px-8 lg:px-[90px] h-full flex items-center justify-between overflow-hidden">
          {/* Left section - Menu, Forbes logo (mobile), and Subscribe to Newsletters (desktop) */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-shrink-0 min-w-0">
            <HamburgerIcon />
            
            {/* Forbes logo - visible on mobile/tablet (744px and below) */}
            <div className="flex items-center justify-center md:hidden flex-shrink-0">
              <ForbesLogo />
            </div>
            
            {/* Subscribe to Newsletters - hidden on mobile/tablet (744px and below) */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <span className="text-white text-sm font-normal font-['Work_Sans'] whitespace-nowrap">
                Subscribe To Newsletters
              </span>
              <MailIcon />
            </div>
          </div>

          {/* Center section - Forbes logo (desktop only) */}
          <div className="hidden md:flex items-center justify-center flex-1 min-w-0">
            <ForbesLogo />
          </div>

          {/* Right section - Subscribe button and Search */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-shrink-0 min-w-0">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-3 md:px-6 py-1 sm:py-2 text-xs sm:text-sm font-semibold font-['Work_Sans'] whitespace-nowrap">
              Subscribe
            </Button>
            <SearchIcon />
          </div>
        </div>
      </div>
    </header>
  );
};