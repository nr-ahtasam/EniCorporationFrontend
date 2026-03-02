// This file exports the articles array for use in both the list and detail pages
import ApprovalInfo from "./ApprovalInfo";
import WhyThisMatters from "./WhyThisMatters";

const articles = [
  {
    category: "Energy",
    title: "Q8 Mahler GR5 SAE 40 Achieves MAN M 3271-5 Approval: Strengthening Our Gas Engine Portfolio",
    date: "16 DECEMBER 2025",
    image: "/images/article/article1/image1.png",
    author: "Alex Maltchev",
    content1: (
      <>
        <p>
          Q8Oils is proud to announce that Q8 Mahler GR5 SAE 40 has received the MAN M 3271-5 approval; an important step forward in expanding our Energy portfolio and supporting our customers in the fast-growing stationary gas engine market.
        </p>
        <ApprovalInfo
          heading="What this approval means"
          description1="The MAN M 3271-5 approval confirms that Q8 Mahler GR5 SAE 40 meets the latest performance requirements for a broad range of MAN gas engines operating on natural gas, biogas, landfill gas, sewage gas and wood gas. The approval applies to turbocharged and naturally aspirated engines equipped with:"
          features={["Three-way catalytic converters", "SCR catalytic converters", "Oxidation catalytic converters"]}
          note="The product was already approved under MAN M 3271-2 and MAN M 3271-4. This new approval now broadens its applicability across more MAN platforms. Note: the approval does not cover the E3872 LE steel piston engine, which requires additional field testing."
          image="/images/article/article1/image2.png"
         
        />
          <WhyThisMatters />
      </>
    ),
    
  },
  {
    category: "Motorsport",
    title: "Sebastien Baud: Q8Oils' star in Motorsport",
    date: "23 SEPTEMBER 2025",
    image: "/images/article/article2/image2.png",
    author: "Jane Doe",
    content: <p>Motorsport article content goes here.</p>,
      content1: (
      <>
        <p>
          Everything there is to know about Sebastien Baud, a remarkable talent in the world of motorsport. And, for the last four years, a proud ambassador for Q8Oils.<br/>

          Sebastien Baud is an experienced and passionate racing driver with a track record in various motorsport events. His dedication to the motorsport industry has shown promising results on track, earning him recognition in the racing community.<br/>

          Throughout his career, Sebastien has achieved notable milestones. In 2018, he clinched the championship title in the French Mitjet 2L and Supertourisme categories, showcasing his skills behind the wheel. Subsequent years saw Sebastien’s continued ascent, with victories in prestigious events such as the European Carrera Cup and the GT World Challenge.
        </p>
        <ApprovalInfo
          heading="History"
          description1="With victories in prestigious championships like the French Mitjet 2L and Supertourisme in 2018, he showcased his abilities and determination early on, securing first place finishes. Transitioning to GT4 racing in 2021, he embarked on a new chapter, competing in both European and French circuits under the banner of Mercedes-AMG."
          description2="With victories in prestigious championships like the French Mitjet 2L and Supertourisme in 2018, he showcased his abilities and determination early on, securing first place finishes. Transitioning to GT4 racing in 2021, he embarked on a new chapter, competing in both European and French circuits under the banner of Mercedes-AMG."
          // features={["Three-way catalytic converters", "SCR catalytic converters", "Oxidation catalytic converters"]}
          note="With victories in prestigious championships like the French Mitjet 2L and Supertourisme in 2018, he showcased his abilities and determination early on, securing first place finishes. Transitioning to GT4 racing in 2021, he embarked on a new chapter, competing in both European and French circuits under the banner of Mercedes-AMG."
          image="/images/article/article2/image3.png"
         
        />
          <WhyThisMatters />
      </>
    ),
  },
  {
    category: "Automotive",
    title: "Scania Transmission Oil (STO) Specifications Explained",
    date: "10 SEPTEMBER 2025",
    image: "/images/article/article3/image1.jpeg",
    author: "John Smith",
    content: <p>Scania article content goes here.</p>,
  },
  {
    category: "Automotive",
    title: "Volvo Transmission and Axle Oil Specifications Explained",
    date: "10 SEPTEMBER 2025",
    image: "/images/article/article4/image1.jpeg",
    author: "Jane Smith",
    content: <p>Volvo article content goes here.</p>,
  },
  {
    category: "Energy",
    title: "Powering Performance: Choosing the right Turbine Oil with Q8Oils",
    date: "30 July 2025",
    image: "/images/article/article5/image1.png",
    author: "Alex Maltchev",
    content: <p>Turbine oil article content goes here.</p>,
  },
];

export default articles;
