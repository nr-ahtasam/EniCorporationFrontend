import CommonBanner from "@/app/components/CommonBanner";
import DirectorsGrid from "@/app/components/board/DirectorsGrid";
import Footer from "@/app/components/footer";

export default function BoardOfDirectorsPage() {
  return (
    <main>
       <CommonBanner
                    heading="Board Of Directors"
                      title="We’re here to support your"
                      title2="professional support"
                    image="/images/team/boardOfDirectors/image4.jpg"
                  />
      <DirectorsGrid />
      <Footer />
    </main>
  );
}
