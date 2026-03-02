import Image from 'next/image';
import BreadcrumbBar from '../components/breadCrump';


export default function AboutBanner() {
  return (
    <section className="relative w-full h-[340px] md:h-[700px] flex items-center justify-center overflow-hidden rounded-xl">
      {/* Background Image */}
      <Image
        src="/images/about-us/image1.jpg"
        alt="Car engine oil"
        fill
        className="object-cover absolute inset-0 z-0"
        priority
      />
      {/* Overlay for darken effect */}
      <div className="absolute inset-0 bg-black/30 z-0" />
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center justify-between w-full px-4 sm:px-8 md:px-20 lg:px-40 py-6 md:py-10 gap-6 md:gap-0">
        <div className="flex flex-col text-white max-w-full md:max-w-xl w-full">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
            style={{ fontFamily: 'var(--font-open-sans)', fontWeight: 700 }}
          >
            Crafting Excellence Together
          </h1>
          <p className="text-gray-100 max-w-full md:max-w-md text-justify text-sm sm:text-base mb-3 md:mb-6">
            At ENI we believe in the power of collaboration to achieve outstanding results. With a team of skilled professionals and a commitment to quality, we work hand-in-hand with our clients to bring their ideas to life. Together, we create spaces and solutions that stand the test of time.
          </p>
          <BreadcrumbBar currentPage="ABOUT" />
        </div>
        {/* Circular Logo Overlay (optional, uncomment if needed and make responsive) */}
        {/* <div className="relative flex-1 flex justify-center items-center mt-6 md:mt-0">
          <div className="absolute md:static left-0 bottom-0 md:translate-x-0 md:translate-y-0 translate-x-[-40%] translate-y-[40%]">
            <img
              src="../../images/logo/logo.png"
              alt="Renovex Logo"
              width={64}
              height={64}
              className="rounded-full border-4 border-white shadow-lg bg-white w-16 h-16 md:w-20 md:h-20"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}