import React from "react";
import { GridRow, GridCol } from "../../../../components/ui/grid";
import { RatingsSection } from "../RatingsSection/RatingsSection";
import { MethodologySection } from "../MethodologySection/MethodologySection";
import { TeamSection } from "../TeamSection/TeamSection";

interface EvaluationSectionProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface NavigationTab {
  id: string;
  label: string;
  width: string;
}

interface StatisticData {
  number: string;
  title: string;
  description: string;
}

const NAVIGATION_TABS: NavigationTab[] = [
  { id: "overview", label: "Overview", width: "w-[132px]" },
  { id: "methodology", label: "Our Methodology", width: "w-[192px]" },
  { id: "research", label: "Data Research", width: "w-[176px]" },
  { id: "team", label: "Our Team", width: "w-[142px]" },
];

const STATISTICS_DATA: StatisticData[] = [
  {
    number: "100+",
    title: "Sample Category Name With 40 characters.",
    description: "This is a sample sentence with a character limit set at 84 characters as max-limit..",
  },
  {
    number: "1,300",
    title: "Pet Owners Surveyed",
    description: "This is a sample sentence with a character limit set at 84 characters as max-limit..",
  },
  {
    number: "100+",
    title: "Sample Category Name With 40 characters.",
    description: "This is a sample sentence with a character limit set at 84 characters as max-limit..",
  },
  {
    number: "100+",
    title: "Sample Category Name With 40 characters.",
    description: "This is a sample sentence with a character limit set at 84 characters as max-limit..",
  },
];

const TabButton: React.FC<{
  tab: NavigationTab;
  isActive: boolean;
  onClick: () => void;
}> = ({ tab, isActive, onClick }) => {
  if (isActive) {
    return (
      <div
        onClick={onClick}
        className={`cursor-pointer h-14 bg-black shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)] rounded-[40px] justify-center items-center gap-2 flex ${tab.width}`}
      >
        <div className="px-4 py-2">
          <div className="text-center text-white text-base font-work-sans font-semibold leading-[15px] break-words">
            {tab.label}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer h-14 bg-[#FAFAFB] shadow-[0px_0px_0.5px_rgba(0,0,0,0.11)_inset] rounded-[28px] flex-col justify-start items-start gap-2 inline-flex ${tab.width}`}
    >
      <div className="h-14 px-4 justify-start items-center inline-flex">
        <div className="justify-start items-center flex">
          <div className="w-[38px] h-6 pr-[14px] inline-flex flex-col justify-start items-start">
            <div className="w-6 h-6 overflow-hidden flex flex-col justify-center items-start">
              <div className="w-6 flex-1 relative">
                <div className="w-[22.60px] h-[22.60px] left-[0.70px] top-[0.70px] absolute border border-[#1D1D1F]" />
                <div className="w-[10px] h-[10px] left-[7px] top-[7px] absolute bg-[#1D1D1F]" />
              </div>
            </div>
          </div>
          <div className="text-center justify-center flex flex-col text-[#1D1D1F] text-sm font-work-sans font-semibold leading-5 break-words">
            {tab.label}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatisticCard: React.FC<{ stat: StatisticData }> = ({ stat }) => (
  <div className="flex-1 min-w-[144px] flex-col justify-start items-start gap-3 inline-flex">
    <div className="self-stretch text-white text-2xl leading-[29px] break-words font-schnyder-s">
      {stat.number}
    </div>
    <div className="self-stretch flex-col justify-start items-start gap-3 flex">
      <div className="self-stretch text-white text-sm font-semibold leading-6 break-words font-work-sans">
        {stat.title}
      </div>
      <div className="self-stretch text-white text-xs leading-5 break-words font-work-sans">
        {stat.description}
      </div>
    </div>
  </div>
);

const OverviewSection: React.FC = () => (
  <div className="methodology-overview mt-6">
    <div className="flex flex-col gap-6">
      <div 
        className="Overview-text"
        data-show-read-more="false" 
        style={{
          width: '100%', 
          height: '100%', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'flex-start', 
          gap: '4px', 
          display: 'inline-flex'
        }}
      >
        <div style={{
          alignSelf: 'stretch', 
          color: 'var(--Color-Foreground-fg-body, #383C43)', 
          fontSize: '18px', 
          fontFamily: 'Georgia', 
          fontWeight: '400', 
          lineHeight: '26px', 
          wordWrap: 'break-word'
        }}>
          To find the best pet insurance, we collected data and scored each
          pet insurance company across several categories. Only pet insurers
          offering annual maximum coverage of $100,000 or unlimited were
          scored so that comparisons were fair among companies. If a company
          has more than one top-scoring policy, we show only the policy with
          the highest score.
        </div>
      </div>
    </div>

    <div className="methodology-datapoint-block Overview-datapoints">
      <div className="w-full px-6 py-8 relative flex flex-col justify-start items-start gap-10 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="w-full h-[295px] absolute left-0 top-0 overflow-hidden">
          <img 
            className="w-[1059px] h-[704px] absolute left-[-19px] top-[-238px]" 
            src="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Background"
          />
          <div className="w-full h-[295px] absolute left-0 top-0 bg-black/60 backdrop-blur-[6px]" />
        </div>

        {/* Header Section */}
        <div className="self-stretch justify-between items-center inline-flex flex-wrap relative z-10">
          <div className="max-w-[600px] min-w-[272px] text-white text-2xl font-semibold leading-[30px] break-words font-work-sans">
            How We Evaluate Pet Insurance Providers
          </div>
          <div className="justify-end items-start gap-6 flex flex-wrap">
            <div className="w-[196px] justify-start items-center gap-2 flex">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute" />
                <div className="w-[18px] h-[18px] left-[3px] top-[3px] absolute bg-white" />
              </div>
              <div className="flex-1 justify-center items-center flex">
                <div className="flex-1 justify-center flex flex-col text-white text-sm font-semibold leading-6 break-words font-work-sans">
                  EXPERT REVIEWED
                </div>
              </div>
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute" />
                <div className="w-[18px] h-[18px] left-[3px] top-[3px] absolute bg-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="self-stretch justify-start items-start gap-5 inline-flex flex-wrap relative z-10">
          {STATISTICS_DATA.map((stat, index) => (
            <StatisticCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const EvaluationSection: React.FC<EvaluationSectionProps> = ({ 
  activeSection, 
  setActiveSection 
}) => {
  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection />;
      case "methodology":
        return (
          <>
            <RatingsSection />
            <MethodologySection />
          </>
        );
      case "research":
        return <div>Data Research content coming soon...</div>;
      case "team":
        return <TeamSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <section className="w-full border-t [border-top-style:solid] border-[#ced4db]">
      <GridRow>
        <GridCol span={12}>
          <header className="mb-8 pt-16">
            <h1 
              style={{
                justifyContent: 'center', 
                display: 'flex', 
                flexDirection: 'column', 
                color: 'black', 
                fontSize: 40, 
                fontFamily: 'Schnyder S', 
                fontWeight: '700', 
                lineHeight: '48px', 
                wordWrap: 'break-word'
              }}
            >
              How We Found The Best Pet Insurance Companies
            </h1>
          </header>
          
          <nav className="w-full justify-start items-center gap-4 inline-flex">
            {NAVIGATION_TABS.map((tab) => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={activeSection === tab.id}
                onClick={() => setActiveSection(tab.id)}
              />
            ))}
          </nav>
        </GridCol>
      </GridRow>

      <GridRow className="mt-8">
        <GridCol span={12}>
          {renderContent()}
        </GridCol>
      </GridRow>
    </section>
  );
};