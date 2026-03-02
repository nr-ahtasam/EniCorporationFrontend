import Image from 'next/image';
import SustainabilityHero from '../ApproachSustainability/SustainabilityHero';
import SectionWithHighlights from '../ApproachSustainability/SectionWithHighlights';

export default function PeopleSustainabilityOverviewSection() {
  const sections = [
    {
      id: 1,
      title: "Health, Safety, and Well-being",
      description: "We are committed to a zero-harm culture that protects the health and safety of every employee, contractor, and stakeholder involved in our operations.",
      keyTitle: "Key Initiatives:",
      
      highlights: [
          {
              id: "A",
              title: "Occupational Health & Safety (OHS) Management Systems in line with MJLBPLC’s standards policy.",
              description: "Energy optimization in blending and packaging plants."
            },
            {
                id: "B",
                title: "Regular safety drills, toolbox talks, and emergency preparedness training",
                description: "Waste minimization through recycling and responsible disposal."
            },
            {
                id: "C",
                title: "Annual health screenings, mental health support programs, and ergonomic workplace design",
                description: "Water conservation through efficient usage and wastewater treatment systems."
            },
            {
                id: "C",
                title: "Continuous safety performance monitoring using leading and lagging indicators",
                description: "Water conservation through efficient usage and wastewater treatment systems."
            },
            {
                id: "C",
                title: "Safety is not just a compliance metric—it’s a promise we make to every individual, every day.",
                description: "Water conservation through efficient usage and wastewater treatment systems."
            }
        ],
        description2: "Safety is not just a compliance metric—it’s a promise we make to every individual, every day.",
        
    },    {
        id: 2,
        title: "Employee Well-being and Benefits",
        description: "We prioritize holistic well-being through health coverage, work-life balance, and professional development.",
        keyTitle: "Key Initiatives:",
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
          eyebrow = "People"
        title = "The Heart of Our Sustainable Growth"
       highlight = ""
      description = "At ENI Corporation, our people are the driving force behind our success. We believe that empowering employees, nurturing talent, and ensuring a safe, inclusive, and supportive work environment are essential to building a resilient, future-ready organization. Our approach to people sustainability is aligned with the UN Sustainable Development Goals (SDGs), particularly SDG 3 (Good Health & Well-being), SDG 4 (Quality Education), SDG 5 (Gender Equality), and SDG 8 (Decent Work and Economic Growth)."
        />
        {/* Dynamic sections */}
        {sections.map((section) => (
        <SectionWithHighlights key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}

