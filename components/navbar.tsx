import { siteConfig } from "@/config/site";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdMenu } from "react-icons/io";
import { useTranslations } from "next-intl";
import { loadTranslations } from "@/lib/loadTranslations";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { NulgenButton } from "@/components/button";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface LinkType {
  path: string;
  title: string;
}

interface NavbarProps {
  toggleMenu: () => void;
  openState: boolean;
  bgColor: string;
  getStartedPath?: string;
}

export const Navbar = ({
  toggleMenu,
  bgColor,
  openState,
  getStartedPath,
}: NavbarProps) => {
  const router = useRouter();
  const { data: session } = useSession();
  const t = useTranslations("common");
  const tn = useTranslations("navbar");

  return (
    <nav className="max-w-[1220px] flex items-center justify-between h-[64px] w-full">
      <div className="flex items-center gap-10">
        <Link href={"/"}>
          <p className="font-bold font-ProximaNova text-black text-[20px]">
            {siteConfig.shortName}
          </p>
        </Link>
        <ul className="hidden md:flex items-center gap-5">
          {siteConfig.path.navbarLinks.map((data) => (
            <li
              role="presentation"
              onClick={() => router.push(data.path)}
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
        {!session ? (
          <div className="hidden md:flex items-center gap-5">
            {/* <p className="text-[#262d3d] cursor-pointer text-[13px] font-normal">
              {tn("postInternship")}
            </p> */}
            <NulgenButton
              bgColor={bgColor}
              action={() =>
                router.push(
                  getStartedPath ? getStartedPath : siteConfig.path.paths.flow1
                )
              }
            />
            <p
              role="presentation"
              onClick={() => router.push(siteConfig.path.paths.signin)}
              className="text-[#262d3d] cursor-pointer text-[13px] font-normal"
            >
              {tn("login")}
            </p>
          </div>
        ) : (
          <Link
            href={siteConfig.path.paths.dashboard}
            className="text-[15px] hidden md:flex items-center gap-1 px-5 py-1 rounded-sm font-medium text-gray-700"
          >
            Profile
          </Link>
        )}
        <IoMdMenu
          onClick={toggleMenu}
          className="flex md:hidden cursor-pointer"
          role="presentation"
          size={33}
          color="#262d3d"
        />
      </div>
    </nav>
  );
};
