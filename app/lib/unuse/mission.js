import React from 'react';

export default function Mission() {
  return (
    <section className="my-10 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="  flex flex-col md:flex-row items-center text-center overflow-hidden ">
       
        <div className="md:w-1/2 w-full p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-700" style={{ fontFamily: 'var(--font-open-sans)', fontWeight: 700 }}>
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mb-2">
            At ENI Corporation, our mission is to deliver premium, technology-driven lubricant solutions that serve the dynamic needs of industries, power plants, government institutions, defense, and the automotive sector. We are committed to enhancing operational efficiency and sustainability through top-tier products, unmatched service quality, and a strong focus on environmental responsibility.
          </p>
        </div>

        <div className="md:w-1/2 w-full h-full flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
            alt="New industrial lubricant home mission"
            className="object-cover w-full h-full md:h-64 rounded-none md:rounded-l-2xl"
          />
        </div>
      </div>
    </section>
  );
}
