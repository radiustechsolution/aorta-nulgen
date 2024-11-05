import { siteConfig } from "@/config/site";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { NulgenButton } from "@/components/button";
import { useRouter } from "next/router";

export const CourseNavbar = () => {
  const router = useRouter();
  const t = useTranslations("common");
  const tn = useTranslations("navbar");

  return (
    <nav className="max-w-[1250px] flex items-center justify-between h-[64px] w-full">
      <div className="flex items-center gap-10">
        <p className="font-bold font-ProximaNova text-black text-[20px]">
          {siteConfig.shortName}
        </p>
        <ul className="hidden xl:flex items-center gap-5">
          {siteConfig.path.navbarLinks.map((data) => (
            <li
              className="text-[#262d3d] cursor-pointer text-[13px] font-normal"
              key={data.title}
            >
              <span className="flex items-center">
                {tn(data.title)}
                {data.isDropDown && (
                  <MdOutlineKeyboardArrowDown color="#262d3d" />
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-8">
        {/* Language Switcher */}
        <LanguageSwitcher />
        <div className="hidden lg:flex items-center gap-5">
          {/* <p className="text-[#262d3d] cursor-pointer text-[13px] font-normal">
            {tn("postInternship")}
          </p> */}
          <NulgenButton
            bgColor="bg-[#2016FF]"
            title="Join Now"
            notRounded
            action={() => router.push(siteConfig.path.paths.flow1)}
          />
          <p className="text-[#262d3d] cursor-pointer text-[13px] font-normal">
            {tn("login")}
          </p>
        </div>
        <IoMdMenu className="flex xl:hidden" size={33} color="#262d3d" />
      </div>
    </nav>
  );
};
