import SustainabilityHero from '../../sustainability/ApproachSustainability/SustainabilityHero.js';
import CommonBanner from "../../components/CommonBanner.js";
import HowCustomerServiceWork from './HowCustomerServiceWork.js';
import CustomerBenefits from './CustomerBenefits.js';

export default function MotorcycleEngineOilsPage() {
  return (
    <>
      <CommonBanner
                    heading="Our Services"
                    title="Empowering Your Business with Smart Solutions"
                    title2="Where Innovation Meets Excellence"
                    image="/images/lubricant/image8.jpg"
                  />

<div className="container mx-auto relative z-10 py-12">

                   <SustainabilityHero
          eyebrow = "Customer Service"
          title = "Integrity, Transparency, and Accountability at the Core"
          highlight = "Integrity,"
          description = "Q8 Routine Analysis Service (better known as QRAS) – is the added value service Q8Oils offers to its customers & partners. Via the analysis, customers can lengthen the life of their engine or machine, reduce operating costs and help optimize the lubrication program. Frequent oil analyses helps prevent serious damage or breakdowns by indicating what action should be taken and how urgent the action is."
          />
          </div>
     
    <HowCustomerServiceWork/>
    <CustomerBenefits/>
    </>
  );
}