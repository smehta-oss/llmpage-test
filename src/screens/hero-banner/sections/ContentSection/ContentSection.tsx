import { ArrowUpRightIcon } from "lucide-react";
import React, { useState } from "react";
import { CustomArrowUpRightIcon } from "../../../../assets/icons";

// Question cards data
const QUESTION_CARDS = [
  {
    id: "dogs-cats-cost",
    question: "Pet Insurance Cost for Dogs and Cats",
    targetSection: "insurance-cost"
  },
  {
    id: "plan-details",
    question: "Pet insurance plan details",
    targetSection: "plan-details"
  },
  {
    id: "user-opinions",
    question: "User Opinion of Pet Insurance Companies",
    targetSection: "user-opinion"
  },
  {
    id: "claims-feedback",
    question: "User Feedback on Claims Process",
    targetSection: "claims-feedback"
  }
];
import { Badge } from "../../../../components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContentSection = (): JSX.Element => {
  const [showAllAuthors, setShowAllAuthors] = useState(false);
  
  // Handle question card clicks - scroll to relevant section
  const handleQuestionClick = (targetSection: string) => {
    const targetElement = document.getElementById(targetSection);
    if (targetElement) {
      const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetTop = elementTop - 80; // 80px offset to account for sticky nav
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  const breadcrumbItems = [
    { label: "ADVISOR", href: "#" },
    { label: "INSURANCE", href: "#" },
    { label: "PET INSURANCE", href: "#" },
  ];

  const authors = [
    {
      name: "Ashlee Valentine",
      role: "Staff Editor",
      type: "Written By",
      image: "/image-2.png",
    },
    {
      name: "Ashlee Valentine",
      role: "Staff Editor",
      type: "Written By",
      image: "/image-2.png",
    },
    {
      name: "Ashlee Valentine",
      role: "Staff Editor",
      type: "Expert Reviewed By",
      image: "/image-2.png",
    },
  ];

  const questionCards = [
    "Does pet insurance cover both dogs and cats under the same plan?",
    "Does pet insurance cover vaccinations and annual checkups?",
    "Are pre-existing conditions covered?",
    "Cheapest pet insurance for a puppy",
    "Which coverage includes dental?",
    "Are pre-existing conditions covered?",
    "How are premiums calculated for pet insurance?",
  ];

  return (
    <section className="flex z-[1] w-full relative flex-col items-start gap-6 pt-[136px] overflow-hidden">
      <div className="flex flex-col items-center px-0 pb-6 relative w-full bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(245,245,247,1)_100%)] overflow-hidden">
        <div className="w-full max-w-none sm:max-w-[1440px] min-w-0 mx-auto px-4 sm:px-6 md:px-8 lg:px-[90px] overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-3 sm:gap-5 w-full min-w-0">
            {/* Advertiser Disclosure Section */}
            <div className="col-span-1 sm:col-span-8 md:col-span-10 lg:col-span-12 pt-2">
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-2" style={{width: '100%', maxWidth: '1440px'}}>
                <div className="order-2 xl:order-1" style={{color: '#8B94A2', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '16px', wordWrap: 'break-word'}}>
                  We independently select all products and services. If you click through links we provide, we may earn a commission.
                </div>
                <div className="order-1 xl:order-2" style={{color: '#8B94A2', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '16px', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>
                  Advertiser Disclosure
                </div>
              </div>
            </div>
            
            <div className="col-span-1 sm:col-span-8 md:col-span-10 lg:col-span-12 flex flex-col items-start gap-4 sm:gap-6 min-w-0">
          <div className="flex flex-col w-full items-start gap-4 relative min-w-0 max-w-full constrain-container">
            <Breadcrumb className="w-full max-w-full">
              <BreadcrumbList className="flex items-center gap-1 flex-wrap">
                {breadcrumbItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href={item.href}
                        className={`[font-family:'Graphik-Regular',Helvetica] font-normal text-[#333333] text-xs tracking-[0] leading-[18px] ${
                          index < 2 ? 'underline' : ''
                        }`}
                      >
                        {item.label}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < breadcrumbItems.length - 1 && (
                      <BreadcrumbSeparator>
                        <img
                          className="w-4 h-4"
                          alt="Separator"
                          src="/svg.svg"
                        />
                      </BreadcrumbSeparator>
                    )}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex flex-col items-start gap-3 relative w-full min-w-0 max-w-full">
              <h1 className="w-full max-w-full text-[#333333] text-[40px] leading-[48px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-bold sm:leading-[1.1] md:leading-[1.2] lg:leading-[1.2] constrain-text" style={{ fontFamily: 'Schnyder S' }}>
                Best Pet Insurance Companies of 2025
              </h1>

              <p className="w-full max-w-full font-fixed-styles-utility-medium-regular font-[number:var(--fixed-styles-utility-medium-regular-font-weight)] text-[#333333] text-[length:var(--fixed-styles-utility-medium-regular-font-size)] tracking-[var(--fixed-styles-utility-medium-regular-letter-spacing)] leading-[var(--fixed-styles-utility-medium-regular-line-height)] [font-style:var(--fixed-styles-utility-medium-regular-font-style)] constrain-text">
                Authored &amp; Verified: Sep 12, 2025, 9:05pm
              </p>
            </div>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 w-full min-w-0">
          <div className="col-span-1 lg:col-span-7 flex flex-col items-start gap-4 sm:gap-6 min-w-0">
              <div className="flex flex-col items-start gap-4 relative w-full min-w-0">
                <div className="flex items-center gap-1 relative w-full min-w-0 overflow-hidden">
                  <Badge className="inline-flex h-12 items-center justify-center gap-1.5 pl-3 pr-4 py-2.5 bg-black text-white hover:bg-black rounded-none flex-shrink-0">
                    <img
                      className="w-[15.4px] h-5 object-contain flex-shrink-0"
                      alt="Asset"
                      src="/Asset 45 1.svg"
                    />
                    <span className="[font-family:'Work_Sans',Helvetica] font-bold text-sm tracking-[1.00px] leading-[21px] whitespace-nowrap">
                      HOW WE ANALYZED
                    </span>
                  </Badge>
                  <div className="flex-1 h-px bg-gray-300 min-w-4"></div>
                </div>

                <p className="[font-family:'Work_Sans',Helvetica] font-normal text-black text-sm tracking-[0] leading-6 break-words overflow-wrap-anywhere w-full">
                  We reviewed 900,024 pet insurance rates across the U.S to
                  provide you with a comprehensive report covering 34 categories
                  and surveying 2,600 pet parents covering 300 breeds.{" "}
                  <span 
                    className="underline cursor-pointer"
                    onClick={() => handleQuestionClick('methodology')}
                  >
                    Read our methodology
                  </span>
                </p>
              </div>

              <Card className="w-full bg-[#ffffffcc] rounded-lg border-none shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0px_rgba(255,255,255,0.48),inset_1px_0_0px_rgba(255,255,255,0.38),inset_0_-1px_1px_rgba(0,0,0,0.24),inset_-1px_0_1px_rgba(0,0,0,0.19)] backdrop-blur-sm backdrop-brightness-[118.0%] backdrop-saturate-[124.0%] backdrop-contrast-[118.0%] [-webkit-backdrop-filter:blur(4px)_brightness(118.0%)_saturate(124.0%)_contrast(118.0%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <CardContent className="p-0 flex items-center justify-center gap-2.5 pt-5 pb-0 px-0">
                  <Button
                    variant="ghost"
                    onClick={() => window.open('https://import-best-of-llm-d-yyv6.bolt.host/', '_blank')}
                    className="inline-flex items-center gap-2 pt-0 pb-4 px-4 h-auto hover:bg-transparent"
                  >
                    <span className="[font-family:'Work_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
                      Find me the right option
                    </span>
                    <img
                      className="w-6 h-6"
                      alt="Line arrow right"
                      src="/-line-arrow-right.svg"
                    />
                  </Button>
                </CardContent>
              </Card>
            </div>

          <div className="col-span-1 lg:col-span-5">
            <div style={{width: '100%', height: '100%', position: 'relative', overflow: 'hidden', borderRadius: 24, backgroundImage: 'url(/HeroImage3.png)', backgroundSize: 'cover', backgroundPosition: '50% 50%', minHeight: '230px'}} className="hidden lg:block">
              {/* Grouped Badge Container - Vertically Centered */}
              <div style={{position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-end'}}>
                <div style={{width: 'auto', height: 40, padding: '6px 10px', background: 'rgba(0, 0, 0, 0.6)', borderRadius: 8, backdropFilter: 'blur(6px)', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                  <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex', flexShrink: 0}}>
                    <div style={{width: 24, height: 24, position: 'relative', overflow: 'hidden', flexShrink: 0}}>
                      <img src="/activity-heart.svg" alt="Average Cost" style={{width: 24, height: 24, position: 'absolute', filter: 'brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(75%) contrast(100%)'}} />
                    </div>
                    <div style={{color: 'rgb(191, 191, 191)', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '12px', wordWrap: 'break-word', flexShrink: 0, whiteSpace: 'nowrap'}}>Average Cost</div>
                  </div>
                  <div style={{textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '12px', wordWrap: 'break-word', flexShrink: 0, whiteSpace: 'nowrap'}}>As low as $24/mo</div>
                </div>
                
                <div style={{width: 'auto', height: 40, padding: '6px 10px', background: 'rgba(0, 0, 0, 0.6)', borderRadius: 8, backdropFilter: 'blur(6px)', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                  <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex', flexShrink: 0}}>
                    <div style={{width: 24, height: 24, position: 'relative', overflow: 'hidden', flexShrink: 0}}>
                      <img src="/activity-heart.svg" alt="Eligibility" style={{width: 24, height: 24, position: 'absolute', filter: 'brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(75%) contrast(100%)'}} />
                    </div>
                    <div style={{color: 'rgb(191, 191, 191)', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '12px', wordWrap: 'break-word', flexShrink: 0, whiteSpace: 'nowrap'}}>Eligibility</div>
                  </div>
                  <div style={{textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '12px', wordWrap: 'break-word', flexShrink: 0, whiteSpace: 'nowrap'}}>Typically kicks in 3-4 weeks</div>
                </div>
                
                <div style={{width: 'auto', height: 40, padding: '6px 10px', background: 'rgba(0, 0, 0, 0.6)', borderRadius: 8, backdropFilter: 'blur(6px)', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                  <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex', flexShrink: 0}}>
                    <div style={{width: 24, height: 24, position: 'relative', overflow: 'hidden', flexShrink: 0}}>
                      <img src="/activity-heart.svg" alt="Wellness Options" style={{width: 24, height: 24, position: 'absolute', filter: 'brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(75%) contrast(100%)'}} />
                    </div>
                    <div style={{color: 'rgb(191, 191, 191)', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '12px', wordWrap: 'break-word', flexShrink: 0, whiteSpace: 'nowrap'}}>Wellness Options</div>
                  </div>
                  <div style={{textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '12px', wordWrap: 'break-word', flexShrink: 0, whiteSpace: 'nowrap'}}>7 of 12 listed partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-start gap-3 sm:gap-4 relative">
          {/* Mobile view - show first author and expandable others */}
          <div className="sm:hidden flex flex-col items-start gap-2">
            <div className="inline-flex items-center gap-2 relative">
              <img
                className="w-8 h-8 rounded-3xl object-cover flex-shrink-0"
                alt="Author"
                src={authors[0].image}
              />
              <div className="inline-flex flex-col items-start relative">
                <div className="inline-flex items-center gap-0.5 relative">
                  <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-[#333333] text-xs tracking-[0] leading-[16px] break-words">
                    {authors[0].type}
                  </span>
                  <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-[#333333] text-xs tracking-[0] leading-[16px] underline break-words">
                    {authors[0].name}
                  </span>
                </div>
                <span className="[font-family:'Work_Sans',Helvetica] font-normal text-[#333333] text-xs tracking-[0] leading-4 break-words">
                  {authors[0].role}
                </span>
              </div>
            </div>
            
            {/* Additional authors - shown when expanded */}
            {showAllAuthors && (
              <div className="flex flex-col gap-2">
                {authors.slice(1).map((author, index) => (
                  <div key={index + 1} className="inline-flex items-center gap-2 relative">
                    <img
                      className="w-8 h-8 rounded-3xl object-cover flex-shrink-0"
                      alt="Author"
                      src={author.image}
                    />
                    <div className="inline-flex flex-col items-start relative">
                      <div className="inline-flex items-center gap-0.5 relative">
                        <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-[#333333] text-xs tracking-[0] leading-[16px] break-words">
                          {author.type}
                        </span>
                        <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-[#333333] text-xs tracking-[0] leading-[16px] underline break-words">
                          {author.name}
                        </span>
                      </div>
                      <span className="[font-family:'Work_Sans',Helvetica] font-normal text-[#333333] text-xs tracking-[0] leading-4 break-words">
                        {author.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Toggle CTA */}
            <button
              onClick={() => setShowAllAuthors(!showAllAuthors)}
              className="[font-family:'Work_Sans',Helvetica] font-normal text-[#007AC8] text-xs tracking-[0] leading-4 break-words cursor-pointer hover:underline transition-all duration-200"
            >
              {showAllAuthors ? 'Show less' : '& 2 others'}
            </button>
          </div>

          {/* Desktop view - show all authors */}
          <div className="hidden sm:inline-flex items-center gap-6 sm:gap-10 relative flex-wrap">
            {authors.map((author, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 sm:gap-3 relative"
              >
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-3xl object-cover flex-shrink-0"
                  alt="Author"
                  src={author.image}
                />
                <div className="inline-flex flex-col items-start relative">
                  <div className="inline-flex items-center gap-0.5 relative">
                    <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-[#333333] text-xs sm:text-sm tracking-[0] leading-[16px] sm:leading-[19.6px] break-words">
                      {author.type}
                    </span>
                    <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-[#333333] text-xs sm:text-sm tracking-[0] leading-[16px] sm:leading-[19.6px] underline break-words">
                      {author.name}
                    </span>
                  </div>
                  <span className="[font-family:'Work_Sans',Helvetica] font-normal text-[#333333] text-xs tracking-[0] leading-4 break-words">
                    {author.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-4 sm:pt-6 pb-6 sm:pb-8 border-b border-solid border-[#eceff3] overflow-hidden">
        <div className="w-full max-w-none sm:max-w-[1440px] min-w-0 mx-auto px-4 sm:px-6 md:px-8 lg:px-[90px]">
          <div className="grid grid-cols-1 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-3 sm:gap-5 w-full min-w-0">
            <div className="col-span-1 sm:col-span-8 md:col-span-10 lg:col-span-12 flex flex-col items-start gap-4 sm:gap-6 min-w-0">
              <div className="text-black text-lg sm:text-xl font-bold leading-[22px] sm:leading-[26px] break-words" style={{ fontFamily: 'Work Sans' }}>
                See the data:
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2 sm:gap-3">
                {/* Single row horizontal scrolling layout */}
                <div 
                  className="flex overflow-x-auto gap-2 sm:gap-3 scrollbar-hide py-1 sm:py-2 px-1"
                  style={{ 
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  {QUESTION_CARDS.map((questionCard) => (
                    <div 
                      key={questionCard.id}
                      onClick={() => handleQuestionClick(questionCard.targetSection)}
                      className="flex-shrink-0 w-fit py-2 px-2 sm:px-3 bg-white shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)] rounded-lg border border-solid border-[#f4f5f8] justify-center items-center gap-2 sm:gap-2.5 flex cursor-pointer hover:shadow-[0px_6px_12px_-1px_rgba(0,0,0,0.15)] hover:scale-[1.02] hover:border-[#007AC8] transition-all duration-300 ease-in-out group relative before:content-[''] before:absolute before:inset-0 before:p-[1px] before:rounded-lg before:opacity-0 hover:before:opacity-0  hover:before:[animation-fill-mode:forwards] before:transition-opacity before:duration-300 before:[background:linear-gradient(90deg,rgba(0,122,200,0.1)_0%,rgba(255,177,54,0.1)_50%,rgba(220,0,0,0.1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none "
                    >
                      <div className="justify-center flex flex-col text-[#606f7f] text-xs leading-[16px] sm:leading-[18px] break-words max-w-[200px] sm:max-w-none" style={{ fontFamily: 'Work Sans', fontWeight: '400' }}>
                        {questionCard.question}
                      </div>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 relative flex-shrink-0 group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                        <CustomArrowUpRightIcon />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};