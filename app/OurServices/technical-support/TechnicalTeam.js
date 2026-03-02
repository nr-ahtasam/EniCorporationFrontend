import Image from "next/image";

const team = [
  {
    img: "/images/team/image1.png",
    title: "Automotive: David De Mesmaeker",
    desc: "This segment covers questions concerning the use of oil in engines and transmissions of heavy duty vehicles and passenger cars, as well as motorcycles. Earth-moving equipment and agricultural tractors belong to this segment as well.",
  },
  {
    img: "/images/team/image2.jpg",
    title: "General Industry: Pierre Blackman & Joris Leyers",
    desc: "General Industry is responsible for oils and fluids used in hydraulic systems, industrial gearboxes and circulation systems. In addition, demoulding oil, oil for the food industry and greases belong to this segment as well.",
  },
  {
    img: "/images/team/image3.jpg",
    title: "Energy: Alex Maltchev & Pierre Blackman",
    desc: "Go to the Energy sector if you have questions about gas engine oil, turbine oil, marine engine oil, and compressor oil. The majority of the advice provided in this segment is about oil analysis, because some engine guarantees are often associated with regularly taking oil samples.",
  },
  {
    img: "/images/team/image4.jpg",
    title: "Metalworking: All",
    desc: "Questions about water-soluble and/or pure metalworking oil, for both machining and forming processes, as well as rolling oils are so specific that Palub first makes a pre-selection, which means they are able to resolve 80% of the questions quickly. The other 20% are discussed with international colleagues who work with metalworking products on a daily basis.",
  },
  {
    img: "/images/team/image5.png",
    title: "Technology Manager: Joris van der List",
    desc: "For questions about the general management of this service, please talk to Technical Service Manager and lubricants jack of many trades: Joris van der List. Joris has been working for Q8 for over 20 years in a variety of functions, ranging from scientist at KPR&T in Rotterdam, to Product Line Manager for the Energy segment.",
  },
  {
    img: "/images/team/image6.png",
    title: "Junior Sales Engineer: Bram De Moerloose",
    desc: "The newest member of PALub, Bram De Moerloose. Bram studied chemical engineering technology and majored in industrial engineering. He joined the team in February 2023. With his all-round expertise, you can turn to Bram with all your questions.",
  },
];

export default function TechnicalTeam() {
  return (
    <section className="w-full py-32 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#18398b] mb-4 text-center">The Team</h2>
        <p className="text-gray-700 text-center mb-12">
          PALUB consists of four main business segments. All PALUB team members are specialists in their own business segment but can also answer general questions thanks to their broad knowledge and experience within the group.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <Image
                src={member.img}
                alt={member.title}
                width={120}
                height={120}
                className="mb-4 rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold text-[#18398b] mb-2 ">{member.title}</h3>
              <p className="text-gray-700 text-[16px] text-justify">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}