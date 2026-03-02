'use client'

import Divisions from "./components/divisions";
import Banner from "./components/banner";
import DistributersSection from "./components/DistributersSection";
import Performance  from "./components/performance";
import About  from "./about/about";
import Testimonial from "./components/Testimonial";
// import About from "./about/page";
import ProductLineSection from "./components/ProductLineSection";
import InfoCards from "./components/infoCards";
import OverviewSection from './about/OverviewSection';

export default function Home() {
  return (
    <div>
      <Banner/>
      <OverviewSection />
      <ProductLineSection />
      <About />
      <Performance />
      <InfoCards/>
       <Testimonial />
      <DistributersSection />
      {/* <Divisions /> */}
      {/* <FAQSection /> */}
      {/* <Whyeni /> */}
      
    </div>
  );
}

