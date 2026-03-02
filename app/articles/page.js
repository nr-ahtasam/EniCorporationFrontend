"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { label: "Automotive", count: 60 },
  { label: "Energy", count: 49 },
  { label: "General Industry", count: 19 },
  { label: "Metalworking", count: 71 },
  { label: "Other News", count: 38 },
];

import articles from "./articlesData";

export default function ArticlesPage() {
  const [selected, setSelected] = useState([]);

  const toggleCategory = (cat) => {
    setSelected((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    );
  };

  const filteredArticles =
    selected.length === 0
      ? articles
      : articles.filter((a) => selected.includes(a.category));

  return (
    <div className="flex flex-col md:flex-row container mx-auto py-12 px-4 gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 mb-8 md:mb-0">
        <h2 className="text-2xl font-bold text-[#18398b] mb-6">Industries</h2>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.label} className="flex items-center">
              <input
                type="checkbox"
                checked={selected.includes(cat.label)}
                onChange={() => toggleCategory(cat.label)}
                className="mr-2"
              />
              <span className="text-gray-700">{cat.label}</span>
              <span className="ml-2 text-gray-500 text-sm">({cat.count})</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Articles Grid */}
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((a, i) => (
          <div
            key={i}
            className="bg-white rounded p-6 shadow flex flex-col justify-between min-h-[340px] border overflow-hidden"
          >
            <div>
              <div className="w-full h-40 mb-4 relative">
                <Image
                  src={a.image || "/images/automobil/image11.jpg"}
                  alt={a.title}
                  fill
                  className="object-cover rounded"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={i < 3}
                />
              </div>
              <div className="text-xs font-bold text-red-600 mb-2 uppercase">{a.category}</div>
              <Link href={`/articles/${i}`} className="text-xl font-semibold text-[#18398b] mb-2 leading-snug block hover:underline">
                {a.title}
              </Link>
              <div className="text-xs text-gray-500 mb-6">{a.date}</div>
            </div>
            <Link href={`/articles/${i}`} className="mt-auto bg-[#18398b] text-white font-bold py-2 rounded hover:bg-blue-900 transition text-center block">
              READ ARTICLE
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}