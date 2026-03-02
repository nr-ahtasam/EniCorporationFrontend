

export default function SustainabilityHero({
  eyebrow,
  title ,
  highlight,
  description
}) {
  return (
    <div className="w-full mx-auto px-4 relative overflow-hidden bg-transparent">
     
      {/* <div
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        
      /> */}
      <div className=" mx-auto relative z-20 py-2">
        <h2 className="text-[12px] font-albert text-gray-700 mb-2 md:pt-10">
          {eyebrow}
        </h2>
        <div className="w-full h-px bg-black mb-6 " />

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl mb-4 text-black font-extrabold tracking-tight">
              <span className="font-extrabold text-red-600">{highlight}</span>{" "}
              {title.replace(highlight, "").trim()}
            </h1>
            <p className="text-gray-700 text-base mb-10 font-sans">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}