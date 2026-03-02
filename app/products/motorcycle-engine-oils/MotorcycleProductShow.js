"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../data"; // <-- use shared data + categories

const INITIAL_SHOW = 10;

export default function CarEngineOilsProductShow() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0); // 0 = ALL
  const [searchQuery, setSearchQuery] = useState("");
  const [shownCountMap, setShownCountMap] = useState({});

  // only products in "Car Engine Oils" group
  const allCarEngineProducts = PRODUCTS.filter((product) => product.category === "Motorcycle Engine Oils");

  // filter by productCategoryId (uses product.productCategoryId from data.js)
  const filteredProducts = allCarEngineProducts
    .filter((product) => {
      if (selectedCategoryId === 0) return true; // ALL
      return Number(product.productCategoryId) === Number(selectedCategoryId);
    })
    .filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const shownCount = shownCountMap[selectedCategoryId] ?? INITIAL_SHOW;
  const productsToShow = filteredProducts.slice(0, shownCount);

  // useEffect(() => {
  //   setShownCountMap((prev) => {
  //     if (prev[selectedCategoryId] !== INITIAL_SHOW) {
  //       return { ...prev, [selectedCategoryId]: INITIAL_SHOW };
  //     }
  //     return prev;
  //   });
  // }, [selectedCategoryId, searchQuery]);

  const handleSeeMore = () =>
    setShownCountMap((prev) => {
      const current = prev[selectedCategoryId] ?? INITIAL_SHOW;
      const next = Math.min(current + INITIAL_SHOW, filteredProducts.length);
      return { ...prev, [selectedCategoryId]: next };
    });

  const handleSeeLess = () =>
    setShownCountMap((prev) => ({ ...prev, [selectedCategoryId]: INITIAL_SHOW }));

  return (
    <div className="w-full px-8 py-12 bg-white">
      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center justify-center w-full">
        <div className="w-full flex flex-nowrap overflow-x-auto gap-2 sm:gap-4 pb-2 sm:pb-0 ">
          {PRODUCT_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategoryId(category.id)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200 ${
                selectedCategoryId === category.id ? "bg-black text-white" : "bg-gray-200 text-black"
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
          className="ml-auto px-4 py-2 border text-black border-red-900 rounded-full text-sm focus:outline-none"
          style={{ minWidth: 220 }}
        />
      </div>
<h2 className="text-lg font-semibold mb-4 text-black">{PRODUCT_CATEGORIES.find(cat => cat.id === selectedCategoryId)?.name || "All Categories"}</h2>
      <hr className="mb-8 text-black" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8">
        {productsToShow.map((product) => (
          <div key={product.id} className="flex flex-col md:flex-row items-center md:items-start gap-0 text-black">
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
              <h3 className="text-base font-semibold mb-2">{product.title}</h3>
              <p className="text-xs text-gray-700 mb-4">{product.description}</p>
              <div className="flex gap-2 mb-2">
                {(product.tags || []).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-black text-white text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <Link href={`/products/${product.id}`} className="inline-flex items-center px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:opacity-95 hover:bg-red-500 transform:scale(1) hover:scale-105 transition-all">
                  Read More
                </Link>

                {(() => {
                  const pdsHref = product.pdsUrl ? product.pdsUrl : product.pdsFilename ? `/images/pds/${product.pdsFilename}` : `/images/pds/${product.id}.pdf`;
                  const isExternal = Boolean(product.pdsUrl);
                  return (
                    <a
                      href={pdsHref}
                      className="inline-flex items-center px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:opacity-95 hover:bg-red-500 transform:scale(1) hover:scale-105 transition-all"
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      download={isExternal ? undefined : true}
                    >
                      PDS
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
              <button className="px-6 py-2 bg-red-600 text-white rounded-full font-semibold" onClick={handleSeeMore}>
                See More
              </button>
            ) : (
              <button className="px-6 py-2 bg-gray-400 text-black rounded-full font-semibold" onClick={handleSeeLess}>
                See Less
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}








// "use client";

// import { useState,useEffect } from "react";

// const productCategories = [
//   { id: 0, name: "ALL" },
//   { id: 1, name: "Full Synthetic" },
//   { id: 2, name: "Synthetic Based" },
//   // { id: 3, name: "Transmission Fluids" },
 
// ];
// const products = [
//   {
//     title: "Q8 City 4T 10W-30 ",
//     description:
//       "Q8 Super™ All-in-One Protection 0W-16 helps keep the engine clean and running efficiently. Q8 Super™ All-in-One Protection 0W-16 is a full synthetic motor oil which is known for its improvement of fuel saving, performance while reducing emissions to give great protection and performance.",
//     image: "/images/products/CVO/Q8 City 4T 10W-30.jpeg",
//     tags: ["Full Synthetic", ],
//     categoryId: 1,
//   },
//   {
//     title: "Q8 Sport 4T 10W-40",
//     description:
//       "Q8 Super™ All-in-One Protection 0W-16 helps keep the engine clean and running efficiently. Q8 Super™ All-in-One Protection 0W-16 is a full synthetic motor oil which is known for its improvement of fuel saving, performance while reducing emissions to give great protection and performance.",
//     image: "/images/products/CVO/Q8 Sport 4T 10W-40.jpeg",
//     tags: ["Full Synthetic", ],
//     categoryId: 1,
//   },
//   {
//     title: "Q8 Racing 10W-50",
//     description:
//       "Q8 Super™ All-in-One Protection 0W-16 helps keep the engine clean and running efficiently. Q8 Super™ All-in-One Protection 0W-16 is a full synthetic motor oil which is known for its improvement of fuel saving, performance while reducing emissions to give great protection and performance.",
//     image: "/images/products/CVO/Q8 Racing 10W-50.jpeg",
//     tags: ["Full Synthetic", ],
//     categoryId: 1,
//   },
//   {
//     title: "Q8 Allroads 10w40",
//     description:
//       "Q8 Super™ All-in-One Protection 0W-16 helps keep the engine clean and running efficiently. Q8 Super™ All-in-One Protection 0W-16 is a full synthetic motor oil which is known for its improvement of fuel saving, performance while reducing emissions to give great protection and performance.",
//     image: "/images/products/CVO/Q8 Allroads 10w40.jpeg",
//     tags: ["Synthetic Based", ],
//     categoryId: 2,
//   },
 
// ];



// export default function ProductsPage() {
//   const [selectedCategory, setSelectedCategory] = useState(productCategories[0].id);
//   const [search, setSearch] = useState("");
//   // shownCountMap: { [categoryId]: number }
//   const [shownCountMap, setShownCountMap] = useState({});
//   const filteredProducts = products
//     .filter((product) =>
//       selectedCategory === 0 ? true : product.categoryId === selectedCategory
//     )
//     .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
//   const selectedCategoryName = productCategories.find(cat => cat.id === selectedCategory)?.name || "";
//   // Default to 10 shown for each category unless increased
//   const shownCount = shownCountMap[selectedCategory] || 10;
//   const productsToShow = filteredProducts.slice(0, shownCount);
//   // Reset shownCount when category or search changes
//   useEffect(() => {
//     setShownCountMap(prev => {
//       if ((prev[selectedCategory] && prev[selectedCategory] !== 10) || !prev[selectedCategory]) {
//         return { ...prev, [selectedCategory]: 10 };
//       }
//       return prev;
//     });
//   }, [selectedCategory, search]);
//   const handleSeeMore = () => {
//     setShownCountMap((prev) => ({
//       ...prev,
//       [selectedCategory]: Math.min((prev[selectedCategory] || 10) + 10, filteredProducts.length)
//     }));
//   };
//   const handleSeeLess = () => {
//     setShownCountMap((prev) => ({ ...prev, [selectedCategory]: 10 }));
//   };
//   return (
//     <div className="w-full px-8 py-12 bg-white">
//       {/* Category Headings and Search */}
//       <div className="flex flex-wrap gap-4 mb-6 items-center justify-center">
//         <div className="flex justify-center gap-4 w-full">
//           {productCategories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setSelectedCategory(cat.id)}
//               className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200 ${selectedCategory === cat.id ? "bg-black text-white" : "bg-gray-200 text-black"}`}
//             >
//               {cat.name}
              
//             </button>
//           ))}
//         </div>
//         <input
//           type="text"
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//           placeholder="Search product name..."
//           className="ml-auto px-4 py-2 border text-black border-red-900 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black"
//           style={{ minWidth: 220 }}
//         />
//       </div>
//       <h2 className="text-lg font-semibold mb-4 text-black">{selectedCategoryName}</h2>
//       <hr className="mb-8 text-black" />
//       <div className="container mx-auto px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8">
//           {filteredProducts.length === 0 ? (
//             <div className="col-span-2 text-center text-gray-500">No products found for this category.</div>
//           ) : (
//             <>
//               {productsToShow.map((product, idx) => (
//                 <div key={product.title + idx} className="flex flex-col md:flex-row items-center md:items-start gap-0 text-black">
//                   <div className="w-full md:w-1/2 flex justify-center">
//                     <img src={product.image} alt={product.title} className="w-48 h-48 object-contain bg-gray-100 border border-gray-300 rounded-3xl" />
//                   </div>
//                   <div className="w-full md:w-1/2 flex flex-col justify-center">
//                     <h3 className="text-base font-semibold mb-2">{product.title}</h3>
//                     <p className="text-xs text-gray-700 mb-4">{product.description}</p>
//                     <div className="flex gap-2 mb-2">
//                       {product.tags.map((tag) => (
//                         <span key={tag} className="px-2 py-1 bg-black text-white text-xs rounded-full">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                     <div className="flex gap-2">
//                       <button className="px-4 py-1 bg-black text-white text-xs rounded">Read More</button>
//                       <button className="px-4 py-1 bg-black text-white text-xs rounded">Download</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               {/* See More button after every 10 products, if more remain */}
//               {shownCount < filteredProducts.length && (
//                 <div className="col-span-2 flex justify-center mt-8">
//                   <button
//                     className="px-6 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-gray-800 transition-all"
//                     onClick={handleSeeMore}
//                   >
//                     See More
//                   </button>
//                 </div>
//               )}
//               {/* See Less button at the end if all products are shown and more than 10 */}
//               {shownCount >= filteredProducts.length && filteredProducts.length > 10 && (
//                 <div className="col-span-2 flex justify-center mt-8">
//                   <button
//                     className="px-6 py-2 bg-gray-400 text-black rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-all"
//                     onClick={handleSeeLess}
//                   >
//                     See Less
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }