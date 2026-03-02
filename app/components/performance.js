'use client'

import Image from "next/image";
import React from "react";

const stats = [
	{
		label: "Happy Customers",
		value: "1000+",
		subLabel: "Happy Customers",
		accentClass: "from-red-800/30 to-red-800/10 border-red-700/40",
		icon: (
			<svg
				className="w-5 h-5 text-red-400"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M17 20h5v-2a4 4 0 0 0-4-4h-1M7 20H2v-2a4 4 0 0 1 4-4h1m6-6a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm6 4a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
				/>
			</svg>
		),
	},
	{
		label: "Satisfaction Rate",
		value: "98%",
		subLabel: "Satisfaction Rate",
		accentClass: "from-emerald-800/30 to-emerald-800/10 border-emerald-700/40",
		icon: (
			<svg
				className="w-5 h-5 text-emerald-400"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M5 13l4 4L19 7"
				/>
			</svg>
		),
	},
	{
		label: "Average Rating",
		value: "4.8/5",
		subLabel: "Average Rating",
		accentClass: "from-amber-800/30 to-amber-800/10 border-amber-700/40",
		icon: (
			<svg
				className="w-5 h-5 text-amber-400"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 17.3l5.09 3.02-1.36-5.83L19.8 10.4l-5.96-.5L12 4.4l-1.84 5.5-5.96.5 4.07 3.09-1.36 5.83L12 17.3Z"
				/>
			</svg>
		),
	},
	{
		label: "Years Trusted",
		value: "15+",
		subLabel: "Years Trusted",
		accentClass: "from-sky-800/30 to-sky-800/10 border-sky-700/40",
		icon: (
			<svg
				className="w-5 h-5 text-sky-400"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 6v6l4 2M12 22A10 10 0 1 0 12 2a10 10 0 0 0 0 20Z"
				/>
			</svg>
		),
	},
];

const ProvenPerformance = () => {
	return (
		<section className="relative overflow-hidden text-white">
			{/* Background Image */}
			<Image
				src="/images/performance/image3.jpg"
				alt="Car engine oil"
				className="absolute inset-0 w-full h-full object-cover z-0"
				fill
				priority
			/>

			{/* Gradient Overlay - Similar to Overview Section */}
			<div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/95 via-white/90 to-white/85 z-10 pointer-events-none" />

			{/* Radial gradient backgrounds */}
			{/* <div className="pointer-events-none absolute inset-0 z-20">
				<div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-red-900/10 blur-3xl" />
				<div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-red-700/10 blur-3xl" />
			</div> */}

			<div className="relative  container mx-auto  px-6 pt-20 pb-8 text-center z-30"> 
				{/* Badge */}
				<div className="inline-flex items-center gap-2 rounded-full border border-red-800/40 bg-red-900/20 px-4 py-1 text-xs tracking-wide text-red-500">
					<span className="flex items-center">
						<svg
							className="mr-1 h-3.5 w-3.5 text-red-400"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 17l-4.16 2.19.8-4.66L5 10.92l4.7-.68L12 6l2.3 4.24 4.7.68-3.64 3.61.8 4.66z"
							/>
						</svg>
						PERFORMANCE TESTIMONIALS
					</span>
					<span className="h-1 w-1 rounded-full bg-red-400" />
				</div>

				{/* Heading */}
				<h1 className="mt-6 text-5xl font-semibold leading-tight text-gray-900">
					<span className="block">Proven Performance</span>
					<span className="mt-4 block text-red-500">Across Bangladesh</span>
				</h1>

				{/* Description */}
				<p className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-gray-700">
					Discover why thousands of customers trust Asian Petroleum Limited for
					their lubricant needs. Real stories from real customers who have
					experienced the ENI difference.
				</p>

				{/* Divider */}
				<div className="mx-auto mt-10 h-px w-28 bg-gradient-to-r from-red-500/60 via-red-400/40 to-red-500/60" />
			</div>

			{/* Stats Panel */}
			<div className="relative container mx-auto  px-6 pb-24 z-30">
				<div className="rounded-2xl border border-gray-700/40 bg-gradient-to-b from-[#f8e2e2] to-[#b6cafd] p-6 backdrop-blur-sm">
					<div className="mb-6 text-center">
						<h2 className="text-lg font-semibold tracking-wide text-black">
							Customer Satisfaction By Numbers
						</h2>
						<p className="mt-2 text-xs text-black/70">
							Real feedback from real customers
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{stats.map((s) => (
							<div
								key={s.label}
								className={`group relative rounded-lg border bg-gradient-to-b ${s.accentClass} p-6 transition-all duration-300 hover:scale-105`}
							>
								<div className="mb-4 inline-flex items-center justify-center rounded-md bg-black/30 p-2 ring-1 ring-white/5">
									{s.icon}
								</div>
								<div className="text-2xl font-bold tracking-tight text-black">
									{s.value}
								</div>
								<div className="mt-1 text-xs text-black/70">
									{s.subLabel}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProvenPerformance;