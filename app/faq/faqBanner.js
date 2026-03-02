import Image from 'next/image';
import BreadcrumbBar from '../components/breadCrump';

export default function FAQBanner() {
  return (
    <section className="relative w-full h-[340px] md:h-[700px] flex items-center justify-center overflow-hidden rounded-xl">
      {/* Background Image */}
      <Image
        src="/images/overview/faq1.jpg"
        alt="FAQ Banner"
        fill
        className="object-contain absolute inset-0 z-0"
        priority
      />
      {/* Overlay for darken effect */}
      <div className="absolute inset-0 bg-black/30 z-0" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-40 py-10">
        <div className="flex flex-col text-white max-w-xl">
          {/* Badge */}
          <div className="mb-6 inline-block">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              Support Center
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-open-sans)', fontWeight: 700 }}>
            Frequently Asked Questions
          </h1>
          
          <p className="text-gray-100 max-w-md mb-6">
            Find answers to common questions about our products, services, and company policies.  here to help you understand our offerings and make informed decisions about your automotive and industrial needs.
          </p>
          
          <BreadcrumbBar currentPage="FAQ"/>
        </div>
      </div>
    </section>
  );
}