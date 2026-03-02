'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";



const slides = [
  {
    id: 1,
    type: "video",
    title: "",
    subtitle: "",
    description: "",
    videoUrl: "/images/videos/Q8videos/insta_video21.mp4",
    buttonText: "",
    buttonLink: "",
    accentColor: ""
  },
  {
    id: 2,
    title: "",
    subtitle: "",
    description: "",
    image: "/images/Banner/image1.jpeg",
    buttonText: "",
    buttonLink: "",
    accentColor: ""
  },
  {
    id: 3,
    title: "",
    subtitle: "",
    description: "",
    image: "/images/Banner/image2.jpg",
    buttonText: "",
    buttonLink: "",
    accentColor: ""
  },
  {
    id: 4,
    type: "video",
    title: "",
    subtitle: "",
    description: "",
    videoUrl: "/images/videos/Q8videos/insta_video4.mp4",
    buttonText: "",
    buttonLink: "",
    accentColor: ""
  },
  {
    id: 5,
    title: "",
    subtitle: "",
    description: "",
    image: "/images/Banner/image3.jpg",
    buttonText: "",
    buttonLink: "",
    accentColor: ""
  },
  // {
  //   id: 6,
  //   type: "video",
  //   title: "",
  //   subtitle: "",
  //   description: "",
  //   videoUrl: "/images/videos/Q8videos/insta_video21.mp4",
  //   buttonText: "",
  //   buttonLink: "",
  //   accentColor: ""
  // },
    {
    id: 7,
    title: "",
    subtitle: "",
    description: "",
    image: "/images/Banner/image4.jpg",
    buttonText: "",
    buttonLink: "",
    accentColor: ""
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Removed isLoaded state to avoid setState in effect; animations handled via CSS classes

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 30000); // Auto-advance every 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle video play/pause on slide change
  useEffect(() => {
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach((video, index) => {
      if (index === currentSlide && slides[index].type === 'video') {
        video.play().catch(err => console.log('Video play error:', err));
      } else if (slides[index] && slides[index].type === 'video') {
        video.pause();
      }
    });
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[400px]  lg:h-[600px] xl:h-[800px] overflow-hidden ">
      {/* Slider Container */}
      <div className="relative w-full h-full ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image or Video */}
            <div className="absolute inset-0 z-0">
              <div className="absolute "></div>
              {slide.type === 'video' ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full lg:w-full lg:h-full object-fill"
                  style={{ zIndex: 1 }}
                  poster={slide.poster || slide.image}
                >
                  <source src={slide.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="w-full h-full  object-center"
                />
              )}
              
              {/* Overlay */}
              {/* bg-linear-to-t from-gray-900/90 via-gray-900/60 to-gray-900/40 */}
              <div className="absolute inset-0 " style={{ zIndex: 2 }}></div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  {/* Main Heading with staggered animation */}
                  {index === currentSlide && (
                    <div className={`space-y-4`}>
                      <h1 className={`text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up`}>
                        {slide.title}
                      </h1>
                      <h2 className={`text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
                         <span className={`text-${slide.accentColor}-400`}>{slide.subtitle}</span>
                      </h2>
                    </div>
                  )}

                  {/* Description */}
                  {index === currentSlide && (
                    <p className={`mt-6 text-lg md:text-xl text-gray-200 max-w-xl animate-fade-in-left`} style={{ animationDelay: '0.4s' }}>
                      {slide.description}
                    </p>
                  )}

                  {/* CTA Buttons */}
                  {index === currentSlide && (
                    <div className={`mt-8 flex flex-wrap gap-4 animate-fade-in-up`} style={{ animationDelay: '0.6s' }}>
                      <a 
                        href={slide.buttonLink} 
                        className={`px-8 py-3 bg-${slide.accentColor}-600 hover:bg-${slide.accentColor}-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}
                      >
                        {slide.buttonText}
                      </a>
                      {/* <a 
                        href="#about" 
                        className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
                      >
                        Learn More
                      </a> */}
                    </div>
                  )}

                  {/* Stats Counter - Only for first slide */}
                  {/* {index === currentSlide && index === 0 && (
                    <div className={`mt-12 grid grid-cols-3 gap-6 animate-slide-in-right`} style={{ animationDelay: '0.8s' }}>
                      <div>
                        <div className="text-3xl md:text-4xl font-bold text-white">25+</div>
                        <div className="text-sm text-gray-300 mt-1">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
                        <div className="text-sm text-gray-300 mt-1">Product SKUs</div>
                      </div>
                      <div>
                        <div className="text-3xl md:text-4xl font-bold text-white">1000+</div>
                        <div className="text-sm text-gray-300 mt-1">Happy Clients</div>
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-red-500 hover:bg-blue-500 backdrop-blur-sm rounded-full lg:p-3  xl:p-3 transition-all duration-300 hover:scale-110 group"
        aria-label="Previous slide"
      >
        <svg className="lg:w-6 lg:h-6 xl:w-4 xl:h-4  text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-red-500 hover:bg-blue-500 backdrop-blur-sm rounded-full lg:p-3  xl:p-3 transition-all duration-300 hover:scale-110 group"
        aria-label="Next slide"
      >
        <svg className="lg:w-3 lg:h-3 xl:w-4 xl:h-4  text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 h-3 bg-white'
                : 'w-3 h-3 bg-red-500 hover:bg-blue-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white animate-bounce">
          <span className="text-sm mb-2">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}