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

export const PetsBestCard2 = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("expert-take");

  return (
    <div className="grid grid-cols-12 gap-5">
      <Card className="col-span-12 p-6 bg-white rounded-3xl border-2 border-[#F3C060]">
        <CardContent className="p-0 space-y-6">
          <header className="flex items-center gap-2">
            <h2 className="[font-family:'Work_Sans',Helvetica] font-bold text-black text-2xl leading-8 underline">
              Figo
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

          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap items-center gap-4 max-w-[968px]">
            <div id="product-card-navigation" className="flex flex-wrap items-center gap-4 w-full max-w-[968px]">
              {tabItems.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`navigation-button h-14 px-4 py-2 rounded-[40px] ${
                    activeTab === tab.id
                      ? "bg-[#1d1d1f] text-white shadow-SEM-shadows-4dp flex-grow"
                      : "bg-[#f8f8fa] text-[#1d1d1f] flex-shrink-0"
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
                    Figo stood out in our evaluation due to its solid coverage in the base plan and the options to upgrade your plan via "Powerups." Figo's Powerups include hard-to-find coverage for expenses such as advertising and rewards if your pet is lost or stolen and up to $250 in final respects coverage (including burial and cremation expenses). Also included: up to $10,000 in liability coverage if your pet damages someone else's property, boarding expenses if you are hospitalized and vet exam fees. You're not likely to find all of this coverage at other top pet insurers.
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
                      Figo Pet Insurance Review
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
