import { useState, useEffect, useRef } from "react";
import { Footer } from "@/components/landing-page/footer";
import { Navbar } from "@/components/navbar";
import { Head } from "./head";
import { CourseNavbar } from "@/components/course/navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { siteConfig } from "@/config/site";
import { IoMdMenu } from "react-icons/io";
import { NavbarAuthentication } from "@/components/NavbarAuthentication";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null); // Ref to the main tag
  const router = useRouter(); // Next.js router to get the current route
  const { data: session } = useSession();

  // State to handle menu visibility
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative bg-[#F6F6F6] flex h-svh items-center flex-col">
      <Head />
      <div
        className={`flex z-50 bg-white shadow-md px-5 xl:px-10 flex-col items-center w-full transition-all duration-300`}
      >
        <NavbarAuthentication />
      </div>
      <main
        ref={mainRef} // Attach ref to main
        className="w-full flex-1 scrollbar-hide overflow-auto"
      >
        {children}
      </main>
    </div>
  );
}
