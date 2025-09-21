import React from "react";
import { GridRow, GridCol } from "../../../../components/ui/grid";
import { Separator } from "../../../../components/ui/separator";

const DonutChart: React.FC = () => {
  return (
    <div className="w-full h-full">
      <img 
        src="/Chart.svg" 
        alt="Methodology Chart" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

const leftColumnLegendItems = [
  {
    color: "bg-[#1a4c3f]",
    percentage: "(35%)",
    label: "Datapoint with 30 characters",
  },
  {
    color: "bg-[#34997d]",
    percentage: "(10%)",
    label: "Datapoint with 30 characters",
  },
  {
    color: "bg-[#003186]",
    percentage: "(10%)",
    label: "Datapoint with 30 characters",
  },
  {
    color: "bg-[#209be3]",
    percentage: "(10%)",
    label: "Datapoint with 30 characters",
  },
  {
    color: "bg-[#98d4f6]",
    percentage: "(10%)",
    label: "Datapoint with 30 characters",
  },
];

const rightColumnLegendItems = [
  {
    color: "bg-[#fec864]",
    percentage: "(5%)",
    label: "Datapoint with 30 characters",
  },
  {
    color: "bg-[#e77575]",
    percentage: "(5%)",
    label: "Datapoint with 30 characters",
  },
  {
    color: "bg-[#bc2739]",
    percentage: "(5%)",
    label: "Datapoint with 30 characters",
  },
  {
    color: "bg-[#7a8ec7]",
    percentage: "(5%)",
    label: "Datapoint with 30 characters",
  },
  {
    color: "bg-[#616a76]",
    percentage: "(5%)",
    label: "Datapoint with 30 characters",
  },
];

export const RatingsSection = (): JSX.Element => {
  return (
    <>
      <GridRow>
        <GridCol span={12}>
          <header className="mb-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 Methodology-header">
                <div className="flex items-center gap-2.5">
                  <h1 className="flex-1 font-forbes-media-label-LG-semibold font-[number:var(--forbes-media-label-LG-semibold-font-weight)] text-[#1e2125] text-[length:var(--forbes-media-label-LG-semibold-font-size)] tracking-[var(--forbes-media-label-LG-semibold-letter-spacing)] leading-[var(--forbes-media-label-LG-semibold-line-height)] [font-style:var(--forbes-media-label-LG-semibold-font-style)]">
                    Major Title (if required)
                  </h1>
                </div>

                <div className="flex items-center gap-2.5">
                  <h2 className="flex-1 font-forbes-media-label-MD-semibold font-[number:var(--forbes-media-label-MD-semibold-font-weight)] text-[#1e2125] text-[length:var(--forbes-media-label-MD-semibold-font-size)] tracking-[var(--forbes-media-label-MD-semibold-letter-spacing)] leading-[var(--forbes-media-label-MD-semibold-line-height)] [font-style:var(--forbes-media-label-MD-semibold-font-style)]">
                    Title
                  </h2>
                </div>

                <div className="flex flex-col items-start justify-center gap-1">
                  <p className="font-SEM-text-styles-body-lg-serif-regular font-[number:var(--SEM-text-styles-body-lg-serif-regular-font-weight)] text-[#383c43] text-[length:var(--SEM-text-styles-body-lg-serif-regular-font-size)] tracking-[var(--SEM-text-styles-body-lg-serif-regular-letter-spacing)] leading-[var(--SEM-text-styles-body-lg-serif-regular-line-height)] [font-style:var(--SEM-text-styles-body-lg-serif-regular-font-style)]">
                    The character limit for this first content block is 360
                    characters. For writers, a random sentence can help them get their
                    creative juices flowing. Since the topic of the sentence is
                    completely unknown, it forces the writer to be creative when the
                    sentence appears. There are a number of different ways a writer
                    can use the random sentence for creativity.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2.5">
                  <p className="flex-1 font-SEM-text-styles-body-lg-serif-regular font-[number:var(--SEM-text-styles-body-lg-serif-regular-font-weight)] text-[#383c43] text-[length:var(--SEM-text-styles-body-lg-serif-regular-font-size)] tracking-[var(--SEM-text-styles-body-lg-serif-regular-letter-spacing)] leading-[var(--SEM-text-styles-body-lg-serif-regular-line-height)] [font-style:var(--SEM-text-styles-body-lg-serif-regular-font-style)]">
                    The character limit for this first content block is 360
                    characters.
                  </p>
                </div>
              </div>
            </div>
          </header>
        </GridCol>
      </GridRow>

      <GridRow>
        <GridCol span={12} spanMd={5} spanLg={5} className="Methodology-chart">
          <div className="relative w-full max-w-[400px] h-[400px] mx-auto">
            <DonutChart />
          </div>
        </GridCol>

        <GridCol span={12} spanMd={7} spanLg={7}>
          <div className="flex flex-col gap-6 h-full Methodology-datapoints-group">
            <h3 className="font-forbes-media-heading-XL font-[number:var(--forbes-media-heading-XL-font-weight)] text-[#333333] text-[length:var(--forbes-media-heading-XL-font-size)] tracking-[var(--forbes-media-heading-XL-letter-spacing)] leading-[var(--forbes-media-heading-XL-line-height)] [font-style:var(--forbes-media-heading-XL-font-style)]">
              Star Ratings Methodology for Cash-Back Cards
            </h3>

            <GridRow>
              <GridCol span={12} spanMd={6}>
                <div className="flex flex-col gap-3">
                  {leftColumnLegendItems.map((item, index) => (
                    <div
                      key={`left-legend-${index}`}
                      className="flex flex-col gap-4"
                    >
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center gap-2.5">
                          <div
                            className={`${item.color} w-2 h-2 rounded`}
                          />
                        </div>

                        <div className="flex items-center gap-2 flex-1">
                          <div className="inline-flex h-4 items-center gap-2.5">
                            <span className="font-forbes-media-label-breadcrumb font-[number:var(--forbes-media-label-breadcrumb-font-weight)] text-[#7f8b9a] text-[length:var(--forbes-media-label-breadcrumb-font-size)] tracking-[var(--forbes-media-label-breadcrumb-letter-spacing)] leading-[var(--forbes-media-label-breadcrumb-line-height)] whitespace-nowrap [font-style:var(--forbes-media-label-breadcrumb-font-style)]">
                              {item.percentage}
                            </span>
                          </div>

                          <div className="flex items-center flex-1">
                            <span className="flex-1 font-forbes-media-label-XS-semibold font-[number:var(--forbes-media-label-XS-semibold-font-weight)] text-[#1e2125] text-[length:var(--forbes-media-label-XS-semibold-font-size)] tracking-[var(--forbes-media-label-XS-semibold-letter-spacing)] leading-[var(--forbes-media-label-XS-semibold-line-height)] [font-style:var(--forbes-media-label-XS-semibold-font-style)]">
                              {item.label}
                            </span>
                          </div>
                        </div>

                        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-xs">i</span>
                        </div>
                      </div>

                      <Separator className="w-full h-px" />
                    </div>
                  ))}
                </div>
              </GridCol>

              <GridCol span={12} spanMd={6}>
                <div className="flex flex-col gap-3">
                  {rightColumnLegendItems.map((item, index) => (
                    <div
                      key={`right-legend-${index}`}
                      className="flex flex-col gap-4"
                    >
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center gap-2.5">
                          <div
                            className={`${item.color} w-2 h-2 rounded`}
                          />
                        </div>

                        <div className="flex items-center gap-2 flex-1">
                          <div className="inline-flex h-4 items-center gap-2.5">
                            <span className="font-forbes-media-label-breadcrumb font-[number:var(--forbes-media-label-breadcrumb-font-weight)] text-[#7f8b9a] text-[length:var(--forbes-media-label-breadcrumb-font-size)] tracking-[var(--forbes-media-label-breadcrumb-letter-spacing)] leading-[var(--forbes-media-label-breadcrumb-line-height)] whitespace-nowrap [font-style:var(--forbes-media-label-breadcrumb-font-style)]">
                              {item.percentage}
                            </span>
                          </div>

                          <div className="flex items-center flex-1">
                            <span className="flex-1 font-forbes-media-label-XS-semibold font-[number:var(--forbes-media-label-XS-semibold-font-weight)] text-[#1e2125] text-[length:var(--forbes-media-label-XS-semibold-font-size)] tracking-[var(--forbes-media-label-XS-semibold-letter-spacing)] leading-[var(--forbes-media-label-XS-semibold-line-height)] [font-style:var(--forbes-media-label-XS-semibold-font-style)]">
                              {item.label}
                            </span>
                          </div>
                        </div>

                        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-xs">i</span>
                        </div>
                      </div>

                      <Separator className="w-full h-px" />
                    </div>
                  ))}
                </div>
              </GridCol>
            </GridRow>
          </div>
        </GridCol>
      </GridRow>
    </>
  );
};