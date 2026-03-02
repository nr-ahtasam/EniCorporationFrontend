import SustainabilityHero from '../../sustainability/ApproachSustainability/SustainabilityHero.js';
import CommonBanner from "../../components/CommonBanner.js";
import TechnicalTeam from "./TechnicalTeam.js";
import WhatTeamDo from "./WhatTeamDo.js";
import OurServiceButton from "@/app/components/OurServiceButton";
// import BreadcrumbBar from '@/app/components/breadCrump.js';
import WhatDoTheyDo from '../../OurServices/WhatDoTheyDo.js';



export default function MotorcycleEngineOilsPage() {
   const items = [
    {
      title: "Provide Advice",
      desc: "First and foremost, this service is obviously designed to provide advice where necessary. The team has extensive knowledge of the current product portfolio, new products that are being introduced, as well as the existing and upcoming market specifications. They also often provide extensive advice on the oil analyses (QRAS and LIMS) that have been carried out.",
    },
    {
      title: "Intermediary",
      desc: "In addition, this service also acts as an intermediary between the development laboratory (KPR&T) and the customer. The service allows knowledge from the laboratory to be shared with the customer, and market information from the customer to be shared with the development laboratory. This is a clear case of cross-pollination.",
    },
    {
      title: "Sales Support",
      desc: "They also support the sales team when visiting companies and distributors. This is the main reason that PALUB team members are often on the road to meet a customer. In this case, the telephone service is staffed by a colleague.",
    },
    {
      title: "Training",
      desc: "The PALUB team provides training to direct customers and distributors, as well to the customer service. They do this at the home locations in BPA (Blending Plant Antwerp) and KPR&T, as well as during local sales meetings, or at the customer's location. This involves training on new products and/or applications, as well as providing training to newcomers in the oil market.",
    },
    {
      title: "Maintenance",
      desc: "Next, there is a technical area within the scope of PALUB: the maintenance of certain tools that also are available for the customers: Olysager Lis, Cross list, Technical IRIS and Q8Oils University. Do you have any questions about these tools? Please do not hesitate to contact them.",
    },
    {
      title: "Marketing Support",
      desc: "The marketing department can also count on the knowledge found within PALUB: this service can support Product Data Sheets, the development of brochures, translations (FR, NL, DE), and the creation of labels for large packages.",
    },
  ];
  return (
    <>
      <CommonBanner
                    heading="Technical Support"
                    title="Empowering Your Business with Smart Solutions"
                    title2="Where Innovation Meets Excellence"
                    image="/images/technical support/image2.jpg"

                    />
                    {/* <BreadcrumbBar/> */}
          <div className="container mx-auto relative z-10 py-12">
          <SustainabilityHero
          eyebrow = "Technical Support"
          title = "Integrity, Transparency, and Accountability at the Core"
          highlight = "Integrity,"
          description = "Q8 Routine Analysis Service (better known as QRAS) – is the added value service Q8Oils offers to its customers & partners. Via the analysis, customers can lengthen the life of their engine or machine, reduce operating costs and help optimize the lubrication program. Frequent oil analyses helps prevent serious damage or breakdowns by indicating what action should be taken and how urgent the action is."
          />
          <div >
          <OurServiceButton href="/contact">Technical Support!</OurServiceButton>
          </div>
          <TechnicalTeam/>
          <WhatDoTheyDo title="What do they do?" items={items} />  
          <WhatTeamDo/>
          <div className='text-center'>
          <OurServiceButton href="/contact">Technical Support!</OurServiceButton>
          </div>
          </div>
     
    
    </>
  );
}