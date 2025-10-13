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
    <div className="bg-white w-full min-w-[378px] min-h-screen">
      <div className="max-w-[1440px] min-w-[378px] mx-auto px-0 sm:px-6 md:px-8 lg:px-0">
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-5">
            <main className="col-span-6 sm:col-span-8 md:col-span-10 lg:col-span-12 flex flex-col items-start gap-8 sm:gap-10 md:gap-12 bg-white py-4 sm:py-6 md:py-0 w-full mx-auto">
            <div className="flex flex-col items-start gap-10 w-full">
              
              {/* Pet Insurance Cost Section */}
              <section id="insurance-cost" className="flex flex-col items-start gap-6 mt-6 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <SectionTitle level="h3">Pet Insurance Cost for Dogs and Cats</SectionTitle>
                    <SectionDescription>
                      The table below shows the average monthly cost for the leading pet insurance providers for dogs and cats.
                    </SectionDescription>
                  </div>
                </div>
                
                <div className="w-full overflow-x-auto">
                  <table className="w-full table-fixed border-separate border-spacing-0 min-w-[800px]">
                    <thead>
                      <tr>
                        <TableCell isHeader className="w-[25%] rounded-tl-[8px] ">Provider</TableCell>
                        <TableCell isHeader className="w-[30%]">Average Monthly for Dogs</TableCell>
                        <TableCell isHeader className="w-[30%]">Average Monthly for Cats</TableCell>
                        <TableCell isHeader className="w-[15%] rounded-tr-[16px]">Apply Now</TableCell>
                      </tr>
                    </thead>
                    <tbody>
                      {COST_DATA.map((row, index) => (
                        <tr key={row.provider}>
                          <TableCell isProvider>{row.provider}</TableCell>
                          <TableCell>{row.dogCost}</TableCell>
                          <TableCell>{row.catCost}</TableCell>
                          <TableCell>
                            <a 
                              href={row.applyNowUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200"
                            >
                              Apply Now
                            </a>
                          </TableCell>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <CTAButton onClick={onCTAClick} />
              </section>

              {/* Pet Insurance Plan Details Section */}
              <section id="plan-details" className="flex flex-col items-start gap-10 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <SectionTitle level="h3">Pet Insurance Plan Details</SectionTitle>
                    <SectionDescription>
                      Understanding the different coverage options of plans is essential in choosing the best plan for your pet. Here are the most important pet insurance plan information:
                    </SectionDescription>
                  </div>
                </div>
                
                <div className="flex flex-col items-start gap-6 w-full">
                <div className="w-full overflow-x-auto relative">
                  <table className="w-full border-separate border-spacing-0 table-fixed min-w-[1200px] relative">
                    <thead>
                      <tr>
                        <TableCell isHeader className="w-[10%] rounded-tl-[8px] sticky left-0 z-[1] bg-[#ecf1ff]">Provider</TableCell>
                        <TableCell isHeader className="w-[13%]">Age Restrictions</TableCell>
                        <TableCell isHeader className="w-[30%]">Waiting Periods</TableCell>
                        <TableCell isHeader className="w-[12%]">End of Life Expenses</TableCell>
                        <TableCell isHeader className="w-[12%]">Vet Exam Fees</TableCell>
                        <TableCell isHeader className="w-[12%]">Microchipping</TableCell>
                        <TableCell isHeader className="w-[11%] rounded-tr-[16px] overflow-hidden">Apply Now</TableCell>
                      </tr>
                    </thead>
                    <tbody>
                      {PLAN_DETAILS_DATA.map((row) => (
                        <tr key={row.provider}>
                          <TableCell isProvider className="align-top sticky left-0 z-[1] bg-white">{row.provider}</TableCell>
                          <TableCell className="align-top">{row.ageRestrictions}</TableCell>
                          <TableCell className="align-top">{row.waitingPeriods}</TableCell>
                          <TableCell className="align-top">{row.endOfLife}</TableCell>
                          <TableCell className="align-top">{row.vetExamFees}</TableCell>
                          <TableCell className="align-top">{row.microchipping}</TableCell>
                          <TableCell className="align-top">
                            <a 
                              href={row.applyNowUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200"
                            >
                              Apply Now
                            </a>
                          </TableCell>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                  
                  <CTAButton onClick={onCTAClick} />
                </div>
              </section>

              {/* User Opinion Section */}
              <section id="user-opinion" className="flex flex-col items-start gap-6 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <SectionTitle level="h3">User Opinion of Pet Insurance Companies</SectionTitle>
                    <SectionDescription>
                      Forbes Advisor collects user sentiment both directly through NPS surveys and indirectly by collecting user feedback across the internet using the Consumer Sentiment Index (CSI). This is how real users described their opinion of leading pet insurance companies:
                    </SectionDescription>
                  </div>
                </div>
                
                <div className="w-full overflow-x-auto relative">
                  <table className="w-full table-fixed border-separate border-spacing-0 min-w-[1000px] relative">
                    <thead>
                      <tr>
                        <TableCell isHeader className="w-[15%] rounded-tl-[8px] sticky left-0 z-[1] bg-[#ecf1ff]">Provider</TableCell>
                        <TableCell isHeader className="w-[12%]">CSI Rating</TableCell>
                        <TableCell isHeader className="w-[18%]">How Likely to Recommend</TableCell>
                        <TableCell isHeader className="w-[22%]">Common Positive Sentiments</TableCell>
                        <TableCell isHeader className="w-[22%]">Common Negative Sentiments</TableCell>
                        <TableCell isHeader className="w-[11%] rounded-tr-[8px]">Apply Now</TableCell>
                      </tr>
                    </thead>
                    <tbody>
                      {USER_OPINION_DATA.map((row) => (
                        <tr key={row.provider}>
                          <TableCell isProvider className="sticky left-0 z-[1] bg-white">{row.provider}</TableCell>
                          <TableCell className="font-bold">{row.csiRating}</TableCell>
                          <TableCell>{row.likelyToRecommend}</TableCell>
                          <TableCell>{row.positiveComments}</TableCell>
                          <TableCell>{row.negativeComments}</TableCell>
                          <TableCell>
                            <a 
                              href={row.applyNowUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200"
                            >
                              Apply Now
                            </a>
                          </TableCell>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <CTAButton onClick={onCTAClick} />
              </section>

              {/* Claims Process Section */}
              <section id="claims-feedback" className="flex flex-col items-start gap-6 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <SectionTitle level="h3">User Feedback on Claims Process</SectionTitle>
                    <SectionDescription>
                      Forbes Advisor surveyed users of each pet insurance company to get feedback on the claims process. This table displays real pet insurance user opinion of claims over a 12 month period from 2023 to 2024.
                    </SectionDescription>
                  </div>
                </div>
                
                <div className="w-full overflow-x-auto relative">
                  <table className="w-full table-fixed border-separate border-spacing-0 min-w-[800px] relative">
                    <thead>
                      <tr>
                        <TableCell isHeader className="w-[25%] rounded-tl-[8px] sticky left-0 z-[1] bg-[#ecf1ff]">Provider</TableCell>
                        <TableCell isHeader className="w-[30%]">Satisfaction with Claims</TableCell>
                        <TableCell isHeader className="w-[30%]">Overall Satisfaction</TableCell>
                        <TableCell isHeader className="w-[15%] rounded-tr-[16px]">Apply Now</TableCell>
                      </tr>
                    </thead>
                    <tbody>
                      {CLAIMS_DATA.map((row) => (
                        <tr key={row.provider}>
                          <TableCell isProvider className="sticky left-0 z-[1] bg-white">{row.provider}</TableCell>
                          <TableCell>{row.claimsSatisfaction}</TableCell>
                          <TableCell>{row.overallSatisfaction}</TableCell>
                          <TableCell>
                            <a 
                              href={row.applyNowUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200"
                            >
                              Apply Now
                            </a>
                          </TableCell>
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
              <section id="faq" className="flex flex-col items-start gap-6 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <SectionTitle level="h2">Frequently Asked Questions</SectionTitle>
                    <SectionDescription>
                      Common questions about pet insurance coverage, costs, and claims process.
                    </SectionDescription>
                  </div>
                </div>
                
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="w-full p-6 bg-[#f8f9fa] rounded-lg">
                    <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Work Sans' }}>
                      Does pet insurance cover both dogs and cats under the same plan?
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'Work Sans' }}>
                      Most pet insurance providers require separate policies for each pet, regardless of species. However, many offer multi-pet discounts when you insure multiple pets with the same company.
                    </p>
                  </div>
                  
                  <div className="w-full p-6 bg-[#f8f9fa] rounded-lg">
                    <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Work Sans' }}>
                      Does pet insurance cover vaccinations and annual checkups?
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'Work Sans' }}>
                      Basic pet insurance typically covers accidents and illnesses but not routine care. However, many providers offer wellness add-ons that cover vaccinations, annual exams, and preventive care for an additional cost.
                    </p>
                  </div>
                  
                  <div className="w-full p-6 bg-[#f8f9fa] rounded-lg">
                    <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Work Sans' }}>
                      Are pre-existing conditions covered?
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'Work Sans' }}>
                      No, pet insurance does not cover pre-existing conditions. Any health issue your pet has before coverage begins or during waiting periods will be excluded from coverage permanently.
                    </p>
                  </div>
                  
                  <div className="w-full p-6 bg-[#f8f9fa] rounded-lg">
                    <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Work Sans' }}>
                      How are premiums calculated for pet insurance?
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'Work Sans' }}>
                      Premiums are based on your pet's age, breed, location, coverage level, deductible amount, and reimbursement percentage. Older pets and certain breeds prone to health issues typically cost more to insure.
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