import CommonBanner from "../components/CommonBanner";
import PrivacyContent from "./privacyContent";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 relative">
      <CommonBanner
        heading="Privacy Policy"
        title="Privacy Policy Privacy Policy Privacy Policy "
        title2="Privacy Policy  "
        image="/images/automobil/image10.jpg"
      />
      <PrivacyContent />
    </main>
  );
}


