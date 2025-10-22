import { ArrowRightIcon, ExternalLinkIcon, TrophyIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const coverageDetails = [
  {
    label: "Maximum annual coverage",
    value: "$5,000, Unlimited",
  },
  {
    label: "Average monthly cost for unlimited coverage",
    value: "$52 for dogs; $24 for cats",
  },
  {
    label: "Deductible choices",
    value: "$50, $100, $200, $250, $500",
  },
];

const tabItems = [
  { id: "expert-take", label: "Our Expert Take" },
  { id: "pros-cons", label: "Pros & Cons" },
  {
    id: "consumer-sentiment",
    label: "Consumer Sentiment Index",
  },
  {
    id: "customer-satisfaction",
    label: "Customer Satisfaction Survey",
  },
  { id: "plan-details", label: "Plan Details" },
];

const prosConsData = [
  {
    pro: "Unique Powerups allow you to customize your coverage with hard-to-find benefits",
    con: "Does not cover pre-existing conditions"
  },
  {
    pro: "Includes up to $10,000 in liability coverage if your pet damages property",
    con: "Limited availability in some states"
  },
  {
    pro: "Covers lost pet advertising and rewards up to $1,000",
    con: "Higher premiums for older pets"
  },
  {
    pro: "Offers coverage for boarding expenses if you are hospitalized",
    con: null
  }
];

export const PetsBestCard2 = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("expert-take");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="grid grid-cols-12 gap-5">
      <Card className="col-span-12 p-6 bg-white rounded-3xl border-4 border-[#F3C060] relative" style={{ overflow: 'visible' }}>
        {/* Most Popular Badge */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 md:-left-6 md:transform-none md:translate-x-0 -top-7 z-[1]"
          style={{
            padding: '2px 12px', 
            background: 'var(--Colors-Tertiary-400, #F3C060)', 
            overflow: 'hidden', 
            borderRadius: 16, 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 8, 
            display: 'inline-flex',
            maxHeight: 48
          }}
        >
          <div style={{width: 24, height: 24, position: 'relative', overflow: 'hidden'}}>
            <img 
              src="/Popular.svg" 
              alt="Popular" 
              style={{
                width: 20, 
                height: 20, 
                left: 2, 
                top: 2, 
                position: 'absolute'
              }} 
            />
          </div>
          <div style={{
            justifyContent: 'center', 
            display: 'flex', 
            flexDirection: 'column', 
            color: 'var(--Colors-Quinary-800, #171614)', 
            fontSize: 15, 
            fontFamily: 'Work Sans', 
            fontWeight: '600', 
            textTransform: 'uppercase', 
            lineHeight: 20, 
            wordWrap: 'break-word'
          }}>
            MOST POPULAR
          </div>
        </div>
        
        <CardContent className="p-0 space-y-6">
          <header className="flex items-center gap-2">
            <h2 className="[font-family:'Work_Sans',Helvetica] font-bold text-black text-2xl leading-8">
              <span className="underline">Figo</span>
            </h2>
            <img src="/-duocolor-arrow-up-right.svg" alt="External link" className="w-6 h-6" />
          </header>

          <div className="grid grid-cols-12 gap-5 lg:gap-8">
            <div className="col-span-12 lg:col-span-5 relative">
              <div className="w-full h-[58px] bg-[#f8f8fa] rounded-[16px_16px_0px_0px] overflow-hidden flex items-center justify-center">
                <img 
                  src="/FigoIcon.png" 
                  alt="Figo Logo" 
                  className="w-[125px] h-[58px] object-contain"
                />
              </div>
              <img
                className="w-full h-[207px] object-cover rounded-[0px_0px_16px_16px]"
                alt="Rectangle"
                src="/rectangle-2.png"
              />
            </div>

            <div className="col-span-12 lg:col-span-7 flex flex-col gap-2">
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-3.5">
                  <img
                    className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
                    alt="Frame"
                    src="/frame-2147237132.svg"
                  />
                  <h3 className="text-[20px] leading-[28px] sm:text-[28px] sm:leading-[36px]" style={{
                    color: 'black',
                    fontFamily: 'Schnyder S',
                    fontWeight: '700',
                    wordWrap: 'break-word'
                  }}>
                    Best for all-round coverage
                  </h3>
                </div>
                <Separator className="h-px" />
              </div>

              <div className="flex flex-col gap-2">
                {coverageDetails.map((detail, index) => (
                  <div key={index}>
                    <div className="flex items-start justify-between gap-2 py-2">
                      <div className="flex-1">
                        <p className="text-black text-sm leading-[22px] font-normal" style={{ fontFamily: 'Work Sans' }}>
                          {detail.label}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-black text-sm leading-[22px] font-bold" style={{ fontFamily: 'Work Sans' }}>
                          {detail.value}
                        </span>
                      </div>
                    </div>
                    {index < coverageDetails.length - 1 && (
                      <Separator className="h-px" />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col h-[69px] gap-1.5">
                <Button className="h-12 bg-[#007ac8] hover:bg-[#006bb3] text-white shadow-[0px_4px_12px_#00000033] rounded">
                  <span className="[font-family:'Work_Sans',Helvetica] font-bold text-base">
                    See Plans
                  </span>
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-center [font-family:'Work_Sans',Helvetica] font-normal text-[#333333] text-xs leading-[15px]">
                  Via Forbes Advisor's Partner
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-7">
            <div id="product-card-navigation" className="flex overflow-x-auto items-center gap-5 w-full scrollbar-hide" style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}>
              {tabItems.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`navigation-button h-14 px-4 py-2 transition-all duration-300 ease-in-out flex justify-center items-center bg-transparent hover:bg-transparent ${
                    activeTab === tab.id
                      ? "border-b-[3px] border-black"
                      : "border-b border-[#CED4DB]"
                  } ${
                    index === 0 && activeTab === tab.id ? "flex-shrink-0" : 
                    index === 0 ? "flex-shrink-0" :
                    "flex-1"
                  }`}
                  style={{
                    backgroundColor: 'transparent'
                  }}
                >
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="flex justify-start items-center">
                      <div 
                        className="text-center flex flex-col justify-center whitespace-nowrap"
                        style={{
                          color: activeTab === tab.id ? 'black' : '#1E2125',
                          fontSize: '14px',
                          fontFamily: 'Work Sans',
                          fontWeight: activeTab === tab.id ? '600' : '400',
                          lineHeight: activeTab === tab.id ? '15px' : '24px',
                          wordWrap: 'break-word'
                        }}
                      >
                        {tab.label}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {activeTab === "pros-cons" && (
              <>
                <h4 className="[font-family:'Work_Sans',Helvetica] font-semibold text-black text-xl tracking-[-0.33px] leading-8">
                  Pros & Cons of Figo
                </h4>

                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th
                        className="w-1/2 p-2 bg-[#F8F8FA] border-r border-[#CED4DB] text-left"
                        style={{
                          color: 'black',
                          fontSize: 12,
                          fontFamily: 'Work Sans',
                          fontWeight: '700',
                          lineHeight: '16px',
                          wordWrap: 'break-word'
                        }}
                      >
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 flex items-center justify-center">
                            <img
                              src="/line/thumbs-up.svg"
                              alt="Thumbs up"
                              className="w-4 h-4"
                            />
                          </div>
                          Pros
                        </div>
                      </th>
                      <th
                        className="w-1/2 p-2 bg-[#F8F8FA] text-left"
                        style={{
                          color: 'black',
                          fontSize: 12,
                          fontFamily: 'Work Sans',
                          fontWeight: '700',
                          lineHeight: '16px',
                          wordWrap: 'break-word'
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 flex items-center justify-center">
                            <img
                              src="/line/thumbs-down.svg"
                              alt="Thumbs down"
                              className="w-4 h-4"
                            />
                          </div>
                          Cons
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {prosConsData.map((row, index) => (
                      <tr key={index}>
                        <td
                          className="p-2 bg-[#F8F8FA] border-t border-r border-[#CED4DB] align-top"
                          style={{
                            color: 'black',
                            fontSize: 14,
                            fontFamily: 'Work Sans',
                            fontWeight: '400',
                            lineHeight: '24px',
                            wordWrap: 'break-word'
                          }}
                        >
                          <ol start={index + 1} className="list-decimal list-inside m-0 p-0">
                            <li className="pl-0">{row.pro}</li>
                          </ol>
                        </td>
                        <td
                          className="p-2 bg-[#F8F8FA] border-t border-[#CED4DB] align-top"
                          style={{
                            color: 'black',
                            fontSize: 14,
                            fontFamily: 'Work Sans',
                            fontWeight: '400',
                            lineHeight: '24px',
                            wordWrap: 'break-word'
                          }}
                        >
                          {row.con && (
                            <ol start={index + 1} className="list-decimal list-inside m-0 p-0">
                              <li className="pl-0">{row.con}</li>
                            </ol>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {activeTab === "plan-details" && (
              <>
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="[font-family:'Work_Sans',Helvetica] font-bold text-black text-2xl leading-[30px] mb-4">
                      Extra Costs
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="[font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                        Wellness plan: $15 to $45 per month
                      </li>
                      <li className="[font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                        Powerups (optional coverage enhancements): $5 to $20 per month
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="[font-family:'Work_Sans',Helvetica] font-bold text-black text-2xl leading-[30px] mb-4">
                      Coverage Details
                    </h3>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="bg-[#2B4C7E] text-white text-left p-4 [font-family:'Work_Sans',Helvetica] font-bold text-base">
                            Coverage Type
                          </th>
                          <th className="bg-[#2B4C7E] text-white text-left p-4 [font-family:'Work_Sans',Helvetica] font-bold text-base">
                            Plan Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#E5E7EB]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Reimbursement choices
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            70%, 80%, 90%, 100%
                          </td>
                        </tr>
                        <tr className="bg-[#F8F8FA] border-b border-[#E5E7EB]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Waiting periods
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Coverage begins immediately for accidents; 14 days for illnesses; 6 months for orthopedic conditions
                          </td>
                        </tr>
                        <tr className="border-b border-[#E5E7EB]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Age restrictions
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Available for pets 8 weeks and older; no upper age limit for enrollment
                          </td>
                        </tr>
                        <tr className="bg-[#F8F8FA] border-b border-[#E5E7EB]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Multi-pet discount
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            5%
                          </td>
                        </tr>
                        <tr className="border-b border-[#E5E7EB]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Euthanasia or end-of-life expenses
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Included with Powerups
                          </td>
                        </tr>
                        <tr className="border-b border-[#E5E7EB]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Vet exam fees
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Included with Powerups
                          </td>
                        </tr>
                        <tr className="bg-[#F8F8FA]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Microchipping
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Yes, if you purchase a wellness plan
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {activeTab === "expert-take" && (
              <>
                <h4 className="[font-family:'Work_Sans',Helvetica] font-semibold text-black text-base leading-[26px] sm:text-xl sm:leading-8 tracking-[-0.33px]">
                  Our Expert Take
                </h4>

                <div className="flex flex-col gap-[18px]">
                  <p className="text-base leading-[26px] sm:text-lg sm:leading-[29.12px]" style={{ 
                    color: '#333333', 
                    fontFamily: 'Georgia', 
                    fontWeight: '400', 
                    wordWrap: 'break-word',
                    margin: 0,
                    display: '-webkit-box',
                    WebkitLineClamp: isExpanded ? 'none' : 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: isExpanded ? 'visible' : 'hidden'
                  }}>
                    Figo stood out in our evaluation due to its solid coverage in the base plan and the options to upgrade your plan via "Powerups." Figo's Powerups include hard-to-find coverage for expenses such as advertising and rewards if your pet is lost or stolen and up to $250 in final respects coverage (including burial and cremation expenses). Also included: up to $10,000 in liability coverage if your pet damages someone else's property, boarding expenses if you are hospitalized and vet exam fees. You're not likely to find all of this coverage at other top pet insurers.
                  </p>
                  
                  {isExpanded && (
                    <p className="text-base leading-[26px] sm:text-lg sm:leading-[29.12px]" style={{ 
                      color: '#333333', 
                      fontFamily: 'Georgia', 
                      fontWeight: '400', 
                      wordWrap: 'break-word',
                      margin: 0
                    }}>
                      <span>More: </span>
                      <span style={{ 
                        color: '#007AC8', 
                        fontSize: '18px', 
                        fontFamily: 'Georgia', 
                        fontWeight: '700', 
                        textDecoration: 'underline', 
                        lineHeight: '29.12px', 
                        wordWrap: 'break-word' 
                      }}>
                        Figo Pet Insurance Review
                      </span>
                    </p>
                  )}
                  
                  <div style={{width: '100%', height: 40, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', position: 'relative'}}>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      style={{width: 144, height: 40, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'white', overflow: 'hidden', borderRadius: 4, outline: '1px #7A8EC7 solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex', cursor: 'pointer', border: 'none', zIndex: 1}}
                    >
                      <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#007AC8', fontSize: 14, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: 22, wordWrap: 'break-word'}}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </div>
                    </button>
                    <div style={{position: 'absolute', left: 144, right: 0, top: '50%', height: '1px', backgroundColor: '#CED4DB', transform: 'translateY(-50%)'}}></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
