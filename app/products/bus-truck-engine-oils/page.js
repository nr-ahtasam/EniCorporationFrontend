

import CommonBanner from "../../components/CommonBanner.js";
import BusTruckEngineOilsProductShow from "./BusTruckEngineOilsProductShow.js";

export default function BusTruckEngineOilsPage() {
  return (
    <>
      <CommonBanner
              heading="Bus and truck engine oils"
              title="Heavy-duty engine oils for"
              title2="modern engines"
              image="/images/Truck image/image12.png"
            />
      
      <div className="w-full flex justify-center ">
        <BusTruckEngineOilsProductShow/>
      </div>
    
    </>
  );
}
