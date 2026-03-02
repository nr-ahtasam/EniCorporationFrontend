import ProductShow from "./MotorcycleProductShow.js";
import CommonBanner from "../../components/CommonBanner.js";
export default function MotorcycleEngineOilsPage() {
  return (
    <>
      <CommonBanner
                    heading="Motorcycle engine oils"
                    title="Formulated for both motorcycle"
                    title2="engine and transmission operation"
                    image="/images/motor cycle/image8.jpg"
                  />
      <div className="w-full flex justify-center ">
        <ProductShow/>
      </div>
    
    </>
  );
}