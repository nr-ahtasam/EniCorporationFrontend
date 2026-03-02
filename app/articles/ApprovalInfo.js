import Image from "next/image";
import React from "react";

export default function ApprovalInfo({
  heading,
  description1,
  description2,
  features = [],
  note,
  image,
  
}) {
  return (
    <div className="flex flex-col md:flex-row gap-8 mt-10 items-start text-[#000000]">
      <div className="flex-1">
        {heading && (
          <h2 className="text-2xl font-bold text-[#18398b] mb-4 text-justify">{heading}</h2>
        )}
        {description1 && (
          <p className="mb-2 text-justify">{description1}</p>
        )}
        {description2 && (
          <p className="mb-2 text-justify">{description2}</p>
        )}
        {features.length > 0 && (
          <ul className="list-disc pl-6 text-[#18398b]">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        )}
        {note && <p className="mt-2">{note}</p>}
      </div>
      <div className="relative w-full max-w-xs h-96 flex flex-col items-center">
        {image && (
          <Image
            src={image}
            fill
            priority
            alt={ "Approval image"}
            className="object-cover w-full h-full rounded"
            // style={{ filter: 'brightness(0.7) sepia(0.2) hue-rotate(180deg) saturate(2)' }}
          />
        )}
        
      </div>
    </div>
  );
}
