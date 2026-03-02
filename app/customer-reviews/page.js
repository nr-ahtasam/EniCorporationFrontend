import CustomerReviewBanner from "../components/CustomerReviewBanner";
import DistributersSection from "../components/DistributersSection";
import Testimonial from "../components/Testimonial";

export default function CustomerReviewsPage() {
  return (
    <main>
      <CustomerReviewBanner />
     
      <Testimonial />
      <DistributersSection />
    </main>
  );
}