// Consumer Sentiment Data for each insurance provider
export const consumerSentimentData = {
  chewy: {
    rating: 8.2,
    ratingLabel: "Good",
    ratingBg: "bg-[#D1FAE5]",
    strokeDashoffset: 35,
    gradientId: "gradient3",
    insightsAnalyzed: "9,350",
    highlightTitle: "Fast claims and immediate coverage",
    highlightDesc: "Users ranked Chewy #1 in claims processing speed across 6k+ reviews",
    description: "Customers love Chewy's instant coverage and simple 90% reimbursement rate. Powered by Trupanion, the claims process is notably fast. Some users mention the lack of wellness plan options compared to competitors...",
    rankings: [
      { text: "Ranked #1 in Claims Speed", type: "green" },
      { text: "#1 in Ease of Use", type: "green" },
      { text: "#3 in Coverage", type: "yellow" },
      { text: "#5 in Wellness Options", type: "red" }
    ],
    preferred: {
      count: "5.1k+",
      tags: ["Fast Payments (1100+)", "No Waiting Period (850+)", "Simple Plans (620+)"]
    },
    notPreferred: {
      count: "1.2k+",
      tags: ["Limited Deductible Options (300+)", "No Wellness Plans (250+)", "Fixed Rate Only (180+)"]
    }
  },
  embrace: {
    rating: 7.4,
    ratingLabel: "Good",
    ratingBg: "bg-[#D1FAE5]",
    strokeDashoffset: 69,
    gradientId: "gradient4",
    insightsAnalyzed: "7,180",
    highlightTitle: "Diminishing deductible rewards loyalty",
    highlightDesc: "Users ranked Embrace #1 in customer rewards programs across 3.5k+ reviews",
    description: "Customers appreciate Embrace's unique diminishing deductible feature that rewards claim-free years. The Wellness Rewards program is flexible. However, some find the 6-month orthopedic waiting period lengthy...",
    rankings: [
      { text: "Ranked #1 in Rewards", type: "green" },
      { text: "#2 in Customer Service", type: "green" },
      { text: "#3 in Premiums", type: "yellow" },
      { text: "#4 in Waiting Periods", type: "yellow" }
    ],
    preferred: {
      count: "3.8k+",
      tags: ["Diminishing Deductible (920+)", "Wellness Rewards (710+)", "Responsive Support (540+)"]
    },
    notPreferred: {
      count: "2.1k+",
      tags: ["Long Waiting Periods (650+)", "Premium Increases (480+)", "Limited Vet Network (220+)"]
    }
  },
  spot: {
    rating: 7.1,
    ratingLabel: "Good",
    ratingBg: "bg-[#D1FAE5]",
    strokeDashoffset: 79,
    gradientId: "gradient5",
    insightsAnalyzed: "6,890",
    highlightTitle: "Comprehensive base coverage",
    highlightDesc: "Users ranked Spot #1 in included coverage benefits across 4.2k+ reviews",
    description: "Customers value Spot's inclusion of vet exam fees in the base policy, which many competitors charge extra for. The preventive care add-ons are reasonably priced. Some users report slower claim processing compared to top competitors...",
    rankings: [
      { text: "Ranked #1 in Base Benefits", type: "green" },
      { text: "#2 in Value", type: "green" },
      { text: "#4 in Claims Processing", type: "yellow" },
      { text: "#4 in Customer Support", type: "yellow" }
    ],
    preferred: {
      count: "3.4k+",
      tags: ["Includes Exam Fees (780+)", "Good Value (690+)", "Unlimited Coverage (510+)"]
    },
    notPreferred: {
      count: "2.3k+",
      tags: ["Slow Claims (720+)", "Limited App Features (390+)", "Support Response Time (280+)"]
    }
  },
  lemonade: {
    rating: 6.9,
    ratingLabel: "Fair",
    ratingBg: "bg-[#FEF3C7]",
    strokeDashoffset: 88,
    gradientId: "gradient6",
    insightsAnalyzed: "5,620",
    highlightTitle: "Modern app and AI-powered service",
    highlightDesc: "Users ranked Lemonade #1 in technology and user experience across 3k+ reviews",
    description: "Customers praise Lemonade's sleek mobile app and fast policy setup. The AI-powered claims process is innovative. However, users note limited coverage compared to traditional insurers and missing features like end-of-life expenses...",
    rankings: [
      { text: "Ranked #1 in App Design", type: "green" },
      { text: "#3 in Sign-up Speed", type: "yellow" },
      { text: "#5 in Coverage Options", type: "red" },
      { text: "#6 in Customer Service", type: "red" }
    ],
    preferred: {
      count: "2.9k+",
      tags: ["Modern App (850+)", "Fast Sign-up (620+)", "Transparent Pricing (470+)"]
    },
    notPreferred: {
      count: "2.8k+",
      tags: ["Limited Coverage (890+)", "No Euthanasia Coverage (560+)", "Bot Support (340+)"]
    }
  }
};
