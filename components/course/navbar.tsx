import { siteConfig } from "@/config/site";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { useTranslations } from "next-intl";
import { NulgenButton } from "@/components/button";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export const CourseNavbar = ({ openNav }: any) => {
  const router = useRouter();
  const { data: session } = useSession();
  const t = useTranslations("common");
  const tn = useTranslations("navbar");

  return (
    <nav className="max-w-[1250px] flex items-center justify-between h-[64px] w-full">
      <div className="flex items-center gap-10">
        <p
          role="presentation"
          onClick={() => router.push(siteConfig.path.paths.index)}
          className="font-bold cursor-pointer font-ProximaNova text-black text-[20px]"
        >
          {siteConfig.shortName}
        </p>
        <ul className="hidden md:flex items-center gap-5">
          {siteConfig.path.navbarLinks.map((data) => (
            <li
              role="presentation"
              onClick={() => router.push(data.path)}
              className="text-[#262d3d] cursor-pointer text-[13px] font-normal"
              key={data.title}
            >
              <span className="flex items-center">
                {data.original}
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
        {/* <LanguageSwitcher /> */}
        {!session && (
          <div className="hidden md:flex items-center gap-5">
            {/* <p className="text-[#262d3d] cursor-pointer text-[13px] font-normal">
              {tn("postInternship")}
            </p> */}
            <NulgenButton
              bgColor="bg-[#2016FF]"
              title="Join Now"
              notRounded
              action={() => router.push(siteConfig.path.paths.signup)}
            />
            <p
              role="presentation"
              onClick={() => router.push(siteConfig.path.paths.signin)}
              className="text-[#262d3d] cursor-pointer text-[13px] font-normal"
            >
              Login
            </p>
          </div>
        )}
        <IoMdMenu
          role="presentation"
          onClick={() => openNav()}
          className="flex xl:hidden"
          size={33}
          color="#262d3d"
        />
      </div>
    </nav>
  );
};
