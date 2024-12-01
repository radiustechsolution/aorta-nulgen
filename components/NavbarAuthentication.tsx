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
  getStartedPath?: string;
}

export const NavbarAuthentication = ({ getStartedPath }: NavbarProps) => {
  const router = useRouter();
  const { data: session } = useSession();
  const t = useTranslations("common");
  const tn = useTranslations("navbar");

  return (
    <nav className="max-w-[1220px] flex items-center justify-center h-[64px] w-full">
      <p className="text-black uppercase font-bold text-[18px] md:text-[24px]">
        Nulgen
      </p>
    </nav>
  );
};
