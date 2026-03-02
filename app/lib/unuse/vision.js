import React from 'react';

export default function Vision() {
  return (
    <section className="my-10 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50 rounded-2xl shadow-lg p-0 flex flex-col md:flex-row items-center text-center overflow-hidden">
        <div className="md:w-1/2 w-full h-full flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80"
            alt="New bike oil home vision"
            className="object-cover w-full h-full md:h-64 rounded-none md:rounded-l-2xl"
          />
        </div>
        <div className="md:w-1/2 w-full p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700" style={{ fontFamily: 'var(--font-open-sans)', fontWeight: 700 }}>
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mb-2">
            To be the leading provider of innovative, sustainable, and high-quality lubricant solutions in Bangladesh, empowering industries and communities to thrive in a rapidly changing world.
          </p>
        </div>
      </div>
    </section>
  );
}
