import React from 'react';

export default function SectionWithHighlights({ section }) {

  return (
    <div className=" flex flex-col md:flex-row gap-8 justify-center items-center relative z-10 md:pt-10">
      <div className="w-full lg:ml-100  text-justify font-albert font-light">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {section.id}. {section.title}
        </h2>
        <div className="w-full h-px bg-red-600 mb-6" />

        <p className="text-gray-700 text-base mb-8 font-sans ">
          {section.description}
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">{section.keyTitle}</h3>
        <div className="space-y-6">
          {section.highlights?.map((item) => (
            <div key={item.id} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {item.id}
              </div>
              <div className="flex-1">
                <h4 className="text-base font-semibold text-gray-900 mb-2">{item.title}:</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-700 text-base mb-8 font-sans  pt-5">
          {section.description2}
        </p>
      </div>
    </div>
  );
}