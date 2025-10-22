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
    pro: "Pets Best will pay your vet directly if your vet signs the Veterinarian Reimbursement Release form",
    con: "Does not cover prescription food or supplements"
  },
  {
    pro: "CareCredit cardholders can use the card to pay for vet bills and receive reimbursement directly to the card",
    con: "Does not cover stem cell treatments"
  },
  {
    pro: "No upper pet age limit for buying a new policy",
    con: "6-month waiting period for coverage of cruciate ligament issues"
  },
  {
    pro: "Offers a 1-month trial policy for dogs and cats ages 8 and under through certain veterinary clinics and companies that partner with Pets Best",
    con: null
  }
];

export const PetsBestCard1 = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("expert-take");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="grid grid-cols-12 gap-5">
      <Card className="col-span-12 p-0 bg-white rounded-3xl border-0 shadow-none">
        <CardContent className="p-0 space-y-6">
          <header className="flex items-center gap-2">
            <h2 className="[font-family:'Work_Sans',Helvetica] font-bold text-black text-2xl leading-8">
              <span className="underline">PetsBest</span>
            </h2>
            <img src="/-duocolor-arrow-up-right.svg" alt="External link" className="w-6 h-6" />
          </header>

          <div className="grid grid-cols-12 gap-5 lg:gap-8">
            <div className="col-span-12 lg:col-span-5 relative">
              <div className="w-full h-[58px] bg-[#f8f8fa] rounded-[16px_16px_0px_0px] overflow-hidden flex items-center justify-center">
                <img 
                  src="/pets-best-logo.png?t=1726973000" 
                  alt="Pets Best Logo" 
                  className="w-[125px] h-[58px] object-contain"
                />
              </div>
              <img
                className="w-full h-[207px] object-cover rounded-[0px_0px_16px_16px]"
                alt="Figo Pet Insurance"
                src="/FigoImg.png"
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
                    Best overall
                  </h3>
                  <TrophyIcon className="w-6 h-6 text-[#007ac8]" />
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
                  Pros & Cons of Pets Best
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
                <div className="flex flex-col gap-8">
                  {/* Top Section with Rating and Legend */}
                  <div className="flex flex-col lg:flex-row items-start gap-0">
                    {/* Left: Rating Gauge and Legend */}
                    <div className="flex items-start" style={{ gap: '32px', marginRight: '15px' }}>
                      {/* Rating Gauge */}
                      <div className="flex flex-col items-center" style={{ gap: '-5px' }}>
                        <div className="relative" style={{ width: '170px', height: '105px' }}>
                          {/* Semi-circle SVG */}
                          <svg viewBox="0 0 200 120" style={{ width: '170px', height: '105px', overflow: 'visible' }}>
                            {/* Red segment (0-5) */}
                            <path
                              d="M 20 100 A 80 80 0 0 1 62 28"
                              fill="none"
                              stroke="#C2552F"
                              strokeWidth="16"
                              strokeLinecap="round"
                            />

                            {/* Yellow segment (5-7) */}
                            <path
                              d="M 65 26 A 80 80 0 0 1 135 26"
                              fill="none"
                              stroke="#E5B84F"
                              strokeWidth="16"
                              strokeLinecap="round"
                            />

                            {/* Green segment (7-10) */}
                            <path
                              d="M 138 28 A 80 80 0 0 1 180 100"
                              fill="none"
                              stroke="#3D7C6D"
                              strokeWidth="16"
                              strokeLinecap="round"
                            />

                            {/* Indicator dot on yellow segment */}
                            <circle cx="135" cy="26" r="14" fill="#E5B84F"/>
                          </svg>

                          {/* Center Text */}
                          <div style={{
                            position: 'absolute',
                            top: '60%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center',
                            whiteSpace: 'nowrap'
                          }}>
                            <span style={{
                              fontFamily: 'system-ui, -apple-system, sans-serif',
                              fontWeight: '800',
                              color: '#2D3748',
                              fontSize: '24px',
                              letterSpacing: '-0.02em',
                              lineHeight: '1'
                            }}>6.6</span>
                            <span style={{
                              fontFamily: 'system-ui, -apple-system, sans-serif',
                              fontWeight: '400',
                              fontSize: '12px',
                              color: '#718096',
                              letterSpacing: '-0.01em'
                            }}>/10</span>
                          </div>

                          {/* Info icon */}
                          <div style={{
                            position: 'absolute',
                            top: '-5px',
                            right: '-35px',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            border: '1.5px solid #A0AEC0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#F7FAFC',
                            cursor: 'pointer'
                          }}>
                            <span style={{
                              fontSize: '10px',
                              color: '#A0AEC0',
                              fontWeight: '600',
                              fontFamily: 'Georgia, serif',
                              fontStyle: 'italic'
                            }}>i</span>
                          </div>
                        </div>

                        {/* Fair Badge */}
                        <div style={{
                          padding: '6px 24px',
                          backgroundColor: '#FEF3C7',
                          borderRadius: '24px'
                        }}>
                          <span style={{
                            fontSize: '14px',
                            fontWeight: '500',
                            color: '#3D3D3D',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                          }}>Fair</span>
                        </div>
                      </div>

                      {/* Legend */}
                      <div className="flex flex-col gap-3 pt-4">
                        <div className="flex items-center gap-3">
                          <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#DC2626'
                          }}></div>
                          <span style={{
                            fontSize: '12px',
                            color: '#4B5563',
                            fontFamily: 'Work Sans, sans-serif'
                          }}>0-5 Poor</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#EAB308'
                          }}></div>
                          <span style={{
                            fontSize: '12px',
                            color: '#4B5563',
                            fontFamily: 'Work Sans, sans-serif'
                          }}>5-7 Fair</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#16A34A'
                          }}></div>
                          <span style={{
                            fontSize: '12px',
                            color: '#4B5563',
                            fontFamily: 'Work Sans, sans-serif'
                          }}>7-10 Good</span>
                        </div>
                      </div>
                    </div>

                    {/* Center: Highlight Box */}
                    <div style={{
                      maxWidth: '427px',
                      paddingLeft: '15px',
                      paddingRight: '15px',
                      marginLeft: '15px',
                      borderLeft: '1px solid #E5E7EB'
                    }}>
                      <h4 style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#000000',
                        marginBottom: '8px',
                        fontFamily: 'Work Sans, sans-serif',
                        lineHeight: '1.3'
                      }}>
                        Excellent coverage and customer service
                      </h4>
                      <p style={{
                        fontSize: '16px',
                        color: '#6B7280',
                        fontFamily: 'Work Sans, sans-serif',
                        lineHeight: '1.5',
                        margin: 0
                      }}>
                        Users ranked Pets Best #1 in coverage across 4k+ reviews
                      </p>
                    </div>

                    {/* Right: Insights Count */}
                    <div className="flex flex-col items-center gap-2 border-l border-gray-200" style={{ paddingLeft: '15px', marginLeft: '15px' }}>
                      <div style={{
                        fontSize: '48px',
                        fontWeight: '700',
                        color: '#007AC8',
                        fontFamily: 'Work Sans, sans-serif',
                        lineHeight: '1'
                      }}>7,920</div>
                      <div style={{
                        fontSize: '16px',
                        color: '#6B7280',
                        fontFamily: 'Work Sans, sans-serif'
                      }}>Insights Analyzed</div>
                    </div>
                  </div>

                  {/* What Pet Parents Say */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h4 className="font-bold text-lg text-black whitespace-nowrap">What Pet Parents Say About Pets Best</h4>
                      <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      Customers generally find that Pets Best offers comprehensive plans with good options for customization. The primary customer complaint is slow processing times for claims, which can cause frustration...
                    </p>
                    <button className="text-[#007AC8] font-semibold text-sm hover:underline">Read more</button>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-600 rounded-full">
                      <span className="text-green-600 text-xl">↑</span>
                      <span className="font-semibold text-sm">Ranked #1 in Coverage</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-600 rounded-full">
                      <span className="text-green-600 text-xl">↑</span>
                      <span className="font-semibold text-sm">#2 in Claims</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-600 rounded-full">
                      <span className="text-yellow-600 text-xl">→</span>
                      <span className="font-semibold text-sm">#4 in Cost and Premiums</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-600 rounded-full">
                      <span className="text-red-600 text-xl">↓</span>
                      <span className="font-semibold text-sm">#5 in Support</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="text-3xl">👍</div>
                        <div>
                          <div className="font-semibold text-sm text-gray-900 mb-1">
                            In 3.5k+ comparisons where Pets Best <span className="font-bold">was preferred</span>, people say it is
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm">Affordable (800+)</span>
                        <span className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm">Flexible Coverage (200+)</span>
                        <span className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm">Dental & Vaccine Costs (120+)</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="text-3xl">👎</div>
                        <div>
                          <div className="font-semibold text-sm text-gray-900 mb-1">
                            In 2.6k+ comparisons where Pets Best <span className="font-bold">was not preferred</span>, people say it is
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm">Slightly Expensive (800+)</span>
                        <span className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm">Limited Multi-Pet Discount (200)</span>
                        <span className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm">Dental Limits (100+)</span>
                      </div>
                    </div>
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
                        Wellness plan: $23 to $56 per month, depending on the reimbursement level
                      </li>
                      <li className="[font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                        Vet exam fee coverage: Cost varies
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
                            70%, 80%, 90%
                          </td>
                        </tr>
                        <tr className="bg-[#F8F8FA] border-b border-[#E5E7EB]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Waiting periods
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Accident coverage begins at 12:01 a.m. ET the day after you purchase your policy; 14 days for illnesses; 6 months for orthopedic conditions (can be reduced to 14 days with an orthopedic exam)
                          </td>
                        </tr>
                        <tr className="border-b border-[#E5E7EB]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Age restrictions
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Available for pets 6 weeks and older; accident and illness plans available for pets up to age 15; pets ages 15 and older qualify solely for an accident-only plan
                          </td>
                        </tr>
                        <tr className="bg-[#F8F8FA] border-b border-[#E5E7EB]">
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            Multi-pet discount
                          </td>
                          <td className="p-4 [font-family:'Work_Sans',Helvetica] text-[#333333] text-base leading-[26px]">
                            10%
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
                            Available as an add-on
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
                    The Pets Best Elite policy is the top-scoring policy in our evaluation. It stands out for its competitive prices and robust coverage, including vet exam fees, dental illnesses, behavioral therapy and alternative therapies. You'll have access to a 24/7 pet telehealth line and the option to buy one of two different tiers of wellness plans to cover expenses such as annual vet exams, vaccinations, microchipping and neutering/spaying.
                  </p>
                  
                  {isExpanded && (
                    <>
                      <p className="text-base leading-[26px] sm:text-lg sm:leading-[29.12px]" style={{ 
                        color: '#333333', 
                        fontFamily: 'Georgia', 
                        fontWeight: '400', 
                        wordWrap: 'break-word',
                        margin: 0
                      }}>
                        Pets Best's Essential and Plus policies also scored well in our analysis (4.9 stars each). They have differences in coverage and price.
                      </p>
                      
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
                          Pets Best Pet Insurance Review
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
