import SustainabilityHero from '../../sustainability/ApproachSustainability/SustainabilityHero.js';
import CommonBanner from "../../components/CommonBanner.js";
import OurServiceButton from "@/app/components/OurServiceButton";
import WhatDoTheyDo from '../../OurServices/WhatDoTheyDo.js';
import Contact from "@/app/components/Contact.js";


export default function MotorcycleEngineOilsPage() {
    const items = [
    {
      title: "Order management",
      desc: "The main part of our work is taking care of your orders. We make sure we get the right product on the right place at the right time. Always at your service to advise and inform you where needed.",
    },
    {
      title: "Sales support",
      desc: "We are your day-to-day contact in lubricant supply and support our sales team in delivering our promises to you.",
    },
    {
      title: "Logistics & Customs Support",
      desc: "We have a vast experience in logistics and customs flows. Together with our logistics partners, we can get the product you need right where you need it.",
    },
    {
      title: "VMI – vendor managed inventory",
      desc: "We can setup a VMI system to manage your inventory for you. This way you can focus on what is most important for you: running your business.",
    },
  
  ];
  return (
    <>
      <CommonBanner
                    heading="Technical Support"
                    title="Empowering Your Business with Smart Solutions"
                    title2="Where Innovation Meets Excellence"
                    image="/images/technical support/image5.jpg"

                    />
                    {/* <BreadcrumbBar/> */}
          <div className="container mx-auto relative z-10 py-12">
                   <SustainabilityHero
          eyebrow = "Customer Support"
          title = "ENI Corporation Customer Service: driving our customer’s success"
          highlight = "ENI Corporation"
          description = "ENI Corporation Routine Analysis Service (better known as QRAS) – is the added value service Q8Oils offers to its customers & partners. Via the analysis, customers can lengthen the life of their engine or machine, reduce operating costs and help optimize the lubrication program. Frequent oil analyses helps prevent serious damage or breakdowns by indicating what action should be taken and how urgent the action is."
          />
          <div >
          <OurServiceButton href="/contact">Technical Support!</OurServiceButton>
          </div>
          {/* <WhatTeamDo/> */}
          <WhatDoTheyDo title="What do they do?" items={items} />

          <Contact/>
          <div className='text-center'>
          <OurServiceButton href="/contact">Technical Support!</OurServiceButton>
          </div>
          </div>
     
    
    </>
  );
}