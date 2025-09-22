import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { useCarousel } from "../../hooks/useCarousel";
import { CarouselCard1, CarouselCard2, CarouselCard3, CarouselCard4, CarouselCard5 } from "./components";

export const BestPetsCarousel = (): JSX.Element => {
  const CARD_WIDTH = 312 + 20; // card width + gap
  const TOTAL_CARDS = 5; // Total number of individual card components
  
  const {
    carouselRef,
    currentIndex,
    scrollToNext,
    scrollToPrev,
    maxScrollIndex,
    paginationDots
  } = useCarousel({
    cardWidth: CARD_WIDTH,
    itemCount: TOTAL_CARDS
  });

  return (
    <section className="bg-white pt-8 sm:pt-12 md:pt-14 pb-6 sm:pb-8 overflow-hidden">
      {/* Responsive container with proper padding */}
      <div className="mx-auto px-5 sm:px-6 md:px-8 lg:px-[90px] max-w-[1440px] min-w-[378px]">
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-5">
          {/* Header spans full width (12 columns) */}
          <div className="col-span-6 sm:col-span-8 md:col-span-10 lg:col-span-12">
            <header className="flex flex-col items-start gap-2 mb-6 sm:mb-8 md:mb-10">
              <h2 className="font-schnyder-bold text-[32px] sm:text-[32px] md:text-[32px] lg:text-[40px] leading-[39px] sm:leading-[39px] md:leading-[39px] lg:leading-[48px]" style={{
                color: 'black',
                fontFamily: 'Schnyder S',
                fontWeight: '700',
                wordWrap: 'break-word'
              }}>
                The Best Pet Insurance Plans of 2025
              </h2>

              <p className="w-full [font-family:'Work_Sans',Helvetica] font-normal text-[#606f7f] text-sm sm:text-base tracking-[0] leading-[1.6]">
                Understanding what each provider is best at is essential in choosing
                the best plan for your pet.
              </p>
            </header>
          </div>

          {/* Cards container - responsive carousel */}
          <div className="col-span-6 sm:col-span-8 md:col-span-10 lg:col-span-12">
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-5 scroll-smooth scrollbar-hide"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch' // Better mobile scrolling
              }}
            >
              <CarouselCard4 />
              <CarouselCard2 />
              <CarouselCard3 />
              <CarouselCard1 />
              <CarouselCard5 />
            </div>
          </div>

          {/* Bottom section with CTA and navigation */}
          <div className="col-span-6 sm:col-span-8 md:col-span-10 lg:col-span-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              <Button className="group flex flex-col w-full md:w-auto md:min-w-[400px] lg:w-[610px] items-center gap-2.5 pt-4 sm:pt-5 pb-0 px-2 sm:px-0 relative bg-[#ffffffcc] rounded-lg overflow-hidden border-[none] shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:transition-all before:duration-300 before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] group-hover:before:[background:linear-gradient(90deg,rgba(0,122,200,1)_0%,rgba(255,177,54,1)_50%,rgba(220,0,0,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none h-auto hover:bg-[#ffffffcc]">
                <div className="flex items-center justify-center gap-6 sm:gap-12 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 pt-0 pb-3 sm:pb-4 px-2 sm:px-4 relative flex-[0_0_auto]">
                    <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Work_Sans',Helvetica] font-normal text-black text-sm sm:text-base tracking-[0] leading-6 whitespace-nowrap">
                      Find me the right option
                    </span>

                    <ArrowRightIcon className="relative w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </Button>

              <nav className="flex items-center gap-3 sm:gap-4">
                <Button 
                  onClick={scrollToPrev}
                  disabled={currentIndex === 0}
                  className="flex w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] items-center justify-center gap-2 p-0 relative bg-[#f4f5f8] rounded-full backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] disabled:opacity-50 text-black hover:text-white"
                >
                  <ChevronLeftIcon className="relative w-5 h-5 sm:w-6 sm:h-6 ml-[-2px] sm:ml-[-3px] mr-[-2px] sm:mr-[-3px]" />
                </Button>

                <div className="inline-flex h-[40px] sm:h-[50px] items-center gap-2 px-3 sm:px-4 py-2 relative flex-[0_0_auto] bg-[#f4f5f8] rounded-[40px] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]">
                  {paginationDots.map((dot, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${dot.bgClass}`}
                    />
                  ))}
                </div>

                <Button 
                  onClick={scrollToNext}
                  disabled={currentIndex >= maxScrollIndex}
                  className="flex w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] items-center justify-center gap-2 p-0 relative bg-[#f4f5f8] rounded-full backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] disabled:opacity-50 text-black hover:text-white"
                >
                  <ChevronRightIcon className="relative w-5 h-5 sm:w-6 sm:h-6 ml-[-2px] sm:ml-[-3px] mr-[-2px] sm:mr-[-3px]" />
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-10">
        <div style={{width: '100%', height: '1px', backgroundColor: '#ECEFF3'}} />
      </div>
    </section>
  );
};