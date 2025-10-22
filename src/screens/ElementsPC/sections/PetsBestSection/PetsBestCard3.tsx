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
    pro: "Chewy can pay your vet directly if they have Trupanion's software installed",
    con: "Coverage details vary between Trupanion and Lemonade plans"
  },
  {
    pro: "No payout limits on claims if your vet uses Trupanion Express",
    con: "Does not cover pre-existing conditions"
  },
  {
    pro: "90% reimbursement rate with no annual or lifetime limits",
    con: "Only covers unexpected injuries and illnesses"
  },
  {
    pro: "Includes access to Chewy's pharmacy and customer service",
    con: null
  }
];

export const PetsBestCard3 = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("expert-take");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="grid grid-cols-12 gap-5">
      <Card className="col-span-12 p-0 bg-white rounded-3xl border-0 shadow-none">
        <CardContent className="p-0 space-y-6">
          <header className="flex items-center gap-2">
            <h2 className="[font-family:'Work_Sans',Helvetica] font-bold text-black text-2xl leading-8">
              <span className="underline">Chewy</span>
            </h2>
            <img src="/-duocolor-arrow-up-right.svg" alt="External link" className="w-6 h-6" />
          </header>

          <div className="grid grid-cols-12 gap-5 lg:gap-8">
            <div className="col-span-12 lg:col-span-5 relative">
              <div className="w-full h-[58px] bg-[#f8f8fa] rounded-[16px_16px_0px_0px] overflow-hidden flex items-center justify-center">
                <img 
                  src="/ChewyIcon.png" 
                  alt="Chewy Logo" 
                  className="w-[125px] h-[58px] object-contain"
                />
              </div>
              <img
                className="w-full h-[207px] object-cover rounded-[0px_0px_16px_16px]"
                alt="Chewy Pet Insurance"
                src="/Chewylogo.png"
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
                    Best for wellness
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
                  Pros & Cons of Chewy
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

            {activeTab === "consumer-sentiment" && (
              <>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="flex flex-col items-center gap-3">
                      <div className="relative w-32 h-32">
                        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                          <circle cx="60" cy="60" r="50" fill="none" stroke="#E5E7EB" strokeWidth="12"/>
                          <circle cx="60" cy="60" r="50" fill="none" stroke="url(#gradient3)" strokeWidth="12" strokeDasharray="314" strokeDashoffset="35" strokeLinecap="round"/>
                          <defs><linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#DC2626"/><stop offset="50%" stopColor="#F59E0B"/><stop offset="100%" stopColor="#10B981"/></linearGradient></defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center"><div className="text-center"><div className="text-3xl font-bold text-black">8.2</div><div className="text-sm text-gray-600">/10</div></div></div>
                      </div>
                      <div className="px-4 py-1.5 bg-[#D1FAE5] rounded"><span className="text-sm font-semibold text-black">Good</span></div>
                    </div>
                    <div className="flex flex-col gap-3 flex-1">
                      <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-600"></div><span className="text-sm text-gray-700">0-5 Poor</span></div>
                      <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-500"></div><span className="text-sm text-gray-700">5-7 Fair</span></div>
                      <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-600"></div><span className="text-sm text-gray-700">7-10 Good</span></div>
                    </div>
                    <div className="flex flex-col items-center gap-2 border-l border-gray-200 pl-6"><div className="text-3xl font-bold text-[#007AC8]">9,350</div><div className="text-sm text-gray-600">Insights Analyzed</div></div>
                  </div>
                  <div className="border-t border-gray-200 pt-6"><div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4"><h4 className="font-bold text-lg text-black mb-2">Fast claims and immediate coverage</h4><p className="text-sm text-gray-700">Users ranked Chewy #1 in claims processing speed across 6k+ reviews</p></div></div>
                  <div><h4 className="font-bold text-lg text-black mb-4">What Pet Parents Say About Chewy</h4><p className="text-base text-gray-700 leading-relaxed mb-4">Customers love Chewy's instant coverage and simple 90% reimbursement rate. Powered by Trupanion, the claims process is notably fast. Some users mention the lack of wellness plan options compared to competitors...</p><button className="text-[#007AC8] font-semibold text-sm hover:underline">Read more</button></div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-600 rounded-full"><span className="text-green-600 text-xl">↑</span><span className="font-semibold text-sm">Ranked #1 in Claims Speed</span></div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-600 rounded-full"><span className="text-green-600 text-xl">↑</span><span className="font-semibold text-sm">#1 in Ease of Use</span></div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-600 rounded-full"><span className="text-yellow-600 text-xl">→</span><span className="font-semibold text-sm">#3 in Coverage</span></div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-600 rounded-full"><span className="text-red-600 text-xl">↓</span><span className="font-semibold text-sm">#5 in Wellness Options</span></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-6"><div className="flex items-start gap-3 mb-4"><div className="text-3xl">👍</div><div><div className="font-semibold text-sm text-gray-900 mb-1">In 5.1k+ comparisons where Chewy <span className="font-bold">was preferred</span>, people say it is</div></div></div><div className="flex flex-wrap gap-2"><span className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm">Fast Payments (1100+)</span><span className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm">No Waiting Period (850+)</span><span className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm">Simple Plans (620+)</span></div></div>
                    <div className="bg-gray-50 rounded-lg p-6"><div className="flex items-start gap-3 mb-4"><div className="text-3xl">👎</div><div><div className="font-semibold text-sm text-gray-900 mb-1">In 1.2k+ comparisons where Chewy <span className="font-bold">was not preferred</span>, people say it is</div></div></div><div className="flex flex-wrap gap-2"><span className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm">Limited Deductible Options (300+)</span><span className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm">No Wellness Plans (250+)</span><span className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm">Fixed Rate Only (180+)</span></div></div>
                  </div>
                </div>
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
                        Wellness coverage: Available through Recovery and Recovery Plus add-ons
                      </li>
                      <li className="[font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                        Vet exam fees: Included in base policy
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
                            90% (fixed rate)
                          </td>
                        </tr>
                        <tr className="bg-[#F8F8FA] border-b border-[#E5E7EB]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Waiting periods
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Coverage begins immediately after enrollment; 30 days for hip dysplasia
                          </td>
                        </tr>
                        <tr className="border-b border-[#E5E7EB]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Age restrictions
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Available for pets 8 weeks and older; no upper age limit
                          </td>
                        </tr>
                        <tr className="bg-[#F8F8FA] border-b border-[#E5E7EB]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Multi-pet discount
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Not available
                          </td>
                        </tr>
                        <tr className="border-b border-[#E5E7EB]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Euthanasia or end-of-life expenses
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Included
                          </td>
                        </tr>
                        <tr className="border-b border-[#E5E7EB]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Vet exam fees
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Included in base policy
                          </td>
                        </tr>
                        <tr className="bg-[#F8F8FA]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Microchipping
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Available with Recovery add-on
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
                    Chewy has partnered with Trupanion and Lemonade to offer pet insurance. Chewy's plan through Trupanion stands out thanks to its ability to pay a vet directly (if the vet has Trupanion's software). This makes Chewy's vet pay system easier to use compared to other insurers that offer ways to pay a vet directly. Options from other pet insurers rely on preapproval from the insurer or the vet waiting for payment.
                  </p>
                  
                  {isExpanded && (
                    <>
                      <p style={{ 
                        color: '#333333', 
                        fontSize: '18px', 
                        fontFamily: 'Georgia', 
                        fontWeight: '400', 
                        lineHeight: '29.12px', 
                        wordWrap: 'break-word',
                        margin: 0
                      }}>
                        Our rating is based on Chewy's Essential Plus policy through Trupanion. You can buy a plan directly from Trupanion, but Chewy's plan through Trupanion offers different coverage details, cheaper pricing, and it scored higher in our evaluation.
                      </p>
                      
                      <p style={{ 
                        color: '#333333', 
                        fontSize: '18px', 
                        fontFamily: 'Georgia', 
                        fontWeight: '400', 
                        lineHeight: '29.12px', 
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
                          Chewy Pet Insurance Review
                        </span>
                      </p>
                    </>
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
