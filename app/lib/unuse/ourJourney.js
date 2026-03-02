

"use client";
import React from 'react';

export default function OurJourney() {
  return (
    <section className="relative my-12 px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Decorative SVG background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1440&q=80"
          alt="Industrial background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-red-600 drop-shadow-lg" style={{ fontFamily: 'var(--font-open-sans)', fontWeight: 700 }}>
          Our Journey
        </h2>
        <div className="space-y-6 text-gray-900 leading-relaxed max-w-3xl mx-auto text-lg">
          <p>
            Since our inception in 2011, ENI Corporation has evolved from a dedicated trading business into a trusted name in the lubricant and filtration industry in Bangladesh. What began as a vision to deliver world-class lubricant solutions has grown into a comprehensive service platform serving diverse sectors—including industries, power plants, government agencies, defense, and the automotive market.
          </p>
          <p>
            Our early focus on high-end and specialty lubricants laid the foundation for long-term customer relationships and deep technical capabilities. Over the years, we have continuously adapted to meet the changing needs of our clients—enhancing our portfolio, investing in technology, and strengthening our after-sales support.
          </p>
          <p>
            With an unwavering commitment to quality, innovation, and sustainability, ENI Corporation is now setting its sights on building a technologically advanced blending plant within Bangladesh, aiming to secure a position among the top 10 lubricant companies in the country by 2030.
          </p>
          <p>
            Our journey reflects our values—simplicity, integrity, and service excellence—and our dedication to delivering impactful solutions that drive productivity, protect the environment, and contribute to national growth.
          </p>
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

