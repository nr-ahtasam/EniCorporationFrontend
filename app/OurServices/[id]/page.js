"use client";

import { notFound } from "next/navigation";
import Image from "next/image";

// const services = [
//   {
//     id: "used-oil-analysis",
//     icon: "/images/ourService/image2.jpg",
//     title: "Used Oil Analysis",
//     desc: "Our Q8Oils Routine Analysis Service (QRAS) gives you a detailed and reliable report on the condition of your oil.",
//     details: "Detailed information about Used Oil Analysis service goes here.",
//   },
//   {
//     id: "technical-support",
//     icon: "/images/ourService/image6.jpg",
//     title: "Technical Support",
//     desc: "For expert advice on product applications, specifications, safety requirements and more, contact Q8Oils technical service, PALUB.",
//     details: "Detailed information about Technical Support service goes here.",
//   },
//   {
//     id: "customer-service",
//     icon: "/images/ourService/image4.jpg",
//     title: "Customer Service",
//     desc: "It is crucial to detect any internal defects to keep engines running and for a longer service life.",
//     details: "Detailed information about Customer Service goes here.",
//   },
// ];

export default function ServiceDetailPage({ params }) {
  const service = services.find((s) => s.id === params.id);

  if (!service) return notFound();

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 text-center">
      <Image
        src={service.icon}
        alt={service.title}
        width={200}
        height={200}
        className="mx-auto mb-6 rounded-full object-cover"
      />
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-700 mb-6">{service.desc}</p>
      <div className="text-gray-600">{service.details}</div>
    </div>
  );
}