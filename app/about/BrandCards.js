import React from 'react';

// app/about/BrandCards.js
export default function BrandCards() {
  const cards = [
    {
      title: 'Brand Promise',
      desc: 'At ENI Corporation, we promise to deliver excellence in every drop. Guided by our commitment to technology, sustainability, and customer success, we ensure that our lubricant solutions consistently enhance performance, protect valuable assets, and support the long-term growth of our partners. We pledge to uphold the highest standards of product quality, service integrity, and environmental responsibility. ',
      color: 'bg-[#006CB7]'
    },
    {
      title: 'Mission',
      desc: 'At ENI Corporation, our mission is to deliver premium, technology-driven lubricant solutions that serve the dynamic needs of industries, power plants, government institutions, defense, and the automotive sector. We are committed to enhancing operational efficiency and sustainability through top-tier products, unmatched service quality, and a strong focus on environmental responsibility.',
      color: 'bg-[#EB2127]'
    },
    {
      title: 'Vision',
      desc: 'We envision establishing a state-of-the-art lubricant blending plant within Bangladesh to meet the rapidly growing market demand. By 2030, ENI Corporation aims to be recognized among the top 10 lubricant companies in the country, leading the way in innovation, customer trust, and sustainable business practices.',
      color: 'bg-[#F8B322]'
    }
  ];
  return (
    <section className="flex flex-col md:flex-row gap-6 md:gap-8 my-12 justify-center px-2 md:px-4 z-50 w-full">
      {cards?.map(card => (
        <div
          key={card.title}
          className={`shadow p-6 md:p-8 w-full md:w-[360px] lg:w-[420px] xl:w-[520px] text-center ${card.color}`}
        >
          <h3 className="text-2xl font-bold text-white mt-5 mb-3">{card.title}</h3>
          <p className="text-white text-base text-justify">{card.desc}</p>
        </div>
      ))}
    </section>
  );
}