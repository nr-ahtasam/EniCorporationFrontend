'use client'

import { useState, useEffect } from "react";
import Link from "next/link";

const infoCards = [
  {
    id: 1,
    title: "Board of Directors",
    icon: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    link: "/about/board-of-directors",
    bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Campaign",
    icon: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 2v4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 2v4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    link: "/campaigns",
    bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Financial Reports",
    icon: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    link: "/financial-reports",
    bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Quality Assurance & Certifications",
    icon: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    link: "/quality-assurance",
    bgImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Sustainability Initiatives",
    icon: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M12 2C7 2 3 7 3 12s4 10 9 10M12 2c5 0 9 5 9 10s-4 10-9 10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    link: "/sustainability/ApproachSustainability",
    bgImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop"
  }
];

export default function InfoCards() {
  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  // Duplicate cards for seamless infinite loop
  const duplicatedCards = [...infoCards, ...infoCards];

  // Seamless infinite loop animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setOffset((prev) => prev - 25); // Move by 25% (one card width)
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle transition end for seamless loop reset
  useEffect(() => {
    if (Math.abs(offset) >= infoCards.length * 25) {
      setTimeout(() => {
        setIsTransitioning(false);
        setOffset(0);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500); // Wait for transition to complete
    }
  }, [offset]);

  return (
    <section className="relative py-20 bg-gray-50">
      {/* Decorative Background Element at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-r from-gray-200 to-white transform -skew-y-2 origin-bottom-left"></div>
      
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Desktop Slider View - Shows 4 cards at a time */}
        <div className="hidden lg:block relative">
          <div className="overflow-hidden">
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-linear' : ''}`}
              style={{ transform: `translateX(${offset}%)` }}
            >
              {duplicatedCards.map((card, idx) => (
                <div key={`desktop-${idx}`} className="w-1/4 shrink-0 px-3">
                  <Link
                    href={card.link}
                    className="group relative overflow-hidden rounded-lg shadow-lg block aspect-4/3 bg-cover bg-center transition-transform duration-300 hover:scale-105"
                    style={{
                      backgroundImage: `url('${card.bgImage}')`,
                      backgroundColor: '#1a1a1a'
                    }}
                  >
                    {/* Icon - Top Left Corner */}
                    <div className="absolute top-6 left-6 transform transition-transform duration-300 group-hover:scale-110">
                      {card.icon}
                    </div>

                    {/* Plus Button - Center of Card */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white text-2xl font-light transition-all duration-300 group-hover:bg-white group-hover:text-black"
                        aria-label={`View ${card.title}`}
                      >
                        +
                      </button>
                    </div>

                    {/* Title - Bottom Left Corner */}
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-xl font-bold text-white text-left">
                        {card.title}
                      </h3>
                    </div>

                    {/* Hover Overlay - Slides up from bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-black/80 via-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Slider View */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-lg">
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-linear' : ''}`}
              style={{ transform: `translateX(${offset * 4}%)` }}
            >
              {duplicatedCards.map((card, idx) => (
                <div key={`mobile-${idx}`} className="w-full shrink-0 px-2">
                  <Link
                    href={card.link}
                    className="group relative overflow-hidden rounded-lg shadow-lg block h-80 md:h-96"
                    style={{
                      backgroundImage: `url('${card.bgImage}')`,
                      backgroundColor: '#1a1a1a',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Icon - Top Left Corner */}
                    <div className="absolute top-6 left-6 transform transition-transform duration-300 group-hover:scale-110">
                      {card.icon}
                    </div>

                    {/* Plus Button - Center of Card */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white text-2xl font-light transition-all duration-300 group-hover:bg-white group-hover:text-black"
                        aria-label={`View ${card.title}`}
                      >
                        +
                      </button>
                    </div>

                    {/* Title - Bottom Left Corner */}
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-xl font-bold text-white text-left">
                        {card.title}
                      </h3>
                    </div>

                    {/* Hover Overlay - Slides up from bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-black/80 via-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
