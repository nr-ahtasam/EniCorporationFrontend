import Link from "next/link";
import { FaListUl } from "react-icons/fa";

export default function BreadcrumbBar({ currentPage = "ABOUT" }) {
  return (
    <div className="container mx-auto flex w-[60%] justify-start items-start">
      <div className="flex rounded-xl shadow-md overflow-hidden my-10 w-full">
        {/* HOME */}
        <div className="flex items-center gap-2 flex-1 bg-white px-6 py-4">
          <FaListUl className="text-gray-400 text-xl" />
          <Link href="/" className="text-gray-500 font-semibold">HOME</Link>
        </div>
        
        {/* CURRENT PAGE */}
        <div className="flex items-center gap-2 flex-1 px-6 py-4 border-l justify-between"
          style={{
            background: "linear-gradient(90deg, #e0b7b7 0%, #7a8fdc 100%)"
          }}>
          <span className="text-white font-semibold">{currentPage}</span>
        </div>
      </div>
    </div>
  );
}