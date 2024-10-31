import { HiOutlineBriefcase } from "react-icons/hi2";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CiLock } from "react-icons/ci";

interface Types {
  hideRight?: boolean;
}

const NavbarJobBoard = ({ hideRight }: Types) => {
  return (
    <div
      className={`h-[60px] ${hideRight && "px-2"} sm:h-[80px] max-w-[1100px] w-full flex items-center justify-between`}
    >
      <Link href={"/jobs"} className="flex items-center cursor-pointer gap-1">
        <HiOutlineBriefcase size={24} className="text-[#4E6CFF]" />
        <p className="text-[17px] text-black font-semibold">NulgenJobs</p>
      </Link>

      {!hideRight && (
        <div className="flex items-center font-ProximaNova gap-4">
          <Link
            href="/"
            className="text-[15px] hidden md:block font-medium text-gray-700 hover:text-[#4E6CFF]"
          >
            Home
          </Link>
          <Link
            href={siteConfig.path.paths.jobBoard}
            className="text-[15px] hidden md:block font-medium text-gray-700 hover:text-[#4E6CFF]"
          >
            About
          </Link>
          <Link
            href={siteConfig.path.paths.jobBoard}
            className="text-[15px] flex items-center gap-1 px-5 py-1 border rounded-sm bg-[#F6F6F9] border-gray-200 font-medium text-gray-700 hover:text-[#4E6CFF]"
          >
            <CiLock color="black" />
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarJobBoard;
