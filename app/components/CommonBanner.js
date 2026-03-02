import Image from "next/image";

export default function CommonBanner({ heading, title, title2 , image, height = "sm:h-[100px] lg:h-[600px] xl:h-[800px]" }) {
  return (
    <section
      className={`relative w-full ${height} flex items-center justify-center overflow-hidden `}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title || "Banner image"}
        fill
        className="absolute inset-0 z-0 w-full h-full object-cover object-center"
        priority
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-40 py-6 sm:py-10">
        <div className="container  text-white mx-auto">
          {heading ? (
            <div className="inline-block">
              <span className="rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
                {heading}
              </span>
            </div>
          ) : null}
          <div className="w-full h-[1px] bg-white rounded-full opacity-80 my-2" />
          {/* small divider under heading */}

          {title ? (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mt-6 sm:mt-10 md:mt-4 lg:mt-6 leading-tight">
                {title}
                {title2 ? (
                  <span className="mt-3 block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200/90">
                    {title2}
                  </span>
                ) : null}
              </h1>
              {/* subtitle / title2 under main title */}
            </>
          ) : null}
        </div>
      </div>

      {/* Decorative accents (optional) */}
      <div className="hidden sm:block absolute top-10 left-10 w-20 h-20 bg-red-600/20 rounded-full blur-2xl" />
      <div className="hidden sm:block absolute bottom-10 right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />
    </section>
  );
}