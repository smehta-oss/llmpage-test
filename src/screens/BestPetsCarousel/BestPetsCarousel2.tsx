import React from "react";
import { Button } from "../../components/ui/button";
import { CarouselCard2, CarouselCard3, CarouselCard4 } from "./components";

export const BestPetsCarousel2 = (): JSX.Element => {

  return (
    <section className="bg-white pb-8">
      {/* Responsive container with proper padding */}
          <div className="mx-auto px-5 sm:px-6 md:px-8 lg:px-[90px] max-w-[1440px] min-w-[378px]">
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-5">
          {/* Header spans full width (12 columns) */}
          <div className="col-span-6 sm:col-span-8 md:col-span-10 lg:col-span-12">
            <header className="flex flex-col items-center gap-2 mb-4 max-w-[976px] mx-auto">
              <h2 className="font-schnyder-bold text-[56px] leading-[64px] text-center" style={{
                color: 'black',
                fontFamily: 'Schnyder S',
                fontWeight: '700',
                wordWrap: 'break-word'
              }}>
                The Best Pet Insurance Plans of 2025
              </h2>

              <p className="w-full [font-family:'Work_Sans',Helvetica] font-normal text-[#606f7f] text-sm sm:text-base tracking-[0] leading-[1.6] text-center">
                We reviewed 900,024 pet insurance rates across the U.S to provide you with a comprehensive report covering 34 categories and surveying 2,600 pet parents covering 300 breeds.
              </p>
            </header>
          </div>

          {/* Explore button and Cards container */}
          <div className="col-span-6 sm:col-span-8 md:col-span-10 lg:col-span-12">
            <div className="flex flex-col items-center gap-4">
              {/* Cards container - responsive carousel */}
              <div 
                className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-5 scroll-smooth scrollbar-hide py-2 px-2 -mx-2 justify-center w-full"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch' // Better mobile scrolling
              }}
            >
              <CarouselCard4 />
              <CarouselCard2 />
              <CarouselCard3 />
            </div>
            
            {/* Explore on your own button */}
            <div style={{padding: '16px 24px', background: 'black', borderRadius: 40, justifyContent: 'center', alignItems: 'center', display: 'inline-flex', cursor: 'pointer'}}>
              <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--color-white-solid, white)', fontSize: 18, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '18px', wordWrap: 'break-word'}}>Explore on your own</div>
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
