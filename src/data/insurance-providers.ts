// Insurance provider data - extracted from components for better maintainability
export interface InsurancePlan {
  provider: string;
  category: string;
  description: string;
  logoSrc: string;
  petImageSrc: string;
  petImageClasses: string;
  isPopular: boolean;
}

export interface CostData {
  provider: string;
  dogCost: string;
  catCost: string;
  applyNowUrl: string;
}

export interface PlanDetails {
  provider: string;
  ageRestrictions: string;
  waitingPeriods: string;
  endOfLife: string;
  vetExamFees: string;
  microchipping: string;
  applyNowUrl: string;
}

export interface UserOpinion {
  provider: string;
  csiRating: string;
  likelyToRecommend: string;
  positiveComments: string;
  negativeComments: string;
  applyNowUrl: string;
}

export interface ClaimsData {
  provider: string;
  claimsSatisfaction: string;
  overallSatisfaction: string;
  applyNowUrl: string;
}

// Insurance plans data
export const INSURANCE_PLANS: InsurancePlan[] = [
  {
    provider: "Pets Best",
    category: "Best\noverall",
    description: "If you care about getting it right without over-optimizing, then this pick balances price, coverage, and support for a no-regrets choice.",
    logoSrc: "/image-10-3.png",
    petImageSrc: "/shutterstock-2324170407-1.png",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px]",
    isPopular: false,
  },
  {
    provider: "Figo",
    category: "Best for all-round\ncoverage",
    description: "If you care about fewer exclusions and higher ceilings, then this plan offers high limits and options like dental/orthopedic.",
    logoSrc: "/LogoFigo.png",
    petImageSrc: "/Dog2.png",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px]",
    isPopular: false,
  },
  {
    provider: "Chewy",
    category: "Best for\nwellness",
    description: "If you care about budgeting routine care, then this plan bundles exams, vaccines, and preventatives.",
    logoSrc: "/LogoChewy.png",
    petImageSrc: "/shutterstock-2397244269.png",
    petImageClasses: "absolute top-1 right-2 w-[85px] h-[91px]",
    isPopular: true,
  },
  // Duplicate the first two cards as requested
  {
    provider: "Pets Best",
    category: "Best\noverall",
    description: "If you care about getting it right without over-optimizing, then this pick balances price, coverage, and support for a no-regrets choice.",
    logoSrc: "/image-10-3.png",
    petImageSrc: "/shutterstock-2324170407-1-2.png",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px]",
    isPopular: false,
  },
  {
    provider: "Figo",
    category: "Best for all-round\ncoverage",
    description: "If you care about fewer exclusions and higher ceilings, then this plan offers high limits and options like dental/orthopedic.",
    logoSrc: "/LogoFigo.png",
    petImageSrc: "/Dog2.png",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px]",
    isPopular: false,
  },
];

// Cost comparison data
export const COST_DATA: CostData[] = [
  { provider: "Pets Best", dogCost: "$52", catCost: "$36", applyNowUrl: "https://petsbest.com/apply" },
  { provider: "Figo", dogCost: "$79", catCost: "$53", applyNowUrl: "https://figo.pet/apply" },
  { provider: "Chewy", dogCost: "$89", catCost: "$62", applyNowUrl: "https://chewy.com/insurance/apply" },
  { provider: "Embrace", dogCost: "$75", catCost: "$53", applyNowUrl: "https://embracepetinsurance.com/apply" },
  { provider: "Spot", dogCost: "$93", catCost: "$65", applyNowUrl: "https://spotpetinsurance.com/apply" },
  { provider: "Lemonade", dogCost: "$48", catCost: "$34", applyNowUrl: "https://lemonade.com/pet/apply" },
];

// Plan details data
export const PLAN_DETAILS_DATA: PlanDetails[] = [
  {
    provider: "Pets Best",
    ageRestrictions: "7 weeks and older",
    waitingPeriods: "3 days for accidents, 14 days for illnesses and 6 months for cruciate ligament conditions",
    endOfLife: "Included",
    vetExamFees: "Included",
    microchipping: "Included",
    applyNowUrl: "https://petsbest.com/apply",
  },
  {
    provider: "Figo",
    ageRestrictions: "8 weeks and older",
    waitingPeriods: "1 day for accidents, 14 days for illnesses and 6 months for orthopedic conditions (can be waived with an orthopedic waiver within the first 30 days of the policy)",
    endOfLife: "Included",
    vetExamFees: "Included",
    microchipping: "Included",
    applyNowUrl: "https://figo.pet/apply",
  },
  {
    provider: "Chewy",
    ageRestrictions: "None",
    waitingPeriods: "5 days for accidents, 14 days for illnesses; no special waiting period for orthopedic conditions",
    endOfLife: "Not included",
    vetExamFees: "Available as an add on",
    microchipping: "Not included",
    applyNowUrl: "https://chewy.com/insurance/apply",
  },
  {
    provider: "Embrace",
    ageRestrictions: "6 weeks to 15 years",
    waitingPeriods: "Accident coverage begins at 12:01 a.m. ET the day after you purchase your policy; 14 days for illnesses; 6 months for orthopedic conditions (can be reduced to 14 days with an orthopedic exam)",
    endOfLife: "Included",
    vetExamFees: "Available as an add on",
    microchipping: "Included",
    applyNowUrl: "https://embracepetinsurance.com/apply",
  },
  {
    provider: "Spot",
    ageRestrictions: "8 weeks and older",
    waitingPeriods: "14 days for accidents and illnesses; no extended waiting period for orthopedic conditions",
    endOfLife: "Included",
    vetExamFees: "Included",
    microchipping: "Included",
    applyNowUrl: "https://spotpetinsurance.com/apply",
  },
  {
    provider: "Lemonade",
    ageRestrictions: "Upper limit based on breed",
    waitingPeriods: "Accident coverage begins at 12:01 a.m. the day after you purchase a plan; 14 days for illnesses; 30 days for orthopedic conditions",
    endOfLife: "Included",
    vetExamFees: "Available as an add on",
    microchipping: "Included",
    applyNowUrl: "https://lemonade.com/pet/apply",
  },
];

// User opinion data
export const USER_OPINION_DATA: UserOpinion[] = [
  {
    provider: "Pets Best",
    csiRating: "5.5/10",
    likelyToRecommend: "Somewhat likely",
    positiveComments: "Loved it, easy to change",
    negativeComments: "Terrible customer service",
    applyNowUrl: "https://petsbest.com/apply",
  },
  {
    provider: "Figo",
    csiRating: "9.3/10",
    likelyToRecommend: "Very likely",
    positiveComments: "Good prices",
    negativeComments: "Slow processing",
    applyNowUrl: "https://figo.pet/apply",
  },
  {
    provider: "Chewy",
    csiRating: "4.8/10",
    likelyToRecommend: "Somewhat likely",
    positiveComments: "Easy to sign up",
    negativeComments: "Bad customer service",
    applyNowUrl: "https://chewy.com/insurance/apply",
  },
  {
    provider: "Embrace",
    csiRating: "2.8/10",
    likelyToRecommend: "Not likely",
    positiveComments: "-",
    negativeComments: "Too expensive",
    applyNowUrl: "https://embracepetinsurance.com/apply",
  },
  {
    provider: "Spot",
    csiRating: "8.7/10",
    likelyToRecommend: "Very likely",
    positiveComments: "Low price",
    negativeComments: "Price changes",
    applyNowUrl: "https://spotpetinsurance.com/apply",
  },
  {
    provider: "Lemonade",
    csiRating: "7.3/10",
    likelyToRecommend: "Very likely",
    positiveComments: "Fast claims payment",
    negativeComments: "-",
    applyNowUrl: "https://lemonade.com/pet/apply",
  },
];

// Claims satisfaction data
export const CLAIMS_DATA: ClaimsData[] = [
  { provider: "Pets Best", claimsSatisfaction: "Somewhat satisfied", overallSatisfaction: "Somewhat satisfied", applyNowUrl: "https://petsbest.com/apply" },
  { provider: "Figo", claimsSatisfaction: "Very satisfied", overallSatisfaction: "Very satisfied", applyNowUrl: "https://figo.pet/apply" },
  { provider: "Chewy", claimsSatisfaction: "Somewhat satisfied", overallSatisfaction: "Not satisfied", applyNowUrl: "https://chewy.com/insurance/apply" },
  { provider: "Embrace", claimsSatisfaction: "Very satisfied", overallSatisfaction: "Somewhat satisfied", applyNowUrl: "https://embracepetinsurance.com/apply" },
  { provider: "Spot", claimsSatisfaction: "Not satisfied", overallSatisfaction: "Somewhat satisfied", applyNowUrl: "https://spotpetinsurance.com/apply" },
  { provider: "Lemonade", claimsSatisfaction: "Somewhat satisfied", overallSatisfaction: "Not satisfied", applyNowUrl: "https://lemonade.com/pet/apply" },
];
