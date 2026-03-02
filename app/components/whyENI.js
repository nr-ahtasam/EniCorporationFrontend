'use client'

import Image from "next/image";

const features = [
  {
    id: 1,
    icon: (
      <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Excellence through 99 Quality Standards",
    description: "Projects are executed according to 99 quality checkpoints so you are sure when you partner with ENI Corporation"
  },
  {
    id: 2,
    icon: (
      <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Peace of Mind & Trust",
    description: "Clear and transparent experience at every step"
  },
  {
    id: 3,
    icon: (
      <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Trade-In with benefit",
    description: "New project delivery priority with ENI Trade-in"
  },
  {
    id: 4,
    icon: (
      <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="6" y="6" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Prompt Payment",
    description: "Receive your project price promptly"
  },
  {
    id: 5,
    icon: (
      <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Any models",
    description: "All industry sectors are accepted."
  }
];

export default function WhyENI() {
  return (
    <section className="relative isolate overflow-hidden py-10 ">
         {/* Background image */}
            <Image
              src="/images/whyEni/image1.jpg"
              alt="Car engine oil"
              fill
              priority
              sizes="100vw"
              className="absolute inset-0 -z-10 h-full scale-125 object-cover"
            />
      
            {/* Gradient overlay (between image and content) */}
            <div className="    absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-white/90 to-white/85 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
              Why ENI?
            </h2>

            {/* Image Gallery */}
            <div className="relative h-[450px] md:h-[500px]">
              {/* Top Left Image - Small */}
              <div className="absolute top-0 left-0 w-60 md:w-72 h-36 md:h-44 rounded-xl md:rounded-2xl overflow-hidden shadow-xl z-30 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/whyEni/image7.jpg"
                  alt="ENI Office Interior"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Middle Right Image - Largest, overlapping */}
              <div className="absolute top-16 md:top-20 left-16 md:left-20 w-72 md:w-96 h-44 md:h-56 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl z-20 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/whyEni/image8.jpg"
                  alt="ENI Building"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Left Image - Medium, lower position */}
              <div className="absolute bottom-0 left-0 w-64 md:w-80 h-40 md:h-48 rounded-xl md:rounded-2xl overflow-hidden shadow-xl z-10 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/whyEni/image9.jpg"
                  alt="ENI Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Features List */}
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4 group">
                {/* Icon */}
                <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
