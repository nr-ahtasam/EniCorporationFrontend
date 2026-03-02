"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BrandCards from "./BrandCards";

export default function OverviewSection() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="w-full mx-auto px-4 relative  overflow-hidden">
      {/* background image */}
      <Image
        src="/images/overview/image8.jpg"
        alt="Car engine oil"
        className="absolute inset-0 w-full h-full object-cover z-0"
        fill
        priority
      />

        <div className="absolute inset-0 w-full h-full bg-white opacity-80 z-10 pointer-events-none" />
      <div className="container mx-auto relative z-10">

        <h2
          className={
            "text-lg font-semibold text-gray-700 mb-2 relative z-10 lg:pt-5 xl:pt-30 motion-preset-typewriter-[24]"
          }
        >
          About ENI Overview
        </h2>

        <div
          className={
            "w-full h-px bg-black mb-6 relative z-10 transition-transform transition-opacity duration-700 ease-out origin-left " +
            (visible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0")
          }
        />

        <div
          className={
            "p-6 flex flex-col md:flex-row gap-8 items-center relative z-10"
          }
        >
          <div className="flex-1">
            <h1 className="lg:text-[18px] xl:text-2xl  mb-4 text-black font-fsAlbert font-extrabold tracking-tight  text-justify">
              <span className="  text-red-600">ENI Corporation</span> Founded in 2011 by the grace of Almighty God, established with a clear commitment—to be more than just a supplier. We strive to be a trusted partner in providing end-to-end lubrication and filtration solutions backed by leading technologies, premium products, and in-depth industry expertise.
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center relative z-10 md:pt-10">
          <div className="flex flex-col items-center justify-center w-full md:w-2/5">
            <img src="/images/logo/Logo.png" alt="Mobil Logo" className="w-56 h-56 object-contain mb-2 animate-pulse" />
          </div>

          <div className="w-full md:w-4/5 text-justify font-albert font-light">
            <p className="text-gray-700 text-base mb-10 font-sans  ">
              With a deep understanding of the unique challenges in the lubrication and filtration sectors, ENI Corporation goes beyond product delivery. We actively support our clients through technical consultation, problem-solving, and tailored solutions—whether it involves optimizing equipment performance, resolving lubrication or filtration issues, or improving storage, handling, and packaging efficiency. Driven by our core values of integrity, innovation, and customer-centric service, we remain committed to keeping your operations running smoothly and sustainably.
            </p>

            <p className="text-gray-700 text-base mb-10 font-sans">
              Since our inception in 2011, ENI Corporation has evolved from a dedicated trading business into a trusted name in the lubricant and filtration industry in Bangladesh. What began as a vision to deliver world-class lubricant solutions has grown into a comprehensive service platform serving diverse sectors—including industries, power plants, government agencies, defense, and the automotive market.
            </p>

            <p className="text-gray-700 text-base mb-10 font-sans">
              Our early focus on high-end and specialty lubricants laid the foundation for long-term customer relationships and deep technical capabilities. Over the years, we have continuously adapted to meet the changing needs of our clients—enhancing our portfolio, investing in technology, and strengthening our after-sales support. With an unwavering commitment to quality, innovation, and sustainability, ENI Corporation is now setting its sights on building a technologically advanced blending plant within Bangladesh, aiming to secure a position among the top 10 lubricant companies in the country by 2030. Our journey reflects our values—simplicity, integrity, and service excellence—and our dedication to delivering impactful solutions that drive productivity, protect the environment, and contribute to national growth.
            </p>
          </div>
        </div>

        {/* <BrandCards /> */}
      </div>
    </section>
  );
}

