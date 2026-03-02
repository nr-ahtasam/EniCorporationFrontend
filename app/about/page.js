// import Footer from '../components/footer';
import HeroBanner from './aboutBanner';
// import AboutBanner from './aboutBanner';
import BrandCards from './BrandCards.js';

import GuidingPrinciples from './GuidingPrinciples.js';
import HistoryTimeline from './HistoryTimeline.js';
import OverviewSection from './OverviewSection.js';



export default function AboutPage() {
  return (
    <main className="bg-gray-50 relative">
      <HeroBanner />
      <OverviewSection />
      
        <BrandCards />
      <GuidingPrinciples />
      <HistoryTimeline />
    </main>
  );
}
      

