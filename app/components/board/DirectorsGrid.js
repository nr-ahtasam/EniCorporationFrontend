"use client";

import Image from "next/image";
import { useState } from "react";

const directors = [
  {
    id: 1,
    name: "Seakh Awan Hoque",
    role: "Managing Director",
    image: "/images/team/boardOfDirectors/member/MDsir2.png",
      highlights: [
        "Managing Director, ENI Corporation",
        // "Nominee Director, Omera Fuels Limited",
        // "Chairman, The Consolidated Tea & Lands Company Bangladesh Limited (Finlay)",
        // "President, Bangladesh Ocean Going Ship Owner’s Association (BOGSOA)",
        // "President, Bangladesh Energy Companies Association",
      ],
      description: `Engr. Seakh Awan Hoque is an elite industrialist and entrepreneur in Bangladesh. He is the Managing Director of MJL Bangladesh PLC. Mr. Hoque is the Chairman and owner of East Coast Group. In addition, he is also the Chairman of The Consolidated Tea & Lands Company Bangladesh Limited (formerly, James Finlay Limited) and the Chairman of Prime Bank Limited. Mr. Hoque is the President of Bangladesh Ocean Going Ship Owner’s Association (BOGSOA) and Bangladesh Energy Companies Association. In the past, Mr. Hoque has served as the Chairman of Green Delta Insurance Company Limited (2001 – 2005), one of the most successful general insurance companies in Bangladesh.\n\nHe is also the Director of Central Depository Bangladesh Limited (CDBL) and a Member of the Executive of Bangladesh Association of Publicly listed Companies (BAPLC). Mr. Hoque also served as the Vice President of Bangladesh Energy Companies Association and a Member of Advisory Council of Government of the People’s Republic of Bangladesh on Power, Energy & Mineral Resources. In recognition to his performance, The Hungarian Government nominated him as the Honorary Consul of Hungary in Bangladesh.`
   
 
  },
  {
    id: 2,
    name: "Md Abdus Sabur Khan",
    role: "Director (Technical) ",
    image: "/images/team/boardOfDirectors/member/saburSir.png",
      highlights: [
        "Director (Technical), ENI Corporation",
        // "Nominee Director, Omera Fuels Limited",
        // "Chairman, The Consolidated Tea & Lands Company Bangladesh Limited (Finlay)",
        // "President, Bangladesh Ocean Going Ship Owner’s Association (BOGSOA)",
        // "President, Bangladesh Energy Companies Association",
      ],
      description: `Engr. Md Abdus Sabur Khan is an elite industrialist and entrepreneur in Bangladesh. He is the Managing Director of MJL Bangladesh PLC. Mr. Hoque is the Chairman and owner of East Coast Group. In addition, he is also the Chairman of The Consolidated Tea & Lands Company Bangladesh Limited (formerly, James Finlay Limited) and the Chairman of Prime Bank Limited. Mr. Hoque is the President of Bangladesh Ocean Going Ship Owner’s Association (BOGSOA) and Bangladesh Energy Companies Association. In the past, Mr. Hoque has served as the Chairman of Green Delta Insurance Company Limited (2001 – 2005), one of the most successful general insurance companies in Bangladesh.\n\nHe is also the Director of Central Depository Bangladesh Limited (CDBL) and a Member of the Executive of Bangladesh Association of Publicly listed Companies (BAPLC). Mr. Hoque also served as the Vice President of Bangladesh Energy Companies Association and a Member of Advisory Council of Government of the People’s Republic of Bangladesh on Power, Energy & Mineral Resources. In recognition to his performance, The Hungarian Government nominated him as the Honorary Consul of Hungary in Bangladesh.`
   
 
  },
  {
    id: 3,
    name: "Md Jasim Uddin ",
    role: "Director (Marketing) ",
    image: "/images/team/boardOfDirectors/member/jasimsir.png",
      highlights: [
        "Director (Marketing), ENI Corporation",
        // "Nominee Director, Omera Fuels Limited",
        // "Chairman, The Consolidated Tea & Lands Company Bangladesh Limited (Finlay)",
        // "President, Bangladesh Ocean Going Ship Owner’s Association (BOGSOA)",
        // "President, Bangladesh Energy Companies Association",
      ],
      description: `Engr. Md Jasim Uddin is an elite industrialist and entrepreneur in Bangladesh. He is the Managing Director of MJL Bangladesh PLC. Mr. Hoque is the Chairman and owner of East Coast Group. In addition, he is also the Chairman of The Consolidated Tea & Lands Company Bangladesh Limited (formerly, James Finlay Limited) and the Chairman of Prime Bank Limited. Mr. Hoque is the President of Bangladesh Ocean Going Ship Owner’s Association (BOGSOA) and Bangladesh Energy Companies Association. In the past, Mr. Hoque has served as the Chairman of Green Delta Insurance Company Limited (2001 – 2005), one of the most successful general insurance companies in Bangladesh.\n\nHe is also the Director of Central Depository Bangladesh Limited (CDBL) and a Member of the Executive of Bangladesh Association of Publicly listed Companies (BAPLC). Mr. Hoque also served as the Vice President of Bangladesh Energy Companies Association and a Member of Advisory Council of Government of the People’s Republic of Bangladesh on Power, Energy & Mineral Resources. In recognition to his performance, The Hungarian Government nominated him as the Honorary Consul of Hungary in Bangladesh.`
   
 
  },
   {
    id: 4,
    name: "Md. Abdul Momin",
    role: "General Manager (Sales & Marketing)",
    image: "/images/team/boardOfDirectors/member/mominsir.png",
      highlights: [
        "Director (Marketing), ENI Corporation",
        // "Nominee Director, Omera Fuels Limited",
        // "Chairman, The Consolidated Tea & Lands Company Bangladesh Limited (Finlay)",
        // "President, Bangladesh Ocean Going Ship Owner’s Association (BOGSOA)",
        // "President, Bangladesh Energy Companies Association",
      ],
      description: `Md. Abdul Momin is an elite industrialist and entrepreneur in Bangladesh. He is the Managing Director of MJL Bangladesh PLC. Mr. Hoque is the Chairman and owner of East Coast Group. In addition, he is also the Chairman of The Consolidated Tea & Lands Company Bangladesh Limited (formerly, James Finlay Limited) and the Chairman of Prime Bank Limited. Mr. Hoque is the President of Bangladesh Ocean Going Ship Owner’s Association (BOGSOA) and Bangladesh Energy Companies Association. In the past, Mr. Hoque has served as the Chairman of Green Delta Insurance Company Limited (2001 – 2005), one of the most successful general insurance companies in Bangladesh.\n\nHe is also the Director of Central Depository Bangladesh Limited (CDBL) and a Member of the Executive of Bangladesh Association of Publicly listed Companies (BAPLC). Mr. Hoque also served as the Vice President of Bangladesh Energy Companies Association and a Member of Advisory Council of Government of the People’s Republic of Bangladesh on Power, Energy & Mineral Resources. In recognition to his performance, The Hungarian Government nominated him as the Honorary Consul of Hungary in Bangladesh.`
   
 
  },
  {
    id: 5,
    name: "M K Hassan Rumi",
    role: "General Manager (Accounts & Admin)",
    image: "/images/team/boardOfDirectors/member/rumisir.png",
      highlights: [
        "General Manager (Accounts & Admin), ENI Corporation",
        // "Nominee Director, Omera Fuels Limited",
        // "Chairman, The Consolidated Tea & Lands Company Bangladesh Limited (Finlay)",
        // "President, Bangladesh Ocean Going Ship Owner’s Association (BOGSOA)",
        // "President, Bangladesh Energy Companies Association",
      ],
      description: `M K Hassan Rumi is an elite industrialist and entrepreneur in Bangladesh. He is the Managing Director of MJL Bangladesh PLC. Mr. Hoque is the Chairman and owner of East Coast Group. In addition, he is also the Chairman of The Consolidated Tea & Lands Company Bangladesh Limited (formerly, James Finlay Limited) and the Chairman of Prime Bank Limited. Mr. Hoque is the President of Bangladesh Ocean Going Ship Owner’s Association (BOGSOA) and Bangladesh Energy Companies Association. In the past, Mr. Hoque has served as the Chairman of Green Delta Insurance Company Limited (2001 – 2005), one of the most successful general insurance companies in Bangladesh.\n\nHe is also the Director of Central Depository Bangladesh Limited (CDBL) and a Member of the Executive of Bangladesh Association of Publicly listed Companies (BAPLC). Mr. Hoque also served as the Vice President of Bangladesh Energy Companies Association and a Member of Advisory Council of Government of the People’s Republic of Bangladesh on Power, Energy & Mineral Resources. In recognition to his performance, The Hungarian Government nominated him as the Honorary Consul of Hungary in Bangladesh.`
   
 
  },
  {
    id: 6,
    name: "M. Shamim Rahman",
    role: "Deputy General Manager (Technical)",
    image: "/images/team/boardOfDirectors/member/shamimsir2.jpg",
      highlights: [
        "Deputy General Manager (Technical), ENI Corporation",
        // "Nominee Director, Omera Fuels Limited",
        // "Chairman, The Consolidated Tea & Lands Company Bangladesh Limited (Finlay)",
        // "President, Bangladesh Ocean Going Ship Owner’s Association (BOGSOA)",
        // "President, Bangladesh Energy Companies Association",
      ],
      description: `Engr. M. Shamim Rahman is an elite industrialist and entrepreneur in Bangladesh. He is the Managing Director of MJL Bangladesh PLC. Mr. Hoque is the Chairman and owner of East Coast Group. In addition, he is also the Chairman of The Consolidated Tea & Lands Company Bangladesh Limited (formerly, James Finlay Limited) and the Chairman of Prime Bank Limited. Mr. Hoque is the President of Bangladesh Ocean Going Ship Owner’s Association (BOGSOA) and Bangladesh Energy Companies Association. In the past, Mr. Hoque has served as the Chairman of Green Delta Insurance Company Limited (2001 – 2005), one of the most successful general insurance companies in Bangladesh.\n\nHe is also the Director of Central Depository Bangladesh Limited (CDBL) and a Member of the Executive of Bangladesh Association of Publicly listed Companies (BAPLC). Mr. Hoque also served as the Vice President of Bangladesh Energy Companies Association and a Member of Advisory Council of Government of the People’s Republic of Bangladesh on Power, Energy & Mineral Resources. In recognition to his performance, The Hungarian Government nominated him as the Honorary Consul of Hungary in Bangladesh.`
   
 
  },
  
 
  {
    id: 7,
    name: "Engr. Md. Abu Hasan",
    role: "Assistant General Manager (Sales & Operations)",
    image: "/images/team/boardOfDirectors/member/hasansir.png",
     highlights: [
        "General Manager (Accounts & Admin), ENI Corporation",
        // "Nominee Director, Omera Fuels Limited",
        // "Chairman, The Consolidated Tea & Lands Company Bangladesh Limited (Finlay)",
        // "President, Bangladesh Ocean Going Ship Owner’s Association (BOGSOA)",
        // "President, Bangladesh Energy Companies Association",
      ],
      description: `Engr. Md. Abu Hasan is an elite industrialist and entrepreneur in Bangladesh. He is the Managing Director of MJL Bangladesh PLC. Mr. Hoque is the Chairman and owner of East Coast Group. In addition, he is also the Chairman of The Consolidated Tea & Lands Company Bangladesh Limited (formerly, James Finlay Limited) and the Chairman of Prime Bank Limited. Mr. Hoque is the President of Bangladesh Ocean Going Ship Owner’s Association (BOGSOA) and Bangladesh Energy Companies Association. In the past, Mr. Hoque has served as the Chairman of Green Delta Insurance Company Limited (2001 – 2005), one of the most successful general insurance companies in Bangladesh.\n\nHe is also the Director of Central Depository Bangladesh Limited (CDBL) and a Member of the Executive of Bangladesh Association of Publicly listed Companies (BAPLC). Mr. Hoque also served as the Vice President of Bangladesh Energy Companies Association and a Member of Advisory Council of Government of the People’s Republic of Bangladesh on Power, Energy & Mineral Resources. In recognition to his performance, The Hungarian Government nominated him as the Honorary Consul of Hungary in Bangladesh.`
   
  },

  
];

export default function DirectorsGrid() {

  const [selectedDirector, setSelectedDirector] = useState(null);


  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          Our Team
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-center">
          Meet the leadership team steering ENI Corporation with integrity and
          purpose.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map((d) => (
            <div
              key={d.id}
              className="group rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow flex flex-col cursor-pointer"
              onClick={() => setSelectedDirector(d.id)}
            >
              <div className="relative h-96 flex items-center justify-center">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-5 text-center">
                <h3
                  className="text-xl font-bold text-gray-900 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDirector(d.id);
                  }}
                >
                  {d.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{d.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedDirector && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 bg-opacity-50">
            <div className="bg-white rounded-lg max-w-6xl w-full mx-4 p-8 relative flex flex-col md:flex-row gap-8">
              {/* Close button */}
              <button
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 text-2xl"
                onClick={() => setSelectedDirector(null)}
                aria-label="Close"
              >
                &times;
              </button>
              {/* Image */}
              <div className="flex-shrink-0 flex justify-center items-center md:w-1/2">
                <div className="relative w-80 h-96 mx-auto">
                  <Image
                    src={directors.find((d) => d.id === selectedDirector)?.image}
                    alt={directors.find((d) => d.id === selectedDirector)?.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
              {/* Details */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {directors.find((d) => d.id === selectedDirector)?.name}
                </h2>
                <hr className="my-4" />
                <ul className="mb-4 space-y-2">
                  {directors.find((d) => d.id === selectedDirector)?.highlights?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 w-2 h-2 rounded-full bg-red-600 inline-block" />
                      <span className="text-sm font-medium text-gray-900">{item}</span>
                    </li>
                  ))}
                </ul>
                <hr className="my-4" />
                <p className="text-sm text-gray-800 whitespace-pre-line text-justify">
                  {directors.find((d) => d.id === selectedDirector)?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
