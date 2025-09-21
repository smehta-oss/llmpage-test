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

export const PetsBestDetailsSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("expert-take");

  return (
    <div className="grid grid-cols-12 gap-5">
      <Card className="col-span-12 p-6 bg-white rounded-3xl border border-[#d9dbe9]">
        <CardContent className="p-0 space-y-6">
          <header className="flex items-center gap-2">
            <h2 className="[font-family:'Work_Sans',Helvetica] font-bold text-black text-2xl leading-8 underline">
              Pets Best
            </h2>
            <ExternalLinkIcon className="w-6 h-6" />
          </header>

          <div className="grid grid-cols-12 gap-5 lg:gap-8">
            <div className="col-span-12 lg:col-span-5 relative">
              <div className="w-full h-[58px] bg-[#f8f8fa] rounded-[16px_16px_0px_0px] overflow-hidden flex items-center justify-center">
                <div className="w-[125px] h-[58px] [background:url(../logos.png)_50%_50%_/_cover]" />
              </div>
              <img
                className="w-full h-[207px] object-cover rounded-[0px_0px_16px_16px]"
                alt="Rectangle"
                src="/rectangle-2.png"
              />
            </div>

            <div className="col-span-12 lg:col-span-7 flex flex-col gap-5">
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-3.5">
                  <img
                    className="w-[30px] h-[30px]"
                    alt="Frame"
                    src="/frame-2147237132.svg"
                  />
                  <h3 style={{
                    color: 'black',
                    fontSize: '28px',
                    fontFamily: 'Schnyder S',
                    fontWeight: '700',
                    lineHeight: '36px',
                    wordWrap: 'break-word'
                  }}>
                    Best for overall
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

          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap items-center gap-4 max-w-[968px]">
            <div id="product-card-navigation" className="flex flex-wrap items-center gap-4 max-w-[968px]">
              {tabItems.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`navigation-button h-14 px-4 py-2 rounded-[40px] ${
                    activeTab === tab.id
                      ? "bg-[#1d1d1f] text-white shadow-SEM-shadows-4dp"
                      : "bg-[#f8f8fa] text-[#1d1d1f]"
                  }`}
                  style={{
                    boxShadow: activeTab === tab.id 
                      ? '0px 4px 8px -1px rgba(0, 0, 0, 0.10)' 
                      : '0px 0px 0.5px rgba(0, 0, 0, 0.11) inset'
                  }}
                >
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="flex justify-start items-center">
                      <div 
                        className="text-center flex flex-col justify-center whitespace-nowrap"
                        style={{
                          color: activeTab === tab.id ? 'white' : '#1D1D1F',
                          fontSize: '14px',
                          fontFamily: 'Work Sans',
                          fontWeight: '600',
                          lineHeight: activeTab === tab.id ? '15px' : '20px',
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
                        className="w-1/2 p-2 bg-[#F8F8FA] border-r border-[#ECECEC] text-left"
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
                          <div className="w-5 h-5 relative overflow-hidden">
                            <div 
                              className="absolute"
                              style={{
                                width: 16.25,
                                height: 16.67,
                                left: 1.67,
                                top: 1.67,
                                outline: '1.50px black solid',
                                outlineOffset: '-0.75px'
                              }}
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
                          <div className="w-6 h-6 relative overflow-hidden rotate-180">
                            <div 
                              className="absolute"
                              style={{
                                width: 19.50,
                                height: 20,
                                left: 2.50,
                                top: 2,
                                outline: '1.50px black solid',
                                outlineOffset: '-0.75px'
                              }}
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
                          className="p-2 bg-[#F8F8FA] border-t border-r border-[#ECECEC] align-top"
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
                          className="p-2 bg-[#F8F8FA] border-t border-[#ECECEC] align-top"
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

            {activeTab === "expert-take" && (
              <>
                <h4 className="[font-family:'Work_Sans',Helvetica] font-semibold text-black text-xl tracking-[-0.33px] leading-8">
                  Our Expert Take
                </h4>

                <div className="flex flex-col gap-[18px]">
                  <p style={{ 
                    color: '#333333', 
                    fontSize: '18px', 
                    fontFamily: 'Georgia', 
                    fontWeight: '400', 
                    lineHeight: '29.12px', 
                    wordWrap: 'break-word',
                    margin: 0
                  }}>
                    The Pets Best Elite policy is the top-scoring policy in our evaluation. It stands out for its competitive prices and robust coverage, including vet exam fees, dental illnesses, behavioral therapy and alternative therapies. You'll have access to a 24/7 pet telehealth line and the option to buy one of two different tiers of wellness plans to cover expenses such as annual vet exams, vaccinations, microchipping and neutering/spaying.
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
                    Pets Best's Essential and Plus policies also scored well in our analysis (4.9 stars each). They have differences in coverage and price.
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
                      Pets Best Pet Insurance Review
                    </span>
                  </p>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};