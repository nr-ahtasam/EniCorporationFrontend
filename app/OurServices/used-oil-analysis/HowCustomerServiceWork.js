import Image from "next/image";

export default function HowCustomerServiceWork() {
  return (
    <div className="w-full flex flex-col items-center mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#18398b] mb-8 text-center">
        How does ENI Corporation work?
      </h2>
      <div className="flex justify-center w-full">
        <Image
          src="/images/technical support/image8.jpg"
          alt="How ENI Corporation works process"
          width={900}
          height={300}
          className="mx-auto"
          priority
        />
      </div>
    </div>
  );
}