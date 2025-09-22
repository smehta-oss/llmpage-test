import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

export const MainContentSection = (): JSX.Element => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterOptions = [
    {
      id: "all",
      label: "All Providers (10)",
      icon: "/-filled-circle.svg",
    },
    {
      id: "coverage",
      label: "Best Coverage (3)",
      icon: "/-line-circle.svg",
    },
    {
      id: "pricing",
      label: "Best Pricing (2)",
      icon: "/-line-circle.svg",
    },
    {
      id: "experience",
      label: "Best Consumer Experience (3)",
      icon: "/-line-circle.svg",
    },
  ];

  return (
    <section id="best-providers" className="grid grid-cols-12 gap-5">
      <header className="col-span-12 lg:col-span-8 flex flex-col gap-2">
        <h1 style={{
          color: 'black',
          fontSize: 40,
          fontFamily: 'Schnyder S',
          fontWeight: '700',
          lineHeight: '48px',
          wordWrap: 'break-word'
        }}>
          The Best Pet Insurance Plans In Detail
        </h1>
      </header>

      <nav className="col-span-12 flex flex-wrap items-center gap-4">
        {filterOptions.map((option) => (
          <Button
            key={option.id}
            onClick={() => setSelectedFilter(option.id)}
            className={`inline-flex h-14 items-center gap-2 px-4 py-2 rounded-[40px] ${
              selectedFilter === option.id
                ? "bg-black text-white shadow-SEM-shadows-4dp"
                : "bg-[#fafafb] text-wwwapplecomshark shadow-[inset_0px_0px_0.5px_#0000001c] rounded-[28px]"
            }`}
            variant="ghost"
          >
            <img
              className="relative w-6 h-6"
              alt={
                selectedFilter === option.id ? "Filled circle" : "Line circle"
              }
              src={option.icon}
            />

            <span className="relative w-fit [font-family:'Work_Sans',Helvetica] font-semibold text-sm text-center tracking-[-0.37px] leading-5 whitespace-nowrap">
              {option.label}
            </span>

            {selectedFilter === option.id && (
              <div className="absolute top-[22px] left-[22px] w-3 h-3 bg-[#1e2125] rounded-md" />
            )}
          </Button>
        ))}
      </nav>
    </section>
  );
};
