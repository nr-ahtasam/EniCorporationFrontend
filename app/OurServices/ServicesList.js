"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesList() {
  const services = [
    {
      id: "used-oil-analysis",
      icon: "/images/ourService/image2.jpg",
      title: "Used Oil Analysis",
      desc: "Our Q8Oils Routine Analysis Service (QRAS) gives you a detailed and reliable report on the condition of your oil.",
      button: "Used Oil Analysis",
    },
    {
      id: "technical-support",
      icon: "/images/ourService/image6.jpg",
      title: "Technical Support",
      desc: "For expert advice on product applications, specifications, safety requirements and more, contact Q8Oils technical service, PALUB.",
      button: "Technical Support",
    },
    {
      id: "customer-service",
      icon: "/images/ourService/image4.jpg",
      title: "Customer Service",
      desc: "It is crucial to detect any internal defects to keep engines running and for a longer service life.",
      button: "Customer Service",
    },
  ];

  return (
    <div className="w-full py-8 mt-8 rounded-xl">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between items-center text-center bg-white shadow-sm rounded-xl px-4 py-6 h-full"
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={220}
              height={220}
              className="mb-4 rounded-full object-cover w-40 h-40 md:w-56 md:h-56"
            />
            <Link
              href={`/OurServices/${service.id}`}
              className="text-lg md:text-xl font-semibold text-[#18398b] mb-2"
            >
              {service.title}
            </Link>
            <p className="text-gray-600 mb-6 text-sm md:text-base">{service.desc}</p>
            <div className="mt-auto w-full flex">
              <Link href={`/OurServices/${service.id}`} className="w-full">
                <button className="w-full bg-[#ffc41c] hover:bg-[#ffb300] text-[#18398b] font-bold py-2 rounded transition-colors duration-200 uppercase tracking-wide text-xs md:text-base">
                  {service.button}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}