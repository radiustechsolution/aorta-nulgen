import { siteConfig } from "@/config/site";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NulgenButton } from "./button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdMenu } from "react-icons/io";

export const Navbar = () => {
  return (
    <nav className="max-w-[1220px] flex items-center justify-between h-[50px] md:h-[64px] w-full">
      <div className="flex items-center gap-10">
        <Image
          src="/asset/logo.svg"
          alt="Logo"
          width={110}
          className="w-[105px] md:w-[110px]"
          height={32}
        />
        <ul className="hidden xl:flex items-center gap-5">
          {siteConfig.path.navbarLinks.map((data) => (
            <li
              className="text-[#262d3d] cursor-pointer text-[13px] font-normal"
              key={data.title}
            >
              <span className="flex items-center">
                {data.title}
                {data.isDropDown && (
                  <MdOutlineKeyboardArrowDown color="#262d3d" />
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <div className="hidden lg:flex items-center gap-5">
          <p className="text-[#262d3d] cursor-pointer text-[13px] font-normal">
            Post Internship
          </p>
          <NulgenButton />
          <p className="text-[#262d3d] cursor-pointer text-[13px] font-normal">
            Log In
          </p>
        </div>
        <IoMdMenu className="flex xl:hidden" size={33} color="#262d3d" />
      </div>
    </nav>
  );
};
