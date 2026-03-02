import Image from 'next/image';
import SustainabilityHero from './SustainabilityHero';
import SectionWithHighlights from './SectionWithHighlights';

export default function SustainabilityOverviewSection() {
  const sections = [
    {
      id: 1,
      title: "Environmental Leadership: Clean Energy and Climate Action",
      description: "ENI Corporation is actively advancing clean downstream energy solutions by investing in advanced technologies, efficient supply chain logistics, and innovative products that minimize environmental impact. By optimizing energy efficiency, reducing greenhouse gas (GHG) emissions, and enhancing operational performance, the company directly contributes to SDG 7 (Affordable and Clean Energy) and SDG 13 (Climate Action). From emissions control within its operations to promoting energy-efficient solutions for customers, every initiative is designed to support the decarbonization of the energy and industrial value chain.",
      
    },    {
      id: 2,
      title: "Social Impact: Empowering People and Communities",
      description: "ENI Corporation is actively advancing clean downstream energy solutions by investing in advanced technologies, efficient supply chain logistics, and innovative products that minimize environmental impact. By optimizing energy efficiency, reducing greenhouse gas (GHG) emissions, and enhancing operational performance, the company directly contributes to SDG 7 (Affordable and Clean Energy) and SDG 13 (Climate Action). From emissions control within its operations to promoting energy-efficient solutions for customers, every initiative is designed to support the decarbonization of the energy and industrial value chain.",
      // highlights: 
    },
    {
      id: 3,
      title: "Governance and ESG Excellence",
      description: "ENI Corporation is actively advancing clean downstream energy solutions by investing in advanced technologies, efficient supply chain logistics, and innovative products that minimize environmental impact. By optimizing energy efficiency, reducing greenhouse gas (GHG) emissions, and enhancing operational performance, the company directly contributes to SDG 7 (Affordable and Clean Energy) and SDG 13 (Climate Action). From emissions control within its operations to promoting energy-efficient solutions for customers, every initiative is designed to support the decarbonization of the energy and industrial value chain.",
      // highlights: 
    },
    {
      id: 4,
      title: "Innovation, Partnerships, and the Path Ahead",
      description: "ENI Corporation is actively advancing clean downstream energy solutions by investing in advanced technologies, efficient supply chain logistics, and innovative products that minimize environmental impact. By optimizing energy efficiency, reducing greenhouse gas (GHG) emissions, and enhancing operational performance, the company directly contributes to SDG 7 (Affordable and Clean Energy) and SDG 13 (Climate Action). From emissions control within its operations to promoting energy-efficient solutions for customers, every initiative is designed to support the decarbonization of the energy and industrial value chain.",
      // highlights: 
    },
    {
      id: 5,
      title: "Powering Progress, Protecting the Planet",
      description: "ENI Corporation is actively advancing clean downstream energy solutions by investing in advanced technologies, efficient supply chain logistics, and innovative products that minimize environmental impact. By optimizing energy efficiency, reducing greenhouse gas (GHG) emissions, and enhancing operational performance, the company directly contributes to SDG 7 (Affordable and Clean Energy) and SDG 13 (Climate Action). From emissions control within its operations to promoting energy-efficient solutions for customers, every initiative is designed to support the decarbonization of the energy and industrial value chain.",
      // highlights: 
    },
    {
      id: 6,
      title: "Innovation, Partnerships, and the Path Ahead",
      description: "ENI Corporation is actively advancing clean downstream energy solutions by investing in advanced technologies, efficient supply chain logistics, and innovative products that minimize environmental impact. By optimizing energy efficiency, reducing greenhouse gas (GHG) emissions, and enhancing operational performance, the company directly contributes to SDG 7 (Affordable and Clean Energy) and SDG 13 (Climate Action). From emissions control within its operations to promoting energy-efficient solutions for customers, every initiative is designed to support the decarbonization of the energy and industrial value chain.",
      // highlights: 
    }

    
  ];

  return (
    <section className="w-full mx-auto px-4 relative overflow-hidden">
      <Image
        src="/images/overview/image8.jpg"
        alt="Car engine oil"
        className="absolute inset-0 w-full h-full object-cover z-0"
        fill
        priority
      />
      <div className="absolute inset-0 w-full h-full bg-white opacity-95 z-10 pointer-events-none" />
      <div className="container mx-auto relative z-10 py-12">
        <SustainabilityHero
          eyebrow = "Our approach to sustainability"
        title = "ENI Corporation : A Commitment to Sustainability"
       highlight = "ENI Corporation :"
      description = "ENI Corporation is at the forefront of driving a sustainable future for Bangladesh. Guided by the principles of the United Nations' 17 Sustainable Development Goals (SDGs), the company has embedded sustainability into its core strategy, aligning economic growth with environmental stewardship and social responsibility."
        />
        {/* Dynamic sections */}
        {sections.map((section) => (
        <SectionWithHighlights key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}

