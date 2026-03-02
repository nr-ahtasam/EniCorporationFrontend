
import CarEngineOilsProductShow from "./CarEngineOilsProductShow.js";
import CommonBanner from "../../components/CommonBanner.js";
export default function CarEngineOilsPage() {
  return (
    <>
       <CommonBanner
              heading="Car engine oils"
              title="Formulated for outstanding"
              title2="performance and protection"
              image="/images/privateCar/image10.jpg"
            />
      <div className="w-full flex justify-center ">
        <CarEngineOilsProductShow/>
      </div>
    
    </>
  );
}
