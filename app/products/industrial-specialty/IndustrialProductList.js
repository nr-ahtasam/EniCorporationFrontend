"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS,INDUSTRIAL_CATEGORIES } from "../data"; // <-- new import (was local arrays)

export default function IndustrialProductList() {
	const [selectedCategory, setSelectedCategory] = useState("Q8 Circulating Oils");
	const [openId, setOpenId] = useState(null);

	const filtered =
		selectedCategory === "All"
			? PRODUCTS
			: PRODUCTS.filter((p) => p.category === selectedCategory);

	return (
		<section className="py-12 max-w-7xl mx-auto px-6 lg:px-8">
			<div className="grid grid-cols-12 gap-8">
				{/* Left category nav */}
				<aside className="col-span-12 lg:col-span-3">
					<ul className="space-y-3 text-sm">
						{INDUSTRIAL_CATEGORIES.map((cat) => {
							const active = cat === selectedCategory;
							return (
								<li key={cat}>
									<button
										onClick={() => {
											setSelectedCategory(cat);
											setOpenId(null);
										}}
										className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
											active
												? "text-red-600 font-semibold"
												: "text-gray-700 hover:text-red-600"
										}`}
									>
										<span className="inline-block align-middle">{cat}</span>
										{active && (
											<span className="ml-2 inline-block h-2 w-2 bg-red-600 rounded-full" />
										)}
									</button>
								</li>
							);
						})}
					</ul>
				</aside>

				{/* Right products / accordion */}
				<div className="col-span-12 lg:col-span-9">
					<div className="space-y-6">
						{filtered.length === 0 && (
							<div className="text-gray-600">
								No products found in this category.
							</div>
						)}

						{filtered.map((p) => {
							const expanded = openId === p.id;
							return (
								<div
									key={p.id}
									className="bg-white rounded-lg shadow-sm overflow-hidden"
								>
									<div className="w-full flex items-center justify-between px-6 py-6 text-left">
										{/* Make the title area clickable to toggle the accordion */}
										<button
											onClick={() =>
												setOpenId((cur) =>
													cur === p.id ? null : p.id
												)
											}
											aria-expanded={expanded}
											className="flex-1 pr-6 text-left focus:outline-none cursor-pointer"
										>
											<h3 className="text-xl lg:text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors">
												{p.title}
											</h3>
											{/* thin divider under title */}
											{/* <div className="mt-4 h-[1px] w-full bg-gray-200" /> */}
										</button>

										{/* expand / collapse control (round red button) */}
										<button
											onClick={() =>
												setOpenId((cur) =>
													cur === p.id ? null : p.id
												)
											}
											aria-expanded={expanded}
											className={`flex items-center justify-center w-10 h-10 rounded-full transition-transform hover:bg-red-500  ${
												expanded
													? "rotate-180 bg-red-600 text-white"
													: "bg-white text-gray-800 border border-gray-200"
											}`}
											title={expanded ? "Collapse" : "Expand"}
										>
											<svg
												className="w-5 h-5"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M6 9l6 6 6-6" />
											</svg>
										</button>
									</div>

									{/* expanded area */}
									<div
										className={`px-6 pb-6 transition-max-height duration-300 overflow-hidden  ${
											expanded ? "max-h-[480px]" : "max-h-0"
										}`}
									>
										{/* red rule matching screenshot */}
										<div className="h-[1px] bg-red-600 w-full rounded-full mb-6" />

										<p className="text-gray-700 mb-6">
											{p.description}
										</p>

										<div className="flex flex-wrap items-center gap-4">
											{/* Read More -> product page */}
											<Link
												href={`/products/${p.id}`}
												className="inline-flex items-center px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:opacity-95 hover:bg-red-500 transform:scale(1) hover:scale-105 transition-all"
											>
												Read More
											</Link>

											{/* Download PDS (PDF) - prefer external pdsUrl, then explicit filename, then id-based fallback */}
											{(() => {
												const pdsHref = p.pdsUrl
													? p.pdsUrl
													: p.pdsFilename
														? `/images/pds/${p.pdsFilename}`
														: `/images/pds/${p.id}.pdf`;
												const isExternal = Boolean(p.pdsUrl);

												return (
													<a
														href={pdsHref}
														className="inline-flex items-center px-6 py-2 bg-black border border-gray-900 rounded-full text-sm font-medium hover:bg-red-500 transform:scale(1) hover:scale-105 transition-all"
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
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}