import { BsBarChart } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";

export const CourseLevelDuration = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="max-w-[1250px] px-5 xl:px-0 w-full block md:flex justify-between items-center bg-white py-4">
        <div className="flex items-center w-full py-3 md:py-0 justify-center md:justify-normal gap-2">
          <BsBarChart size={20} color="black" />
          <p className="text-black">Beginner</p>
        </div>
        <div className="flex items-center w-full md:border-b-0 md:border-t-0 border-b border-t py-3 md:py-0 md:border-l md:border-r border-black justify-center gap-2">
          <CiClock2 size={20} color="black" />
          <p className="text-black">3 months</p>
        </div>
        <div className="flex items-center w-full py-3 md:py-0 justify-center md:justify-end gap-2">
          <FaRegEdit size={20} color="black" />
          <p className="text-black">November 15, 2024</p>
        </div>
      </div>
    </section>
  );
};
