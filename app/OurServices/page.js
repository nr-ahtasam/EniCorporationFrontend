import SustainabilityHero from '../sustainability/ApproachSustainability/SustainabilityHero.js';
import CommonBanner from "../components/CommonBanner.js";
import ServicesList from "./ServicesList";

export default function MotorcycleEngineOilsPage() {
  return (
    <>
      <CommonBanner
                    heading="Our Services"
                    title="Empowering Your Business with Smart Solutions"
                    title2="Where Innovation Meets Excellence"
                    image="/images/performance/image10.jpg"
                  />

<div className="container mx-auto relative z-10 py-12">

                   <SustainabilityHero
          eyebrow = "Our Services"
          title = "Integrity, Transparency, and Accountability at the Core"
          highlight = "Integrity,"
          description = "Our mobile business provides a complete range of smartphone solutions designed to meet the needs of every customer. We offer the latest smartphones from all major brands, ensuring 100% genuine products with proper warranty and reliable after-sales support. Our team assists customers in selecting the most suitable device based on performance, features, and budget, making the buying experience simple and satisfying."
          />
          <ServicesList />
          </div>
     
    
    </>
  );
}