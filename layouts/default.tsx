import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/navbar";
import { Head } from "./head";
import { useRouter } from "next/router";
import { siteConfig } from "@/config/site";
import { IoMdMenu } from "react-icons/io";
import { useSession } from "next-auth/react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const mainRef = useRef<HTMLDivElement>(null); // Ref to the main tag

  useEffect(() => {
    const handleScroll = () => {
      // Check if the main div has been scrolled past 700px
      if (mainRef.current && mainRef.current.scrollTop > 700) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const mainElement = mainRef.current;

    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // State to handle menu visibility
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative bg-white flex h-svh items-center flex-col">
      <Head />
      <div
        className={`flex z-50 ${
          isScrolled ? "bg-white" : "bg-bgPrimary"
        } px-5 xl:px-10 flex-col items-center w-full transition-all duration-300`}
      >
        <Navbar
          bgColor="bg-[#03CC83]"
          openState={menuOpen}
          toggleMenu={toggleMenu}
        />
      </div>
      <main
        ref={mainRef} // Attach ref to main
        className="w-full flex-1 scrollbar-hide overflow-auto"
      >
        {children}
      </main>

      {/* Sliding Menu */}
      <div
        className={`fixed md:hidden top-0 right-0 h-full w-full bg-white bg-herobg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-4 pt-4 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <p
              role="presentation"
              onClick={() => router.push("/")}
              className="font-bold px-3 cursor-pointer font-ProximaNova text-black text-[20px]"
            >
              {siteConfig.shortName}
            </p>
            <IoMdMenu
              onClick={toggleMenu}
              className="cursor-pointer"
              role="presentation"
              size={33}
              color="#262d3d"
            />
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-4">
            {siteConfig.path.navbarLinks.map((v) => (
              <li key={v.title}>
                <div
                  role="presentation"
                  onClick={() => router.push(v.path)}
                  className={`text-black cursor-pointer text-[13px] leading-[30px] w-full px-4 py-3 rounded-md transition-all duration-300 hover:bg-[#e0f7fa] ${
                    router.pathname === "/about" ? "bg-[#051b22]" : ""
                  }`}
                >
                  <p className="capitalize">{v.original}</p>
                </div>
              </li>
            ))}
            {session && (
              <li>
                <div
                  role="presentation"
                  onClick={() => router.push(siteConfig.path.paths.dashboard)}
                  className={`text-black cursor-pointer text-[13px] leading-[30px] w-full px-4 py-3 rounded-md transition-all duration-300 hover:bg-[#e0f7fa] ${
                    router.pathname === "/about" ? "bg-[#051b22]" : ""
                  }`}
                >
                  <p className="capitalize">Profile</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
