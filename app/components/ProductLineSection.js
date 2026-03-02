'use client'

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PRODUCTS = [
  "Car Engine Oils",
  "Motorcycle Engine Oils",
  "Bus Truck Engine Oils",
  "Vehicle Care Lubricants",
  "Marine Oils",
  "Grease Products",
];

// Image array for slider
const SLIDER_IMAGES = [
  "/images/productSliderImage/1.svg",
  "/images/productSliderImage/2.svg",
  "/images/productSliderImage/3.svg",
  "/images/productSliderImage/4.svg",
  "/images/productSliderImage/5.svg",
  "/images/productSliderImage/6.svg"
];

export default function ProductLineSection() {
  const router = useRouter();
  const [open, setOpen] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef(null);
  const redBoxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !redBoxRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only animate when section is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate scroll position relative to section
        const scrollPosition = windowHeight - rect.top;
        const maxScroll = rect.height + windowHeight;
        const scrollRatio = Math.max(0, Math.min(1, scrollPosition / maxScroll));
        
        // Move red box up as we scroll down (max 400px movement)
        const offset = scrollRatio * 400;
        setScrollOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProductClick = (idx, isOpen) => {
    setOpen(isOpen ? null : idx);
    setSliderIndex(idx % SLIDER_IMAGES.length);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full flex flex-col lg:flex-row min-h-[1200px] bg-white relative overflow-hidden"
    >
      {/* Section-wide background image */}
      <Image
        src="/images/privateCar/image1.jpg"
        alt="Section Background"
        fill
        className="object-cover grayscale absolute inset-0 w-full h-full z-0"
        style={{ pointerEvents: 'none' }}
      />

      {/* Left: overlay + text */}
      <div className="relative flex-1 flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
        <div className="relative z-20 p-8">
          <h2 className="text-3xl font-bold text-black lg:text-white">Q8Oils for all</h2>
        </div>
      </div>

      {/* Center: Image Slider with red background - Scroll animated */}
      <div className="flex flex-col items-end justify-center lg:w-1/4 w-full py-8 z-30">
        <div 
          ref={redBoxRef}
          className="relative w-80 h-80 rounded-md overflow-hidden shadow-lg flex items-center justify-center"
          style={{ 
            backgroundColor: '#e30613',
            transform: `translateY(-${scrollOffset}px)`,
            transition: 'transform 0.1s linear',
            willChange: 'transform'
          }}
        >
          <img
            src={SLIDER_IMAGES[sliderIndex]}
            alt="Product Line"
            className={`w-full h-full object-contain transition-transform duration-500 ${animating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
            style={{ willChange: 'transform, opacity' }}
          />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl pointer-events-none">
            Product Line
          </span>
        </div>
      </div>

      {/* Right: Accordion */}
      <div className="w-full max-w-2xl flex items-center justify-start bg-white z-30 m-auto">
        <ul className="w-full divide-y divide-gray-200">
          {PRODUCTS.map((product, idx) => {
            const details = {
              "Car Engine Oils": "Delivers outstanding performance and protection on the road under different operating conditions.",
              "Motorcycle Engine Oils": "High-performance oils for motorcycles, ensuring engine longevity and smooth rides.",
              "Bus Truck Engine Oils": "Engine oils designed for heavy-duty vehicles, providing durability and reliability.",
              "Vehicle Care Lubricants": "Specialized oils for automotive care and maintenance.",
              "Marine Oils": "Oils formulated for marine engines and vessels.",
              "Grease Products": "Premium greases for various automotive and industrial applications."
            };
            const isOpen = open === idx;
            return (
              <li
                key={product}
                className="flex flex-col px-6 py-12 group relative overflow-hidden cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-semibold text-gray-800 relative z-10 peer"
                    onClick={() => handleProductClick(idx, isOpen)}
                  >
                    {product}
                  </span>
                  <button
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 relative z-20
                      ${isOpen ? 'bg-red-600' : 'bg-gray-100'}
                      peer-hover:bg-red-600 hover:bg-gray-200`}
                    tabIndex={-1}
                    aria-label={isOpen ? "Collapse" : "Expand"}
                  >
                    {isOpen ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M6 12h12" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-900 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    )}
                  </button>
                </div>
                <span className="absolute left-0 bottom-0 w-full h-full transition-transform duration-300 ease-out scale-y-0 origin-bottom group-hover:scale-y-100 opacity-80 z-0" style={{backgroundColor: 'rgb(225, 228, 230)'}}></span>
                {isOpen && (
                  <div className="mt-6 relative z-30">
                    <div className="mb-6 text-gray-800 font-medium">{details[product]}</div>
                    <button
                      className="inline-flex items-center px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:opacity-95 hover:bg-red-500 transform:scale(1) hover:scale-105 transition-all"
                      onClick={() => router.push(`/products/${product.toLowerCase().replace(/\s+/g, '-')}`)}
                    >
                      Read More
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
