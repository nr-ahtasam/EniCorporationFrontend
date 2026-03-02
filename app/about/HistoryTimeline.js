"use client";
import React, { useRef, useState, useEffect } from 'react';

import Image from 'next/image';
export default function HistoryTimeline() {

  const timeline = [
    {
      title: 'The Inception of ENI Corporation',
      desc: `ENI Corporation is a dynamic and forward-looking enterprise in Bangladesh, built on a commitment to deliver high-quality lubricant solutions and value-driven service across diverse industries. Since its establishment, ENI Corporation has expanded its footprint by serving key sectors such as manufacturing, power plants, government institutions, defense, and the automotive market.\n\nFrom the beginning, ENI Corporation has focused on innovation, reliability, and customer satisfaction. Over the years, the company has strengthened its position in the national market by consistently offering world-class lubricants, advanced technology-driven products, and tailored industrial solutions.\n\nENI Corporation’s journey is further enriched by its long-term vision to build a state-of-the-art lubricant blending plant in Bangladesh. This milestone reflects the company’s ambition to support the country’s growing industrial needs and reduce dependency on imported lubricant products. As ENI continues to evolve, it remains dedicated to introducing modern technology, ensuring environmental responsibility, and driving transformative progress within the lubricant industry of Bangladesh.`,
      img: '/images/industrial/image37.jpg',
    },
    {
      title: 'The Beginning of Q8Oils',
      desc: `Q8Oils traces its origins to Kuwait Petroleum Corporation (KPC), one of the world’s largest and most influential national oil companies. Established under the global expansion initiative of Kuwait Petroleum International (KPI) in the early 1980s, Q8Oils was created to redefine the lubricant industry with advanced formulation, innovation, and premium-quality products.\n\nBuilt on Kuwait’s rich legacy in the oil and energy sector, Q8Oils quickly positioned itself as a global leader. Through decades of strategic growth, the company developed a strong presence across Europe, Asia, and the Middle East, supported by state-of-the-art blending plants, robust research facilities, and a wide distribution network.\n\nQ8Oils is recognized for its excellence in every stage of the lubricant value chain—from refining high-quality base oils to producing specialized automotive, industrial, and marine lubricants. The company’s commitment to technology-driven solutions, sustainability, and operational efficiency has enabled it to stand among the most trusted global lubricant brands.\n\nWith a reputation for reliability and innovation, Q8Oils continues to power industries worldwide, delivering exceptional performance and long-term protection across diverse applications.`,
      img: '/images/Q8Oil/58.jpg',
    },
    {
      title: 'A Century of Success for ENI and Q8Oils',
      desc: `The shared commitment of ENI Corporation and Q8Oils reflects their unified drive to deliver excellence, innovation, and reliability within the global lubricant and energy sectors. Their continued focus on meeting evolving industrial needs with high-quality, sustainable solutions has strengthened their position across regional and international markets.\n\nThough built on different origins, both ENI Corporation and Q8Oils embody a legacy of growth, advancement, and operational brilliance. Their long-standing presence in the lubricant industry highlights a journey shaped by strategic expansion, technological development, and customer-centric service. Over the decades.\n\nLooking back at their histories demonstrates how far ENI Corporation and Q8Oils have progressed in becoming influential names in the petroleum and lubricant sectors. With a foundation built on trust, innovation, and sustainability, ENI Corporation and Q8Oils continue to define success while shaping the future of the lubricant industry.`,
      img: '/images/Q8Oil/34.jpg',
    },
    {
      title: 'The Partnership of ENI Corporation and Q8Oils',
      desc: `The collaboration between ENI Corporation and Q8Oils marks a significant milestone in the lubricant industry, reshaping their journey with greater influence and operational strength. By aligning their expertise, product innovation, and market strategies, both companies have elevated their ability to serve diverse industries with advanced, high-performance lubricant solutions.\n\nThis partnership reflects a shared commitment to harnessing their combined capabilities to deliver superior value within an increasingly competitive global market. Working together enables ENI Corporation and Q8Oils to maximize , and ensuring consistent product quality.\n\nMoreover, environmentally responsible lubrication solutions. Their unified approach supports long-term sustainability for industries, communities, and the environment. Through this strategic partnership, ENI Corporation and Q8Oils continue to move forward with a future-focused vision, bringing reliable, efficient, and forward-thinking solutions to the market.`,
      img: '/images/partner image/image12.jpg',
    },
    {
      title: 'The Partnership of ENI  and Paramount',
      desc: `The strategic collaboration between ENI Corporation and Paramount further enhances ENI’s capability to deliver integrated, value-driven solutions across Bangladesh’s industrial and commercial sectors. By joining forces, ENI Corporation benefits from Paramount’s strong market presence, operational experience, and commitment to excellence in service delivery.\n\nThis partnership strengthens ENI Corporation’s ability to expand its nationwide network, optimize supply chain efficiency, and ensure that premium-grade lubricants reach clients with improved accessibility and reliability. Through combined resources and mutual expertise, ENI Corporation and Paramount are positioned to meet the growing demands of industries with enhanced performance, competitive pricing, and dependable service.\n\nTogether, ENI Corporation and Paramount share a unified vision of supporting industrial growth through innovative, sustainable, and customer-centric solutions. Their partnership symbolizes progress, collaboration, and a strong dedication to shaping a more efficient and resilient lubricant ecosystem within Bangladesh.`,
      img: '/images/partner image/image10.jpg',
    },
    
  ];

  // Animation logic for all images
  // Hooks must be initialized after timeline is defined
  const imgRefs = useRef(Array(timeline.length).fill(null).map(() => React.createRef()));
  const [barActive, setBarActive] = useState(Array(timeline.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      setBarActive(
        imgRefs.current.map(ref => {
          if (!ref.current) return false;
          const rect = ref.current.getBoundingClientRect();
          return rect.top < window.innerHeight && rect.bottom > 0;
        })
      );
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [timeline.length]);

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">History</h2>
      <div className="w-full h-px bg-black mb-6" />
      <div className="flex flex-col gap-24">
        {timeline.map((item, idx) => {
          const isEven = idx % 2 === 0;
          const barActiveItem = barActive[idx];
          return (
            <div key={item.title} className="flex flex-col md:flex-row items-center justify-center gap-x-12 relative">
              {/* Left side (desc) or image depending on even/odd */}
              {isEven ? (
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-red-600 mb-4 text-right">{item.title}</h3>
                  <p className="text-justify text-base text-gray-800 mb-6 whitespace-pre-line">{item.desc}</p>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="object-cover rounded-lg shadow-lg w-[600px] h-[400px]"
                  />
                  <div className="absolute left-0 bottom-0 w-full h-2 overflow-hidden">
                    <div className="h-full bg-red-500 rounded transition-all duration-700 will-change-transform" style={{ width: '100%' }} />
                  </div>
                </div>
              )}

              {/* Vertical line and counter - improved for full height and centered */}
              <div className="relative flex flex-col items-center justify-center" style={{ minHeight: '400px', height: '100%' }}>
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 flex flex-col items-center w-0 h-[400px]">
                  <div className="w-0.5 h-full bg-red-600 absolute top-0 left-1/2 -translate-x-1/2" />
                  <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-15 h-15 rounded-full bg-red-500 text-white flex items-center justify-center text-lg font-bold border-4 border-white shadow">{idx + 1}</span>
                </div>
              </div>

              {/* Right side (image or desc) depending on even/odd */}
              {isEven ? (
                <div className="flex-1 flex flex-col items-center justify-center relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="object-cover rounded-lg shadow-lg w-[600px] h-[400px]"
                  />
                  <div className="absolute left-0 bottom-0 w-full h-2 overflow-hidden">
                    <div className="h-full bg-red-500 rounded transition-all duration-700 will-change-transform" style={{ width: '100%' }} />
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-red-600 mb-4 text-center">{item.title}</h3>
                  <p className="text-justify text-base text-gray-800 mb-6 whitespace-pre-line">{item.desc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );

}

