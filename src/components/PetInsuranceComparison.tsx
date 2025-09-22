import React, { lazy, Suspense } from "react";
import { SectionTitle, SectionDescription, CTAButton, TableCell } from "./common";
import { COST_DATA, PLAN_DETAILS_DATA, USER_OPINION_DATA, CLAIMS_DATA } from "../data/insurance-providers";

// Lazy load the Fold component for better performance
const Fold = lazy(() => import("../screens/Fold/Fold").then(module => ({ default: module.Fold })));

// Interface for component props
interface PetInsuranceComparisonProps {
  onCTAClick?: () => void;
}

// Main component
export const PetInsuranceComparison: React.FC<PetInsuranceComparisonProps> = ({ onCTAClick }) => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-5">
            <main className="col-span-12 flex flex-col items-start gap-12 bg-white py-6 md:py-0 w-full max-w-[1016px] mx-auto">
            <div className="flex flex-col items-start gap-10 w-full">
              
              {/* Pet Insurance Cost Section */}
              <section id="insurance-cost" className="flex flex-col items-start gap-6 mt-6 pt-10 w-full border-t border-[#ced4db]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <SectionTitle>Pet Insurance Cost for Dogs and Cats</SectionTitle>
                    <SectionDescription>
                      The table below shows the average monthly cost for the leading pet insurance providers for dogs and cats.
                    </SectionDescription>
                  </div>
                </div>
                
                <div className="w-full overflow-x-auto">
                  <table className="w-full table-fixed border-collapse">
                    <thead>
                      <tr>
                        <TableCell isHeader className="w-[25%] rounded-tl-[8px] border-[#ededed]">Provider</TableCell>
                        <TableCell isHeader className="w-[37.5%]">Average Monthly for Dogs</TableCell>
                        <TableCell isHeader className="w-[37.5%] rounded-tr-[16px]">Average Monthly for Cats</TableCell>
                      </tr>
                    </thead>
                    <tbody>
                      {COST_DATA.map((row, index) => (
                        <tr key={row.provider}>
                          <TableCell isProvider>{row.provider}</TableCell>
                          <TableCell>{row.dogCost}</TableCell>
                          <TableCell>{row.catCost}</TableCell>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <CTAButton onClick={onCTAClick} />
              </section>

              {/* Pet Insurance Plan Details Section */}
              <section id="plan-details" className="flex flex-col items-start gap-10 pt-10 w-full border-t border-[#ced4db]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <SectionTitle>Pet Insurance Plan Details</SectionTitle>
                    <SectionDescription>
                      Understanding the different coverage options of plans is essential in choosing the best plan for your pet. Here are the most important pet insurance plan information:
                    </SectionDescription>
                  </div>
                </div>
                
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full border-collapse table-fixed">
                      <thead>
                        <tr>
                          <TableCell isHeader className="w-[10%] rounded-tl-[8px] border-[#ededed]">Provider</TableCell>
                          <TableCell isHeader className="w-[15%]">Age Restrictions</TableCell>
                          <TableCell isHeader className="w-[35%]">Waiting Periods</TableCell>
                          <TableCell isHeader className="w-[13%]">End of Life Expenses</TableCell>
                          <TableCell isHeader className="w-[13%]">Vet Exam Fees</TableCell>
                          <TableCell isHeader className="w-[14%] rounded-tr-[16px] overflow-hidden">Microchipping</TableCell>
                        </tr>
                      </thead>
                      <tbody>
                        {PLAN_DETAILS_DATA.map((row) => (
                          <tr key={row.provider}>
                            <TableCell isProvider className="align-top">{row.provider}</TableCell>
                            <TableCell className="align-top">{row.ageRestrictions}</TableCell>
                            <TableCell className="align-top">{row.waitingPeriods}</TableCell>
                            <TableCell className="align-top">{row.endOfLife}</TableCell>
                            <TableCell className="align-top">{row.vetExamFees}</TableCell>
                            <TableCell className="align-top">{row.microchipping}</TableCell>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <CTAButton onClick={onCTAClick} />
                </div>
              </section>

              {/* User Opinion Section */}
              <section id="user-opinion" className="flex flex-col items-start gap-6 pt-10 w-full border-t border-[#ced4db]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <SectionTitle>User Opinion of Pet Insurance Companies</SectionTitle>
                    <SectionDescription>
                      Forbes Advisor collects user sentiment both directly through NPS surveys and indirectly by collecting user feedback across the internet using the Consumer Sentiment Index (CSI). This is how real users described their opinion of leading pet insurance companies:
                    </SectionDescription>
                  </div>
                </div>
                
                <div className="w-full overflow-x-auto">
                  <table className="w-full table-fixed border-collapse">
                    <thead>
                      <tr>
                        <TableCell isHeader className="w-[15%] rounded-tl-[8px] border-[#ededed]">Provider</TableCell>
                        <TableCell isHeader className="w-[15%]">CSI Rating</TableCell>
                        <TableCell isHeader className="w-[20%]">How Likely to Recommend</TableCell>
                        <TableCell isHeader className="w-[25%]">Common Positive Sentiments</TableCell>
                        <TableCell isHeader className="w-[25%] rounded-tr-[8px]">Common Negative Sentiments</TableCell>
                      </tr>
                    </thead>
                    <tbody>
                      {USER_OPINION_DATA.map((row) => (
                        <tr key={row.provider}>
                          <TableCell isProvider>{row.provider}</TableCell>
                          <TableCell className="font-bold">{row.csiRating}</TableCell>
                          <TableCell>{row.likelyToRecommend}</TableCell>
                          <TableCell>{row.positiveComments}</TableCell>
                          <TableCell>{row.negativeComments}</TableCell>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <CTAButton onClick={onCTAClick} />
              </section>

              {/* Claims Process Section */}
              <section id="claims-feedback" className="flex flex-col items-start gap-6 pt-10 w-full border-t border-[#ced4db]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <SectionTitle>User Feedback on Claims Process</SectionTitle>
                    <SectionDescription>
                      Forbes Advisor surveyed users of each pet insurance company to get feedback on the claims process. This table displays real pet insurance user opinion of claims over a 12 month period from 2023 to 2024.
                    </SectionDescription>
                  </div>
                </div>
                
                <div className="w-full overflow-x-auto">
                  <table className="w-full table-fixed border-collapse">
                    <thead>
                      <tr>
                        <TableCell isHeader className="w-[25%] rounded-tl-[8px] border-[#ededed]">Provider</TableCell>
                        <TableCell isHeader className="w-[37.5%]">Satisfaction with Claims</TableCell>
                        <TableCell isHeader className="w-[37.5%] rounded-tr-[16px]">Overall Satisfaction</TableCell>
                      </tr>
                    </thead>
                    <tbody>
                      {CLAIMS_DATA.map((row) => (
                        <tr key={row.provider}>
                          <TableCell isProvider>{row.provider}</TableCell>
                          <TableCell>{row.claimsSatisfaction}</TableCell>
                          <TableCell>{row.overallSatisfaction}</TableCell>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <CTAButton onClick={onCTAClick} />
              </section>

              {/* Methodology and Evaluation Section */}
              <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
                <Fold />
              </Suspense>

              {/* FAQ Section */}
              <section id="faq" className="flex flex-col items-start gap-6 pt-10 w-full border-t border-[#ced4db]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <SectionTitle>Frequently Asked Questions</SectionTitle>
                    <SectionDescription>
                      Common questions about pet insurance coverage, costs, and claims process.
                    </SectionDescription>
                  </div>
                </div>
                
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="w-full p-6 bg-[#f8f9fa] rounded-lg">
                    <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Work Sans' }}>
                      What does pet insurance typically cover?
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'Work Sans' }}>
                      Pet insurance typically covers accidents, illnesses, surgeries, medications, and emergency care. Coverage varies by provider and plan type.
                    </p>
                  </div>
                  
                  <div className="w-full p-6 bg-[#f8f9fa] rounded-lg">
                    <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Work Sans' }}>
                      How much does pet insurance cost per month?
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'Work Sans' }}>
                      Monthly costs vary based on your pet's age, breed, location, and coverage level. On average, expect $30-70 for dogs and $15-40 for cats.
                    </p>
                  </div>
                  
                  <div className="w-full p-6 bg-[#f8f9fa] rounded-lg">
                    <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Work Sans' }}>
                      Are there waiting periods for pet insurance?
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'Work Sans' }}>
                      Yes, most pet insurance policies have waiting periods ranging from 2-14 days for illnesses and longer for specific conditions like orthopedic issues.
                    </p>
                  </div>
                </div>
                
                <CTAButton onClick={onCTAClick} />
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};