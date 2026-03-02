"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import GoogleMap to avoid SSR issues
const GoogleMap = dynamic(
	() => import("@react-google-maps/api").then((mod) => mod.GoogleMap),
	{ ssr: false }
);

const LoadScript = dynamic(
	() => import("@react-google-maps/api").then((mod) => mod.LoadScript),
	{ ssr: false }
);

const Marker = dynamic(
	() => import("@react-google-maps/api").then((mod) => mod.Marker),
	{ ssr: false }
);

const distributors = [
	{
		name: "Barisal",
		id: "barisal",
		coordinates: { lat: 22.701, lng: 90.3535 },
	},
	{
		name: "Chittagong",
		id: "chittagong",
		coordinates: { lat: 22.3569, lng: 91.7832 },
	},
	{
		name: "Dhaka",
		id: "dhaka",
		coordinates: { lat: 23.8103, lng: 90.4125 },
	},
	{
		name: "Khulna",
		id: "khulna",
		coordinates: { lat: 22.8456, lng: 89.5403 },
	},
	{
		name: "Mymensingh",
		id: "mymensingh",
		coordinates: { lat: 24.7471, lng: 90.4203 },
	},
	{
		name: "Rajshahi",
		id: "rajshahi",
		coordinates: { lat: 24.3745, lng: 88.6042 },
	},
	{
		name: "Rangpur",
		id: "rangpur",
		coordinates: { lat: 25.7439, lng: 89.2752 },
	},
	{
		name: "Sylhet",
		id: "sylhet",
		coordinates: { lat: 24.8949, lng: 91.8687 },
	},
];

const mapContainerStyle = {
	width: "100%",
	height: "750px",
};

const center = {
	lat: 23.685,
	lng: 90.3563,
};

const mapOptions = {
	disableDefaultUI: false,
	zoomControl: true,
	streetViewControl: false,
	mapTypeControl: false,
	fullscreenControl: true,
};

export default function DistributersSection() {
	return (
		<section className="relative isolate py-20 overflow-hidden">
			{/* Background image */}
			<Image
				src="/images/automobil/image2.jpg"
				alt="Car engine oil"
				fill
				priority
				sizes="100vw"
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>

			{/* Gradient overlay */}
			<div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/95 via-white/90 to-white/85 pointer-events-none" />

			<div className="relative z-20 container mx-auto px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div>
						{/* Badge */}
						<div className="inline-block mb-6">
							<span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
								DISTRIBUTORS
							</span>
						</div>

						{/* Heading */}
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
							Strategic Network Strength
						</h2>

						{/* Description */}
						<p className="text-gray-700 text-lg text-justify leading-relaxed mb-10">
							Discover our distributors across key locations in Bangladesh,
							including{" "}
							<span className="font-semibold">
								Dhaka, Chattogram, Khulna, Sylhet, Rajshahi, Rangpur,
								Mymansingh
							</span>{" "}
							and <span className="font-semibold">Barisal</span> divisions.
							With a network strategically spread across these regions, we
							ensure convenient access to our products, fostering strong
							partnerships and reliable service.
						</p>

						{/* Location Grid */}
						<div className="grid grid-cols-2 gap-4 bg-gray-100 rounded-2xl p-6">
							{distributors.map((location, idx) => (
								<div
									key={idx}
									className="flex items-center gap-3 text-red-700 hover:text-black transition-colors cursor-pointer"
								>
									<svg
										className="w-5 h-5 flex-shrink-0"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="font-semibold text-base">
										{location.name}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Right Google Map */}
					<div className="relative lg:pl-8">
						<div className="relative w-full h-[750px] max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg">
							<LoadScript
								googleMapsApiKey={
									process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
								}
							>
								<GoogleMap
									mapContainerStyle={mapContainerStyle}
									center={center}
									zoom={7}
									options={mapOptions}
								>
									{distributors.map((location) => (
										<Marker
											key={location.id}
											position={location.coordinates}
											title={location.name}
										/>
									))}
								</GoogleMap>
							</LoadScript>
						</div>
					</div>
				</div>
			</div>

			{/* Background decoration */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-20 -z-10"></div>
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-20 -z-10"></div>
		</section>
	);
}
