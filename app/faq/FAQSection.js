"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Automark?",
    answer:
      "Automark is Toyota’s brand for the Used Cars business. With Automark, you can buy an approved or certified used car, sell your vehicle — of any make or model — or trade in your current car for a new or used one."
  },
  {
    question: "Why should I deal with Automark?",
    answer: "Automark offers certified vehicles, transparent processes, and peace of mind for buyers and sellers."
  },
  {
    question: "Can I trade-in a non-Toyota car at Automark?",
    answer: "Yes, Automark accepts trade-ins of any make or model, not just Toyota vehicles."
  },
  {
    question: "What are the benefits of purchasing used car from Automark?",
    answer: "You get a certified, quality-checked vehicle with warranty and after-sales support."
  },
  {
    question: "How can I sell my car to Automark?",
    answer: "Visit an Automark location for a quick evaluation and offer for your vehicle."
  },
  {
    question: "What are the benefits of purchasing used car from Automark?",
    answer: "Certified vehicles, warranty, and a transparent buying process."
  },
  {
    question: "How can I buy a used car from Automark?",
    answer: "Browse available cars online or visit an Automark location to see vehicles in person."
  },
  {
    question: "What are the benefits of trade in with Automark?",
    answer: "Convenient process, fair valuation, and the ability to upgrade to a new or used car easily."
  },
  {
    question: "How can I trade-in my car with Automark?",
    answer: "Bring your car to Automark for an evaluation and receive a trade-in offer on the spot."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-white">
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b pb-4">
            <button
              className={`flex items-center gap-2 text-left w-full focus:outline-none ${openIndex === idx ? 'text-red-600 font-semibold' : 'text-gray-900 font-semibold'}`}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              <span className={`border rounded text-red-600 w-7 h-7 flex items-center justify-center mr-2 font-bold text-lg`}>{openIndex === idx ? '-' : '+'}</span>
              {faq.question}
            </button>
            {openIndex === idx && (
              <div className="mt-2 text-gray-700 text-base pl-10">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
