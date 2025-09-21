import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { GridRow, GridCol } from "../../../../components/ui/grid";

export const TeamSection = (): JSX.Element => {
  const topEditors = [
    {
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Editor Name",
      title: "Editor Title",
      vertical: "Sample Vertical Name",
    },
    {
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Editor Name",
      title: "Editor Title",
      vertical: "Sample Vertical Name",
    },
  ];

  const expertiseItems = [
    "Expertise 1",
    "Expertise 2",
    "Expertise 3",
    "Expertise 4",
    "Expertise 5",
  ];

  return (
    <section className="w-full">
      <GridRow>
        <GridCol span={12}>
          <div className="flex flex-wrap items-center gap-12 mb-8">
            {topEditors.map((editor, index) => (
              <div key={index} className="inline-flex flex-col items-start gap-4">
                <Avatar className="w-[114.3px] h-[123.3px] rounded-full">
                  <AvatarImage
                    src={editor.image}
                    alt="Editor profile"
                    className="object-cover"
                  />
                </Avatar>

                <div className="inline-flex flex-col items-start gap-1.5">
                  <div className="[font-family:'Graphik-Semibold',Helvetica] leading-[16.8px] underline w-fit font-normal text-[#333333] text-sm tracking-[0] whitespace-nowrap">
                    {editor.name}
                  </div>

                  <div className="font-forbes-media-label-SM-normal leading-[var(--forbes-media-label-SM-normal-line-height)] w-fit font-[number:var(--forbes-media-label-SM-normal-font-weight)] text-[#333333] text-[length:var(--forbes-media-label-SM-normal-font-size)] tracking-[var(--forbes-media-label-SM-normal-letter-spacing)] whitespace-nowrap [font-style:var(--forbes-media-label-SM-normal-font-style)]">
                    {editor.title}
                  </div>

                  <div className="w-fit font-forbes-media-label-SM-normal font-[number:var(--forbes-media-label-SM-normal-font-weight)] text-[#333333] text-[length:var(--forbes-media-label-SM-normal-font-size)] tracking-[var(--forbes-media-label-SM-normal-letter-spacing)] leading-[var(--forbes-media-label-SM-normal-line-height)] whitespace-nowrap [font-style:var(--forbes-media-label-SM-normal-font-style)]">
                    {editor.vertical}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Card className="w-full bg-[#f4f5f8] border-0 p-8">
            <CardContent className="p-8">
              {/* Header section with title and social buttons */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1 flex flex-col gap-2">
                  <h2 
                    className="text-[#333333] text-xl font-semibold leading-[26px]"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    Editor Name Placeholder
                  </h2>
                  <div 
                    className="text-[#333333] text-sm font-normal leading-[18px]"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    Sample Vertical Name
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="px-3 py-2 bg-white border border-[#7a8ec7] rounded"
                  >
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="px-3 py-2 bg-white border border-[#7a8ec7] rounded"
                  >
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </Button>
                </div>
              </div>

              {/* Main content grid */}
              <div className="flex justify-between items-start gap-6">
                {/* Left column - Content */}
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex flex-col gap-[18px] mb-4">
                    <p 
                      className="text-[#333333] text-lg leading-[29.12px]"
                      style={{ fontFamily: 'Georgia', fontStyle: 'italic' }}
                    >
                      Caroline Lupini is the Managing Editor for the Credit Cards
                      and Travel Rewards verticals at Forbes Advisor. With a
                      decade of professional expertise in the credit card
                      industry, Caroline possesses a profound understanding of how
                      to leverage credit cards to amplify travel experiences.
                    </p>

                    <p 
                      className="text-[#333333] text-lg leading-[29.12px]"
                      style={{ fontFamily: 'Georgia', fontStyle: 'italic' }}
                    >
                      Although her journey began with a passion for travel hacking
                      during her college years, Caroline's focus quickly
                      evolved to mastering the nuances of credit card rewards,
                      enabling her to venture to over 110 countries without
                      breaking the bank.{" "}
                      <span 
                        className="underline cursor-pointer"
                        style={{ fontFamily: 'Georgia', fontStyle: 'normal' }}
                      >
                        Read more
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <div 
                      className="text-[#333333] text-sm font-bold leading-6"
                      style={{ fontFamily: 'Work Sans' }}
                    >
                      Expertise:
                    </div>
                    <div className="flex items-start gap-4 flex-wrap">
                      {expertiseItems.map((expertise, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[5px]"
                        >
                          <div className="w-[18px] h-[17px] relative">
                            <div className="w-[13.5px] h-[12.75px] bg-[#1e2125] absolute left-[2.25px] top-[2.12px]"></div>
                          </div>
                          <div 
                            className="text-[#1e2125] text-xs font-medium leading-[15px]"
                            style={{ fontFamily: 'Work Sans' }}
                          >
                            {expertise}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right column - Image */}
                <img
                  className="w-[362px] h-[294px] object-cover"
                  style={{ boxShadow: '3px 12px 11.3px rgba(0, 0, 0, 0.10)' }}
                  alt="Editor profile"
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
              </div>
            </CardContent>
          </Card>
        </GridCol>
      </GridRow>
    </section>
  );
};