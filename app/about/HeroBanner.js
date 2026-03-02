

import React from 'react';

export default function HeroBanner() {
  return (
    <section className="relative h-[400px] flex items-center justify-start bg-gray-900 mb-8">
      <img
        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
        alt="Corporate building"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="relative z-10 px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Powering the mobility <br /> <span className="font-light">of the nation</span>
        </h1>
      </div>
    </section>
  );
}


