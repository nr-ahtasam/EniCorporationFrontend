// import { useState } from 'react';
"use client";
import { useState } from "react";

export default function GuidingPrinciples() {
  const principles = [
   
    {
      title: 'Customers',
      text: 'True success depends on the satisfaction of consumers. Therefore, Mobil dedicated itself to providing consistent and top-notch quality products and services at competitive prices by initiating exemplary strategies and swift responsiveness in their operations.'
    },
    {
      title: 'Employees',
      text: 'Mobil believes that the potential to seek the right mind in their operation provides them a competitive advantage. Through training and development, they enrich the capabilities to deliver the right ideas and broaden business opportunities to grow as a whole. Hence, the commitment lies in maintaining a safe working environment and enlightening communication that encourages equality and motivates fair treatment and trust.'
    },
    {
      title: 'Communities',
      text: 'Mobil regulates its operations in the community in a responsible manner to keep the society and the environment clean, by maintaining ethical standards and obeying the applicable laws. The flexibility and adaptation to changes and implementation of innovation for the betterment of the surrounding area are the foremost priorities for our corporation’s allegiance to the community. Mobil regulates its operations in the community in a responsible manner to keep the society and the environment clean, by maintaining ethical standards and obeying the applicable laws. The flexibility and adaptation to changes and implementation of innovation for the betterment of the surrounding area are the foremost priorities for our corporation’s allegiance to the community.'
    }
  ];
  const [expanded, setExpanded] = useState([false, false, false, false]);
  const handleToggle = idx => {
    setExpanded(expanded => expanded.map((v, i) => (i === idx ? !v : v)));
  };
  return (
    <section className=" w-full mx-auto bg-gray-900 py-12 px-4 z-10">
      <div className=" container mx-auto">
        <h2 className="text-lg font-semibold text-white mb-4">Guiding principles</h2>
        <div className=" bg-white mb-6 relative z-10" />
        <p className="text-white text-base mb-8">
          <span className="text-red-500 font-bold">ENI’s</span> fundamental values include workplace flexibility, strong safety and security measures, respect for individual human rights, and the promotion of integrity, diversity, and inclusion.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4  ">
          {principles.map(({ title, text }, idx) => {
            const isLong = text.split(' ').length > 50;
            const maxWords = 50;
            const words = text.split(' ');
            const truncated = words.slice(0, maxWords).join(' ');
            return (
              <div
                key={title}
                className={`bg-black rounded-lg shadow-[0_4px_24px_0_rgba(30,30,30,0.7)] p-6 flex flex-col justify-between items-start w-full transition-all duration-300 ${expanded[idx] ? 'h-auto' : 'min-h-[340px] h-[340px]'}`}
              >
                <h4 className="text-white font-bold mb-2">{title}</h4>
                <div className="relative w-full flex-1">
                  <p className="text-gray-300 text-base">
                    {!expanded[idx] && isLong
                      ? <>
                          {truncated}
                          <span
                            className="text-blue-400 cursor-pointer underline ml-2"
                            onClick={() => handleToggle(idx)}
                          >
                            See more
                          </span>
                        </>
                      : <>
                          {text}
                          {isLong && (
                            <span
                              className="text-blue-400 cursor-pointer underline ml-2"
                              onClick={() => handleToggle(idx)}
                            >
                              See less
                            </span>
                          )}
                        </>
                    }
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

