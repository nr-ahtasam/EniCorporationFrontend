"use client";

import Image from "next/image";

export default function BoardBanner() {
  return (
    <section className="relative h-[300px] md:h-[380px] w-full overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&auto=format&fit=crop"
        alt="Board room background"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <p className="text-sm uppercase tracking-wider text-white/80">Leadership</p>
        <h1 className="text-3xl md:text-5xl font-bold text-white">Board of Directors</h1>
        <p className="mt-3 text-white/80 max-w-2xl">
          Visionary leadership guiding ENI Corporation to sustainable growth and excellence.
        </p>
      </div>
    </section>
  );
}
