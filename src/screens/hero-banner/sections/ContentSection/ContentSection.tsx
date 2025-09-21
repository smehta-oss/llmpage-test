import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { CustomArrowUpRightIcon } from "../../../../assets/icons";
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
    <section className="flex z-[1] w-full relative flex-col items-start gap-6 pt-[136px]">
      <div className="flex flex-col items-center px-0 py-6 relative w-full bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(245,245,247,1)_100%)]">
        <div className="w-full max-w-[1440px] mx-auto px-[90px]">
          <div className="grid grid-cols-12 gap-5 w-full">
            <div className="col-span-12 flex flex-col items-start gap-6">
          <div className="flex flex-col w-full items-start gap-4 relative">
            <Breadcrumb>
              <BreadcrumbList className="flex items-center gap-1">
                {breadcrumbItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href={item.href}
                        className="[font-family:'Graphik-Regular',Helvetica] font-normal text-[#333333] text-xs tracking-[0] leading-[18px] underline"
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

            <div className="flex flex-col items-start gap-3 relative w-full">
              <h1 className="w-full text-[#333333] text-[56px] font-bold leading-[64px] break-words" style={{ fontFamily: 'Schnyder S' }}>
                Best Pet Insurance Companies of 2025
              </h1>

              <p className="w-full font-fixed-styles-utility-medium-regular font-[number:var(--fixed-styles-utility-medium-regular-font-weight)] text-[#333333] text-[length:var(--fixed-styles-utility-medium-regular-font-size)] tracking-[var(--fixed-styles-utility-medium-regular-letter-spacing)] leading-[var(--fixed-styles-utility-medium-regular-line-height)] [font-style:var(--fixed-styles-utility-medium-regular-font-style)]">
                Authored &amp; Verified: Sep 12, 2025, 9:05pm
              </p>
            </div>
          </div>

        <div className="grid grid-cols-12 gap-5 w-full">
          <div className="col-span-12 lg:col-span-7 flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-4 relative w-full">
                <div className="flex items-center gap-px relative w-full">
                  <Badge className="inline-flex h-12 items-center justify-center gap-1.5 pl-3 pr-4 py-2.5 bg-black text-white hover:bg-black rounded-none">
                    <img
                      className="w-[15.4px] h-5 object-contain flex-shrink-0"
                      alt="Asset"
                      src="/Asset 45 1.svg"
                    />
                    <span className="[font-family:'Work_Sans',Helvetica] font-bold text-sm tracking-[1.00px] leading-[21px]">
                      HOW WE ANALYZED
                    </span>
                  </Badge>
                  <img
                    className="flex-1 h-px object-cover"
                    alt="Vector"
                    src="/vector-25.svg"
                  />
                </div>

                <p className="[font-family:'Work_Sans',Helvetica] font-normal text-black text-sm tracking-[0] leading-6">
                  We reviewed 900,024 pet insurance rates across the U.S to
                  provide you with a comprehensive report covering 34 categories
                  and surveying 2,600 pet parents covering 300 breeds.{" "}
                  <span className="underline cursor-pointer">
                    Read our methodology
                  </span>
                </p>
              </div>

              <Card className="w-full bg-[#ffffffcc] rounded-lg border-none shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0px_rgba(255,255,255,0.48),inset_1px_0_0px_rgba(255,255,255,0.38),inset_0_-1px_1px_rgba(0,0,0,0.24),inset_-1px_0_1px_rgba(0,0,0,0.19)] backdrop-blur-sm backdrop-brightness-[118.0%] backdrop-saturate-[124.0%] backdrop-contrast-[118.0%] [-webkit-backdrop-filter:blur(4px)_brightness(118.0%)_saturate(124.0%)_contrast(118.0%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <CardContent className="flex items-center justify-center gap-2.5 pt-5 pb-0 px-[200px]">
                  <Button
                    variant="ghost"
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

          <div className="col-span-12 lg:col-span-5">
            <div className="w-full h-[230px] rounded-3xl bg-[url(/frame-2147236889.png)] bg-cover bg-[50%_50%]" />
          </div>
        </div>

        <div className="flex flex-col w-full items-start gap-4 relative">
          <div className="inline-flex items-center gap-10 relative flex-wrap">
            {authors.map((author, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 relative"
              >
                <img
                  className="w-10 h-10 rounded-3xl object-cover"
                  alt="Author"
                  src={author.image}
                />
                <div className="inline-flex flex-col items-start relative">
                  <div className="inline-flex items-center gap-0.5 relative">
                    <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-[#333333] text-sm tracking-[0] leading-[19.6px]">
                      {author.type}
                    </span>
                    <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-[#333333] text-sm tracking-[0] leading-[19.6px] underline">
                      {author.name}
                    </span>
                  </div>
                  <span className="[font-family:'Work_Sans',Helvetica] font-normal text-[#333333] text-xs tracking-[0] leading-4">
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

      <div className="w-full pt-6 pb-8 border-b border-solid border-[#eceff3]">
        <div className="w-full max-w-[1440px] mx-auto px-[90px]">
          <div className="grid grid-cols-12 gap-5 w-full">
            <div className="col-span-12 flex flex-col items-start gap-6">
              <div className="text-black text-xl font-bold leading-[26px] break-words" style={{ fontFamily: 'Work Sans' }}>
                Popular queries:
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-3">
                <div className="w-full flex flex-wrap gap-3">
                  <div className="w-fit py-2 px-2 bg-white shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)] rounded-lg border border-solid border-[#f4f5f8] justify-center items-center gap-2.5 flex">
                    <div className="justify-center flex flex-col text-[#606f7f] text-xs leading-[18px] whitespace-nowrap" style={{ fontFamily: 'Work Sans', fontWeight: '400' }}>
                      Does pet insurance cover both dogs and cats under the same plan?
                    </div>
                    <div className="w-5 h-5 relative flex-shrink-0">
                      <CustomArrowUpRightIcon />
                    </div>
                  </div>
                  <div className="w-fit py-2 px-2 bg-white shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)] rounded-lg border border-solid border-[#f4f5f8] justify-center items-center gap-2.5 flex">
                    <div className="justify-center flex flex-col text-[#606f7f] text-xs leading-[18px] whitespace-nowrap" style={{ fontFamily: 'Work Sans', fontWeight: '400' }}>
                      Does pet insurance cover vaccinations and annual checkups?
                    </div>
                    <div className="w-5 h-5 relative flex-shrink-0">
                      <CustomArrowUpRightIcon />
                    </div>
                  </div>
                  <div className="w-fit py-2 px-2 bg-white shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)] rounded-lg border border-solid border-[#f4f5f8] justify-center items-center gap-2.5 flex">
                    <div className="justify-center flex flex-col text-[#606f7f] text-xs leading-[18px] whitespace-nowrap" style={{ fontFamily: 'Work Sans', fontWeight: '400' }}>
                      Are pre-existing conditions covered?
                    </div>
                    <div className="w-5 h-5 relative flex-shrink-0">
                      <CustomArrowUpRightIcon />
                    </div>
                  </div>
                  <div className="w-fit py-2 px-2 bg-white shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)] rounded-lg border border-solid border-[#f4f5f8] justify-center items-center gap-2.5 flex">
                    <div className="justify-center flex flex-col text-[#606f7f] text-xs leading-[18px] whitespace-nowrap" style={{ fontFamily: 'Work Sans', fontWeight: '400' }}>
                      Cheapest pet insurance for a puppy
                    </div>
                    <div className="w-5 h-5 relative flex-shrink-0">
                      <CustomArrowUpRightIcon />
                    </div>
                  </div>
                  <div className="w-fit py-2 px-2 bg-white shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)] rounded-lg border border-solid border-[#f4f5f8] justify-center items-center gap-2.5 flex">
                    <div className="justify-center flex flex-col text-[#606f7f] text-xs leading-[18px] whitespace-nowrap" style={{ fontFamily: 'Work Sans', fontWeight: '400' }}>
                      Which coverage includes dental?
                    </div>
                    <div className="w-5 h-5 relative flex-shrink-0">
                      <CustomArrowUpRightIcon />
                    </div>
                  </div>
                  <div className="w-fit py-2 px-2 bg-white shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)] rounded-lg border border-solid border-[#f4f5f8] justify-center items-center gap-2.5 flex">
                    <div className="justify-center flex flex-col text-[#606f7f] text-xs leading-[18px] whitespace-nowrap" style={{ fontFamily: 'Work Sans', fontWeight: '400' }}>
                      Are pre-existing conditions covered?
                    </div>
                    <div className="w-5 h-5 relative flex-shrink-0">
                      <CustomArrowUpRightIcon />
                    </div>
                  </div>
                  <div className="w-fit py-2 px-2 bg-white shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)] rounded-lg border border-solid border-[#f4f5f8] justify-center items-center gap-2.5 flex">
                    <div className="justify-center flex flex-col text-[#606f7f] text-xs leading-[18px] whitespace-nowrap" style={{ fontFamily: 'Work Sans', fontWeight: '400' }}>
                      How are premiums calculated for pet insurance?
                    </div>
                    <div className="w-5 h-5 relative flex-shrink-0">
                      <CustomArrowUpRightIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};