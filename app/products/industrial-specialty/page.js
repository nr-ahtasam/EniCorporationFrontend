import CommonBanner from "../../components/CommonBanner";
import IndustrialProductList from "../industrial-specialty/IndustrialProductList";

export default function IndustrialSpecialtyPage() {
  return (
    <main className="bg-gray-50 relative">
      <CommonBanner
        heading="Industrial & Specialty Lubricants"
        title="Helps to maximize "
        title2="productivity and cut costs"
        image="/images/Industrial/image16.jpg"
      />

      {/* product list / left categories + right accordion */}
      <IndustrialProductList />
    </main>
  );
}


