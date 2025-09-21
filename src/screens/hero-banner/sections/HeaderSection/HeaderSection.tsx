import React from "react";
import { Button } from "../../../../components/ui/button";
import { ForbesLogo, HamburgerIcon, MailIcon, SearchIcon } from "../../../../assets/icons";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="header-div flex z-[3] flex-col w-full h-14 items-start fixed top-0 left-0 bg-neutral-900 px-4 py-2">
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="w-full h-full flex items-center justify-between px-4">
          {/* Left section - Menu and Subscribe to Newsletters */}
          <div className="flex items-center gap-4">
            <HamburgerIcon />
            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-normal font-['Work_Sans']">
                Subscribe To Newsletters
              </span>
              <MailIcon />
            </div>
          </div>

          {/* Center section - Forbes logo */}
          <div className="flex items-center justify-center">
            <ForbesLogo />
          </div>

          {/* Right section - Subscribe button and Search */}
          <div className="flex items-center gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm font-semibold font-['Work_Sans']">
              Subscribe
            </Button>
            <SearchIcon />
          </div>
        </div>
      </div>
    </header>
  );
};