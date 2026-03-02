import React from 'react'

const WhatDoTheyDo = ({ title, items }) => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#18398b] mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-start text-left">
              <h3 className="text-lg font-semibold text-[#18398b] mb-2">{item.title}</h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatDoTheyDo;