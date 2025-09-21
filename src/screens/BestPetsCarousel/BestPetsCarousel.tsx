import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "lucide-react";
import React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { INSURANCE_PLANS } from "../../data/insurance-providers";
import { useCarousel } from "../../hooks/useCarousel";

export const BestPetsCarousel = (): JSX.Element => {
  const CARD_WIDTH = 312 + 20; // card width + gap
  
  const {
    carouselRef,
    currentIndex,
    scrollToNext,
    scrollToPrev,
    maxScrollIndex,
    paginationDots
  } = useCarousel({
    cardWidth: CARD_WIDTH,
    itemCount: INSURANCE_PLANS.length
  });

  return (
    <section className="bg-white pt-14 pb-8 overflow-hidden">
      {/* 12-column grid container with 90px margins and 20px gutters */}
      <div className="mx-auto px-[90px] max-w-[1440px]">
        <div className="grid grid-cols-12 gap-5">
          {/* Header spans full width (12 columns) */}
          <div className="col-span-12">
            <header className="flex flex-col items-start gap-2 mb-10">
              <h1 className="font-schnyder-bold" style={{
                color: 'black',
                fontSize: '40px',
                fontFamily: 'Schnyder S',
                fontWeight: '700',
                lineHeight: '48px',
                wordWrap: 'break-word'
              }}>
                The Best Pet Insurance Plans of 2025
              </h1>

              <p className="w-full [font-family:'Work_Sans',Helvetica] font-normal text-[#606f7f] text-base tracking-[0] leading-[26px]">
                Understanding what each provider is best at is essential in choosing
                the best plan for your pet.
              </p>
            </header>
          </div>

          {/* Cards container - responsive grid */}
          <div className="col-span-12">
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto gap-5 mb-10 scroll-smooth scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {INSURANCE_PLANS.map((plan, index) => (
                <div 
                  key={`plan-${index}`} 
                  className={cn("insurance-plan-card", {
                    "most-popular-card": plan.isPopular
                  })}
                  style={{
                    width: '100%',
                    paddingTop: '12px',
                    paddingBottom: '8px',
                    paddingLeft: '8px',
                    paddingRight: '8px',
                    position: 'relative',
                    background: plan.isPopular ? '#f3c0601a' : '#F8F8FA',
                    overflow: 'hidden',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    maxWidth: '312px',
                    flexShrink: 0,
                    ...(plan.isPopular && {
                      outline: '2px #F3C060 solid',
                      outlineOffset: '-2px',
                      backdropFilter: 'blur(2.0px) brightness(110%)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.40), inset 1px 0 0 rgba(255,255,255,0.32), inset 0 -1px 1px rgba(0,0,0,0.13), inset -1px 0 1px rgba(0,0,0,0.11)'
                    })
                  }}
                >
                  {plan.isPopular ? (
                    <div 
                      className="most-popular-title"
                      style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '9px', position: 'relative', alignSelf: 'stretch', width: '100%', flex: '0 0 auto', minHeight: '40px'}}
                    >
                      <StarIcon className="w-6 h-6 text-black" />
                      <div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content', marginTop: '-1px', fontFamily: 'Work Sans', fontWeight: '600', color: 'black', fontSize: '14px', textAlign: 'center', letterSpacing: '0.92px', lineHeight: '20px', whiteSpace: 'nowrap'}}>
                        MOST POPULAR
                      </div>
                    </div>
                  ) : null}

                  <div className="card-content-group flex flex-col flex-grow relative">
                    <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: plan.isPopular ? '12px 24px' : '12px 24px 12px 24px',
                    position: 'relative',
                    flexGrow: 1,
                    background: plan.isPopular ? '#ffffffcc' : 'transparent',
                    borderRadius: '16px',
                    boxShadow: plan.isPopular ? '0px 0px 16px 4px #7d0af81f, inset 0 1px 0 rgba(255,255,255,0.40), inset 1px 0 0 rgba(255,255,255,0.32), inset 0 -1px 1px rgba(0,0,0,0.13), inset -1px 0 1px rgba(0,0,0,0.11)' : 'none',
                    backdropFilter: plan.isPopular ? 'blur(2.0px) brightness(110%)' : 'none',
                    marginTop: plan.isPopular ? '0px' : '12px'
                    }}
                    className={cn({
                      "most-popular-content": plan.isPopular
                    })}
                    >
                      <div className="card-content-wrapper">
                    <div style={{display: 'flex', flexDirection: 'column', gap: '4px', flex: plan.isPopular ? '1' : 'none'}}>
                      <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: '400', textDecoration: 'underline', lineHeight: '26px', wordWrap: 'break-word'}}>
                          {plan.provider}
                        </div>

                        <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '20px', fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '26px', wordWrap: 'break-word', whiteSpace: 'pre-line'}}>
                          {plan.category}
                        </div>
                      </div>

                      <div style={{alignSelf: 'stretch', color: '#606F7F', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>
                        {plan.description}
                      </div>
                    </div>

                    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', marginTop: plan.isPopular ? '0px' : 'auto'}}>
                      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex', gap: '56px'}}>
                        <div style={{minWidth: '60px', height: '48px', paddingLeft: '16px', paddingRight: '16px', paddingTop: '9px', paddingBottom: '9px', background: '#007AC8', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                          <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row', color: 'white', fontSize: '18px', fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '30px', whiteSpace: 'nowrap'}}>
                            Learn More
                          </div>
                        </div>

                        <div style={{width: '80px', height: '80px', background: 'white', boxShadow: '0px 8px 16px -3px rgba(0, 0, 0, 0.10)', borderRadius: '8px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '8px', display: 'inline-flex'}}>
                          <img
                            style={{width: '64px', height: '64px', objectFit: 'contain'}}
                            alt="Provider logo"
                            src={plan.logoSrc}
                          />
                        </div>
                      </div>
                    </div>

                      </div>
                    </div>
                    <img
                      className={`${plan.petImageClasses}`}
                      alt="Pet"
                      src={plan.petImageSrc}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom section with CTA and navigation */}
          <div className="col-span-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <Button className="group flex flex-col w-full lg:w-[610px] items-center gap-2.5 pt-5 pb-0 px-0 relative bg-[#ffffffcc] rounded-lg overflow-hidden border-[none] shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:transition-all before:duration-300 before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] group-hover:before:[background:linear-gradient(90deg,rgba(0,122,200,1)_0%,rgba(255,177,54,1)_50%,rgba(220,0,0,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none h-auto hover:bg-[#ffffffcc]">
                <div className="flex items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 pt-0 pb-4 px-4 relative flex-[0_0_auto]">
                    <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Work_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                      Find me the right option
                    </span>

                    <ArrowRightIcon className="relative w-6 h-6" />
                  </div>
                </div>
              </Button>

              <nav className="flex items-center gap-4">
                <Button 
                  onClick={scrollToPrev}
                  disabled={currentIndex === 0}
                  className="flex w-[50px] h-[50px] items-center justify-center gap-2 p-0 relative bg-[#f4f5f8] rounded-full backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] disabled:opacity-50 text-black hover:text-white"
                >
                  <ChevronLeftIcon className="relative w-6 h-6 ml-[-3.00px] mr-[-3.00px]" />
                </Button>

                <div className="inline-flex h-[50px] items-center gap-2 px-4 py-2 relative flex-[0_0_auto] bg-[#f4f5f8] rounded-[40px] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]">
                  {paginationDots.map((dot, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${dot.bgClass}`}
                    />
                  ))}
                </div>

                <Button 
                  onClick={scrollToNext}
                  disabled={currentIndex >= maxScrollIndex}
                  className="flex w-[50px] h-[50px] items-center justify-center gap-2 p-0 relative bg-[#f4f5f8] rounded-full backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] disabled:opacity-50 text-black hover:text-white"
                >
                  <ChevronRightIcon className="relative w-6 h-6 ml-[-3.00px] mr-[-3.00px]" />
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