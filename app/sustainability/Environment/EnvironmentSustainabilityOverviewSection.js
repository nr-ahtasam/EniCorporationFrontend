import Image from 'next/image';
import SustainabilityHero from '../ApproachSustainability/SustainabilityHero';
import SectionWithHighlights from '../ApproachSustainability/SectionWithHighlights';

export default function EnvironmentSustainabilityOverviewSection() {
  const sections = [
    {
      id: 1,
      title: "Board Leadership and Oversight",
      description: "ENI Corporation is guided by a highly experienced and independent Board of Directors, ensuring strategic direction, ethical governance, and sustainable value creation.",
      keyTitle: "Key Features:",
       highlights: [
        {
          id: "A",
          title: "Balanced Board Composition with independent non-executive directors",
          description: "Energy optimization in blending and packaging plants."
        },
        {
          id: "B",
          title: "Capacity Building",
          description: "Active board-level committees for Audit, Risk Management, and Nomination & Remuneration"
        },
        {
          id: "C",
          title: "Gender Equity",
          description: "Regular review of ESG goals, business risks, and compliance frameworks"
        }
      ],

      description2: "Our facilities are designed to operate with minimal environmental disruption. We emphasize:",
    },   
    {
      id: 2,
      title: "Ethical Conduct and Anti-Corruption",
      description: "We operate with zero tolerance for corruption, fraud, and any form of unethical behavior. All employees and business partners are expected to strictly adhere to ENI Corporation’s Code of Ethics and Business Conduct.",
      keyTitle: "Compliance Highlights:",
       highlights: [
        {
          id: "A",
          title: "Whistleblower Policy with anonymous reporting mechanism",
          description: "Energy optimization in blending and packaging plants."
        },
        {
          id: "B",
          title: "Capacity Building",
          description: "Regular ethics training and compliance awareness programs"
        },
        {
          id: "C",
          title: "Regular review of ESG goals, business risks, and compliance frameworks",
          description: "Regular review of ESG goals, business risks, and compliance frameworks"
        }
      ],

      description2: "Our facilities are designed to operate with minimal environmental disruption. We emphasize:",
    },   
    {
      id: 3,
      title: "Regulatory Compliance and Transparency",
      description: "As a publicly listed company, MJLBPLC maintains full compliance with:",
     
       highlights: [
        {
          id: "A",
          title: "Bangladesh Securities and Exchange Commission (BSEC) guidelines",
          description: "Energy optimization in blending and packaging plants."
        },
        {
          id: "B",
          title: "International Financial Reporting Standards (IFRS)",
          description: "Active board-level committees for Audit, Risk Management, and Nomination & Remuneration"
        },
        {
          id: "C",
          title: "National labor, environment, and corporate governance laws",
          description: "Regular review of ESG goals, business risks, and compliance frameworks"
        }
      ],

      description2: "Our facilities are designed to operate with minimal environmental disruption. We emphasize:",
    },   
     {
      id: 3,
      title: "Sustainable Operations and Resource Efficiency",
      description: "Our facilities are designed to operate with minimal environmental disruption. We emphasize:",
     highlights: [
        {
          id: "A",
          title: "Occupational Health & Safety (OHS)",
          description: "Energy optimization in blending and packaging plants."
        },
        {
          id: "B",
          title: "Capacity Building",
          description: "Waste minimization through recycling and responsible disposal."
        },
        {
          id: "C",
          title: "Gender Equity",
          description: "Water conservation through efficient usage and wastewater treatment systems."
        }
      ],

      description2: "Our facilities are designed to operate with minimal environmental disruption. We emphasize:",
    },
     {
      id: 4,
      title: "Eco-Friendly Product",
      description: "Our people are our greatest asset. We foster a workplace culture built on diversity, inclusion, and continuous development.",
     
    },
     {
      id: 5,
      title: "Compliance, Monitoring, and Transparency",
      description: "Our people are our greatest asset. We foster a workplace culture built on diversity, inclusion, and continuous development.",
     
    },
     {
      id: 6,
      title: "Biodiversity and Ecosystem Care",
      description: "Our people are our greatest asset. We foster a workplace culture built on diversity, inclusion, and continuous development.",
     
    }
  ];

  return (
    <section className="w-full mx-auto px-4 relative overflow-hidden">
      <Image
        src="/images/overview/image3.jpg"
        alt="Car engine oil"
        className="absolute inset-0 w-full h-full object-cover z-0"
        fill
        priority
      />
      <div className="absolute inset-0 w-full h-full bg-white opacity-95 z-10 pointer-events-none" />
      <div className="container mx-auto relative z-10 py-12">
        <SustainabilityHero
          eyebrow = "Environment"
        title = ""
       highlight = ""
      description = ""
        />
        {/* Dynamic sections */}
        {sections.map((section) => (
        <SectionWithHighlights key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}

