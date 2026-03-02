import Image from 'next/image';
import SustainabilityHero from '../ApproachSustainability/SustainabilityHero';
import SectionWithHighlights from '../ApproachSustainability/SectionWithHighlights';

export default function GovernancesSustainabilityOverviewSection() {
  const sections = [
    {
      id: 1,
      title: "Workforce Empowerment and Inclusion",
      description: "Our people are our greatest asset. We foster a workplace culture built on diversity, inclusion, and continuous development.",
      keyTitle: "Key Programs:",
      
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
        
        
    },    {
        id: 2,
        title: "Employee Well-being and Benefits",
        description: "We prioritize holistic well-being through health coverage, work-life balance, and professional development.",
        keyTitle: "Key Programs:",
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
       
    },
     {
      id: 3,
      title: "Community Development & Social Investment",
      description: "Our commitment extends to the wider society, where we invest in impactful Corporate Social Responsibility (CSR) programs that create shared value and social upliftment.",
       keyTitle: "Community Engagement Initiatives:",
     highlights: [
        {
          id: "A",
          title: "Education: Scholarships, training, school renovation, and digital learning kits for underprivileged students.",
          description: "Energy optimization in blending and packaging plants."
        },
        {
          id: "B",
          title: "Health: Medical camps, maternal care support, and emergency health aid during disasters.",
          description: "Waste minimization through recycling and responsible disposal."
        },
        {
          id: "C",
          title: "Livelihood Support: Vocational training for youth and micro- entrepreneurship support in rural areas.",
          description: "Water conservation through efficient usage and wastewater treatment systems."
        }
      ],

      description2: "These initiatives directly support SDG 3 (Good Health & Well-being), SDG 4 (Quality Education), and SDG 10 (Reduced Inequalities).",
    },
     {
      id: 4,
      title: "Human Rights and Ethical Labor",
      description: "MJL Bangladesh PLC. upholds the highest standards of ethical employment, adhering strictly to national labor laws and global human rights frameworks. We have zero tolerance for:",
      highlights: [
        {
          id: "A",
          title: "Child labor",
          description: "Energy optimization in blending and packaging plants."
        },
        {
          id: "B",
          title: "Forced labor",
          description: "Waste minimization through recycling and responsible disposal."
        },
        {
          id: "C",
          title: "Discrimination or harassment",
          description: "Water conservation through efficient usage and wastewater treatment systems."
        }
      ],
      
      description2: "Our supply chain is also vetted for ethical compliance, promoting fair labor practices across all tiers.",


     
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
          eyebrow = "Governances"
        title = "Integrity, Transparency, and Accountability at the Core"
       highlight = ""
      description = "At ENI Corporation, strong governance is the foundation of our long-term sustainability, risk resilience, and stakeholder trust. We are committed to conducting business with the highest standards of ethics, transparency, and regulatory compliance, ensuring that every decision reflects responsible corporate citizenship. Our governance framework is aligned with SDG 16: Peace, Justice, and Strong Institutions, and incorporates global best practices in ESG oversight, board leadership, risk management, and compliance."
        />
        {/* Dynamic sections */}
        {sections.map((section) => (
        <SectionWithHighlights key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}

