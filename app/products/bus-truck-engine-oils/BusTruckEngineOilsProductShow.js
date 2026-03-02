"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../data";

const INITIAL_SHOW = 10;

export default function BusTruckEngineOilsProductShow() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [shownCountMap, setShownCountMap] = useState({});

  // Filter only Bus & Truck Engine Oils
  const allCarEngineProducts = PRODUCTS.filter(
    (product) => product.category === "Bus & Truck Engine Oils"
  );

  const filteredProducts = allCarEngineProducts
    .filter((product) => {
      if (selectedCategoryId === 0) return true;
      return Number(product.productCategoryId) === Number(selectedCategoryId);
    })
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const shownCount = shownCountMap[selectedCategoryId] ?? INITIAL_SHOW;
  const productsToShow = filteredProducts.slice(0, shownCount);

  // ✅ FIXED: setState only when needed (no infinite rerenders)
  // useEffect(() => {
  //   const alreadyInitial =
  //     shownCountMap[selectedCategoryId] === INITIAL_SHOW;

  //   if (!alreadyInitial) {
  //     setShownCountMap((prev) => ({
  //       ...prev,
  //       [selectedCategoryId]: INITIAL_SHOW,
  //     }));
  //   }
  // }, [selectedCategoryId, shownCountMap]);

  const handleSeeMore = () =>
    setShownCountMap((prev) => {
      const current = prev[selectedCategoryId] ?? INITIAL_SHOW;
      const next = Math.min(
        current + INITIAL_SHOW,
        filteredProducts.length
      );
      return { ...prev, [selectedCategoryId]: next };
    });

  const handleSeeLess = () =>
    setShownCountMap((prev) => ({
      ...prev,
      [selectedCategoryId]: INITIAL_SHOW,
    }));

  return (
    <div className="w-full px-8 py-12 bg-white">
      <div className="flex flex-wrap flex-col sm:flex-row gap-4 mb-6 items-center justify-center w-full">
        <div className="w-full flex flex-nowrap overflow-x-auto gap-2 sm:gap-4 pb-2 sm:pb-0 ">
          {PRODUCT_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategoryId(category.id)}
              className={`flex-shrink-0 px-3 sm:px-4 py-2 rounded-full font-semibold text-sm sm:text-sm transition-colors duration-200 ${
                selectedCategoryId === category.id
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search product name..."
          className="w-full sm:w-auto px-4 py-2 border text-black border-red-900 rounded-full text-sm focus:outline-none mt-2 sm:mt-0"
          style={{ minWidth: 220 }}
        />
      </div>

      <h2 className="text-lg font-semibold mb-4 text-black">
        {PRODUCT_CATEGORIES.find((cat) => cat.id === selectedCategoryId)
          ?.name || "All Categories"}
      </h2>

      <hr className="mb-8 text-black" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8">
        {productsToShow.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row items-center md:items-start gap-0 text-black"
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={product.image}
                alt={product.title}
                width={192}
                height={192}
                className="w-48 h-48 object-contain bg-gray-100 border border-gray-300 rounded-3xl"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-base font-semibold mb-2">
                {product.title}
              </h3>

              <p className="text-xs text-gray-700 mb-4">
                {product.description}
              </p>

              <div className="flex gap-2 mb-2">
                {(product.tags || []).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-black text-white text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex items-center px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:opacity-95 hover:bg-red-500 transform:scale(1) hover:scale-105 transition-all"
                >
                  Read More
                </Link>

                {(() => {
                  const pdsHref = product.pdsUrl
                    ? product.pdsUrl
                    : product.pdsFilename
                    ? `/images/pds/${product.pdsFilename}`
                    : `/images/pds/${product.id}.pdf`;

                  const isExternal = Boolean(product.pdsUrl);

                  return (
                    <a
                      href={pdsHref}
                      className="inline-flex items-center px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:opacity-95 hover:bg-red-500 transform:scale(1) hover:scale-105 transition-all"
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      download={isExternal ? undefined : true}
                    >
                      Download PDS
                    </a>
                  );
                })()}
              </div>
            </div>
          </div>
        ))}

        {filteredProducts.length > INITIAL_SHOW && (
          <div className="col-span-2 flex justify-center mt-8">
            {shownCount < filteredProducts.length ? (
              <button
                className="px-6 py-2 bg-red-600 text-white rounded-full font-semibold"
                onClick={handleSeeMore}
              >
                See More
              </button>
            ) : (
              <button
                className="px-6 py-2 bg-gray-400 text-black rounded-full font-semibold"
                onClick={handleSeeLess}
              >
                See Less
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
