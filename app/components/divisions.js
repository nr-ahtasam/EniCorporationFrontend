'use client'

import Image from "next/image";
import React from "react";

const DIVISIONS = [
  { id: 1, name: "Industrial & Infrastructure", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop", height: "h-80" },
  { id: 2, name: "Real Estate Development", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop", height: "h-96" },
  { id: 3, name: "Healthcare Services", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop", height: "h-64" },
  { id: 4, name: "Manufacturing", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop", height: "h-72" },
  { id: 5, name: "Retail & Distribution", image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&auto=format&fit=crop", height: "h-96" },
  { id: 6, name: "Port, Terminal & Shipping", image: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?w=800&auto=format&fit=crop", hasOverlay: true, height: "h-80" },
  { id: 7, name: "Education", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop", height: "h-64" },
  { id: 8, name: "Hospitality & Tourism", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&auto=format&fit=crop", height: "h-72" },
];

export default function Divisions() {
  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-3xl font-bold text-center mb-12">OUR DIVISIONS</h2>
        
        <div className="columns-2 md:columns-4 gap-6 space-y-6">
          {DIVISIONS.map((division) => (
            <div
              key={division.id}
              className={`relative ${division.height} rounded-lg overflow-hidden group cursor-pointer shadow-lg break-inside-avoid mb-6`}
            >
              <Image
                src={division.image}
                alt={division.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {division.hasOverlay && (
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{division.name}</h3>
                    <span className="text-sm font-semibold">Learn More →</span>
                  </div>
                </div>
              )}
              
              {!division.hasOverlay && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">{division.name}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}