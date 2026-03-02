'use client'

import Image from "next/image";
import Link from "next/link";
import AboutCounter from './aboutCounter';
import WorkingArena from './workingArena';
const counters = [
  { value: '25+', label: 'Years Experience' },
  { value: '8+', label: 'Business Divisions' },
  { value: '1000+', label: 'Employees' }
];
export default function About() {
  return (
    <section className="relative isolate overflow-hidden py-20">
         {/* Background image */}
            <Image
              src="/images/about-us/image2.jpg"
              alt="Car engine oil"
              fill
              priority
              sizes="100vw"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
      
            {/* Gradient overlay (between image and content) */}
            <div className="    absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-white/90 to-white/85 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                About Us
              </span>
            </div>

            {/* <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              About ENI Corporation
            </h1> */}
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Leading the Way in Excellence and Innovation
            </h2>
            <WorkingArena/> 
          <AboutCounter counters={counters}/>
            {/* CTA Button */}
            <div className="pt-6">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                Learn More About Us
                <svg className="w-5 h-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/image3.jpg"
                alt="ENI Corporation Building"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-lime-200 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-200 rounded-2xl -z-10"></div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 bg-white rounded-lg shadow-xl p-6 max-w-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Mission</h4>
                  <p className="text-sm text-gray-600 text-justify">
                   At ENI Corporation, our mission is to deliver premium, technology-driven lubricant solutions that serve the dynamic needs of industries, power plants, government institutions, defense, and the automotive sector. We are committed to enhancing operational efficiency and sustainability through top-tier products, unmatched service quality, and a strong focus on environmental responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
