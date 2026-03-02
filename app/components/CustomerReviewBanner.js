"use client";
import Image from "next/image";

export default function CustomerReviewBanner() {
  return (
    <section className="relative h-[260px] md:h-[340px] w-full overflow-hidden flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop"
        alt="Customer Review Banner"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Customer Reviews</h1>
        <p className="mt-3 text-white/80 max-w-xl mx-auto">
          Hear directly from our customers about their experience with Hipro Lubricant Bangladesh.
        </p>
      </div>
    </section>
  );
}
