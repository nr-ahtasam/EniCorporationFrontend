import React from 'react';

export default function AboutCounter({ counters }) {
 
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 w-full max-w-3xl">
        {counters.map((counter, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300"
          >
            <div className="text-[32px] lg:text-[32px] xl:text-4xl md:text-5xl font-extrabold text-red-500 mb-2 drop-shadow-lg">
              {counter.value}
            </div>
            <div className=" text-[32px] lg:text-[22px] xl:text-[20px] text-gray-700 font-medium">
              {counter.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}