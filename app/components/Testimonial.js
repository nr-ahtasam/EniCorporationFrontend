'use client'

import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  
  {
    id: 1,
    name: "Meghna Petroleum Limited",
    role: "Business Owner",
    company: "Industrial Motors Ltd",
    location: "Motijheel",
    rating: 5,
    image: "/images/CustomerReview/image1.jpg",
    quote: "Exceptional quality and service! Remarkable performance improvements across our entire vehicle fleet. Asian Petroleum's expertise in lubricant solutions is truly outstanding.",
    badge: "DRIVE WITH ENI",
    badgeColor: "bg-red-600",
    category: "lubricants",
    achievement: {
      title: "Reliability",
      description: "Performance Boost",
      bgColor: "from-emerald-900/40 to-emerald-950/20 border-emerald-800/30"
    }
  },
 
  {
    id: 2,
    name: "Meghna Petroleum Limited",
    role: "Transport Manager",
    company: "Industrial Motors Ltd",
    location: "Dhaka",
    rating: 5,
    image: "/images/CustomerReview/image2.jpg",
    quote: "Our fleet maintenance costs dropped by 30% after switching to Q8Oils. The engine performance has never been better, and our drivers notice the difference immediately.",
    badge: "DRIVE WITH Q8",
    badgeColor: "bg-blue-600",
    category: "TRANSPORT SOLUTIONS",
    achievement: {
      title: "Reliability",
      description: "30% Savings",
      bgColor: "from-blue-900/40 to-blue-950/20 border-blue-800/30"
    }
  },
   {
    id: 3,
    name: "Meghna Petroleum Limited",
    role: "Business Owner",
    company: "Industrial Motors Ltd",
    location: "Motijheel",
    rating: 5,
    image: "/images/CustomerReview/image3.jpg",
    quote: "Exceptional quality and service! Remarkable performance improvements across our entire vehicle fleet. Asian Petroleum's expertise in lubricant solutions is truly outstanding.",
    badge: "DRIVE WITH ENI",
    badgeColor: "bg-green-600",
    category: "lubricants",
    achievement: {
      title: "Reliability",
      description: "Performance Boost",
      bgColor: "from-emerald-900/40 to-emerald-950/20 border-emerald-800/30"
    }
  },
  {
    id: 4,
    name: "Meghna Petroleum Limited",
    role: "Operations Director",
    company: "Industrial Motors Ltd",
    location: "Chittagong",
    rating: 5,
    image: "/images/CustomerReview/image4.jpg",
    quote: "image3 The technical support team is exceptional. They helped us optimize our lubricant selection for our heavy machinery, resulting in increased uptime and productivity.",
    badge: "PARAMOUNT QUALITY",
    badgeColor: "bg-amber-600",
    category: "INDUSTRIAL SOLUTIONS",
    achievement: {
      title: "Reliability",
      description: "Extended Durability",
      bgColor: "from-amber-900/40 to-amber-950/20 border-amber-800/30"
    }
  },
  {
    id: 5,
    name: "Meghna Petroleum Limited",
    role: "Garage Owner",
    company: "Auto Care Center",
    location: "Gulshan",
    rating: 5,
    image: "/images/CustomerReview/image5.jpg",
    quote: "As a professional mechanic, I only recommend products I trust. Q8Oils and Paramount lubricants have proven their quality time and time again with my customers.",
    badge: "TRUSTED PARTNER",
    badgeColor: "bg-yellow-600",
    category: "AUTOMOTIVE SERVICE",
    achievement: {
      title: "Reliability",
      description: "100% Satisfaction",
      bgColor: "from-yellow-900/40 to-yellow-950/20 border-yellow-800/30"
    }
  },
  {
    id: 6,
    name: "Meghna Petroleum Limited",
    role: "Coordinator",
    company: "",
    location: "Sylhet",
    rating: 5,
    image: "/images/CustomerReview/image6.jpg",
    quote: "Switching to ENI Corporation's products was the best decision for our delivery fleet. Fuel efficiency improved and engine troubles are now rare.",
    badge: "RELIABLE CHOICE",
    badgeColor: "bg-purple-600",
    category: "Lubricants",
    achievement: {
      title: "Fuel Efficiency",
      description: "20% Improvement",
      bgColor: "from-purple-900/40 to-purple-950/20 border-purple-800/30"
    }
  },
  {
    id: 7,
    name: "Meghna Petroleum Limited",
    role: "Coordinator",
    company: "",
    location: "Sylhet",
    rating: 5,
    image: "/images/CustomerReview/image7.jpg",
    quote: "Switching to ENI Corporation's products was the best decision for our delivery fleet. Fuel efficiency improved and engine troubles are now rare.",
    badge: "RELIABLE CHOICE",
    badgeColor: "bg-yellow-600 ",
    category: "Lubricants",
    achievement: {
      title: "Fuel Efficiency",
      description: "20% Improvement",
      bgColor: "from-yellow-900/40 to-yellow-950/20 border-yellow-800/30"
    }
  },
  {
    id: 8,
    name: "Meghna Petroleum Limited",
    role: "Coordinator",
    company: "",
    location: "Sylhet",
    rating: 5,
    image: "/images/CustomerReview/image8.jpg",
    quote: "Switching to ENI Corporation's products was the best decision for our delivery fleet. Fuel efficiency improved and engine troubles are now rare.",
    badge: "RELIABLE CHOICE",
    badgeColor: "bg-lime-600 ",
    category: "DELIVERY FLEET",
    achievement: {
      title: "Fuel Efficiency",
      description: "20% Improvement",
      bgColor: "from-lime-900/40 to-lime-950/20 border-lime-800/30"
    }
  },
  {
    id: 9,
    name: "Meghna Petroleum Limited",
    role: "Coordinator",
    company: "",
    location: "Sylhet",
    rating: 5,
    image: "/images/CustomerReview/image9.jpg",
    quote: "Switching to ENI Corporation's products was the best decision for our delivery fleet. Fuel efficiency improved and engine troubles are now rare.",
    badge: "RELIABLE CHOICE",
    badgeColor: "bg-emerald-600",
    category: "Lubricants",
    achievement: {
      title: "Fuel Efficiency",
      description: "20% Improvement",
      bgColor: "from-emerald-900/40 to-emerald-950/20 border-emerald-800/30"
    }
  },
  {
    id: 10,
    name: "Meghna Petroleum Limited",
    role: "Coordinator",
    company: "",
    location: "Sylhet",
    rating: 5,
    image: "/images/CustomerReview/image10.jpg",
    quote: "Switching to ENI Corporation's products was the best decision for our delivery fleet. Fuel efficiency improved and engine troubles are now rare.",
    badge: "RELIABLE CHOICE",
    badgeColor: "bg-teal-600",
    category: "DELIVERY FLEET",
    achievement: {
      title: "Fuel Efficiency",
      description: "20% Improvement",
      bgColor: "from-teal-900/40 to-teal-950/20 border-teal-800/30"
    }
  },
  {
    id: 11,
    name: "Meghna Petroleum Limited",
    role: "Coordinator",
    company: "",
    location: "Sylhet",
    rating: 5,
    image: "/images/CustomerReview/image11.jpg",
    quote: "Switching to ENI Corporation's products was the best decision for our delivery fleet. Fuel efficiency improved and engine troubles are now rare.",
    badge: "RELIABLE CHOICE",
    badgeColor: "bg-teal-600",
    category: "DELIVERY FLEET",
    achievement: {
      title: "Fuel Efficiency",
      description: "20% Improvement",
      bgColor: "from-teal-900/40 to-teal-950/20 border-teal-800/30"
    }
  },
  {
    id: 12,
    name: "Meghna Petroleum Limited",
    role: "Coordinator",
    company: "",
    location: "Sylhet",
    rating: 5,
    image: "/images/CustomerReview/image12.jpg",
    quote: "Switching to ENI Corporation's products was the best decision for our delivery fleet. Fuel efficiency improved and engine troubles are now rare.",
    badge: "RELIABLE CHOICE",
    badgeColor: "bg-teal-600",
    category: "DELIVERY FLEET",
    achievement: {
      title: "Fuel Efficiency",
      description: "20% Improvement",
      bgColor: "from-teal-900/40 to-teal-950/20 border-teal-800/30"
    }
  },
  {
    id: 13,
    name: "Meghna Petroleum Limited",
    role: "Coordinator",
    company: "",
    location: "Sylhet",
    rating: 5,
    image: "/images/CustomerReview/image13.jpg",
    quote: "Switching to ENI Corporation's products was the best decision for our delivery fleet. Fuel efficiency improved and engine troubles are now rare.",
    badge: "RELIABLE CHOICE",
    badgeColor: "bg-teal-600",
    category: "DELIVERY FLEET",
    achievement: {
      title: "Fuel Efficiency",
      description: "20% Improvement",
      bgColor: "from-teal-900/40 to-teal-950/20 border-teal-800/30"
    }
  },
  {
    id: 14,
    name: "Meghna Petroleum Limited",
    role: "Coordinator",
    company: "",
    location: "Sylhet",
    rating: 5,
    image: "/images/CustomerReview/image14.jpg",
    quote: "Switching to ENI Corporation's products was the best decision for our delivery fleet. Fuel efficiency improved and engine troubles are now rare.",
    badge: "RELIABLE CHOICE",
    badgeColor: "bg-teal-600",
    category: "DELIVERY FLEET",
    achievement: {
      title: "Fuel Efficiency",
      description: "20% Improvement",
      bgColor: "from-teal-900/40 to-teal-950/20 border-teal-800/30"
    }
  },
  {
    id: 15,
    name: "Meghna Petroleum Limited",
    role: "Coordinator",
    company: "",
    location: "Sylhet",
    rating: 5,
    image: "/images/CustomerReview/image15.jpg",
    quote: "Switching to ENI Corporation's products was the best decision for our delivery fleet. Fuel efficiency improved and engine troubles are now rare.",
    badge: "RELIABLE CHOICE",
    badgeColor: "bg-teal-600",
    category: "DELIVERY FLEET",
    achievement: {
      title: "Fuel Efficiency",
      description: "20% Improvement",
      bgColor: "from-teal-900/40 to-teal-950/20 border-teal-800/30"
    }
  },

  {
    id: 16,
    name: "Meghna Petroleum Limited",
    role: "Coordinator",
    company: "",
    location: "Sylhet",
    rating: 5,
    image: "/images/CustomerReview/image16.jpg",
    quote: "Switching to ENI Corporation's products was the best decision for our delivery fleet. Fuel efficiency improved and engine troubles are now rare.",
    badge: "RELIABLE CHOICE",
    badgeColor: "bg-teal-600",
    category: "DELIVERY FLEET",
    achievement: {
      title: "Fuel Efficiency",
      description: "20% Improvement",
      bgColor: "from-teal-900/40 to-teal-950/20 border-teal-800/30"
    }
  },
  {
    id: 17,
    name: "Meghna Petroleum Limited",
    role: "Coordinator",
    company: "",
    location: "Sylhet",
    rating: 5,
    image: "/images/CustomerReview/image17.jpg",
    quote: "Switching to ENI Corporation's products was the best decision for our delivery fleet. Fuel efficiency improved and engine troubles are now rare.",
    badge: "RELIABLE CHOICE",
    badgeColor: "bg-teal-600",
    category: "DELIVERY FLEET",
    achievement: {
      title: "Fuel Efficiency",
      description: "20% Improvement",
      bgColor: "from-teal-900/40 to-teal-950/20 border-teal-800/30"
    }
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative isolate overflow-hidden py-20">
      {/* Background image */}
      <Image
        src="/images/testimonial/image1.jpg"
        alt="Car engine oil"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Gradient overlay (between image and content) */}
      <div className="    absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-white/90 to-white/85 pointer-events-none" />

      {/* Optional soft blobs behind content */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-red-900/5 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-blue-900/5 blur-3xl" />
      </div>

      <div className="relative z-20 container mx-auto px-6 xl:px-6">
        <div className="xl:grid gap-8 lg:grid-cols-[400px_1fr]">
          {/* Left Card - Customer Info */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm">
            {/* Badge */}
            {/* <div className="absolute right-4 top-4 z-10">
              <div className={`${current.badgeColor} rounded-lg px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg`}>
                5+ Years
              </div>
            </div> */}

            {/* Red Banner */}
            {/* <div className={`${current.badgeColor} px-6 py-4`}>
              <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                {current.badge}
              </h3>
            </div> */}

            {/* Customer Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>

            {/* Customer Details */}
            <div className="p-6">
              {/* Rating */}
              <div className="mb-3 flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Name */}
              <h4 className="text-2xl font-bold text-white">{current.name}</h4>
              
              {/* Role */}
              <p className="mt-1 text-sm text-gray-400">{current.role}</p>

              {/* Company & Location */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  {current.company}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {current.location}
                </div>
              </div>

              {/* Category Badge */}
              <div className="mt-6">
                <span className="inline-block rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                  {current.category}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Quote & Achievement */}
          <div className="flex flex-col justify-center">
            {/* Quote Icon */}
            <div className="mb-6">
              <svg className="h-16 w-16 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote Text */}
            <blockquote className="mb-8 text-2xl font-light italic leading-relaxed text-black">
              &quot;{current.quote}&quot;
            </blockquote>

            {/* Achievement Card */}
            <div className={`rounded-xl border bg-gradient-to-br ${current.achievement.bgColor} p-6 backdrop-blur-sm`}>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-black/30 p-3">
                  <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-black">{current.achievement.title}</p>
                  <p className="mt-1 text-xl font-bold text-emerald-400">{current.achievement.description}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-between">
              {/* Arrow Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 text-gray-300 transition-all hover:border-red-600 hover:bg-red-600/10 hover:text-red-500"
                  aria-label="Previous testimonial"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 text-gray-300 transition-all hover:border-red-600 hover:bg-red-600/10 hover:text-red-500"
                  aria-label="Next testimonial"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Dots Indicator */}
              {/* <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-red-600'
                        : 'w-2 bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;