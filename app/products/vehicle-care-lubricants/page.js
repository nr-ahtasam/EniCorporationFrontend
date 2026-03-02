
import VehicleCareLubricantsProductShow from "./VehicleCareLubricantsProductShow.js";
import CommonBanner from "../../components/CommonBanner.js";
export default function VehicleCareLubricantsPage() {
  return (
    <>
      <CommonBanner
                          heading="Vehicle care & other lubricants"
                          title="Extends the life of transaxle,"
                          title2="rear axle and differential gears"
                          image="/images/Vehicle Care/image1.jpg"
                        />
      <div className="w-full flex justify-center ">
        <VehicleCareLubricantsProductShow/>
      </div> 
    
    </>
  );
}
