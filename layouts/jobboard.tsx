import { Head } from "./head";
import { Footer } from "@/components/landing-page/footer";
import NavbarJobBoard from "@/components/job-board/navbar";
import { Navbar } from "@/components/navbar";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { IoMdMenu } from "react-icons/io";
import { useRouter } from "next/router";
import { CourseNavbar } from "@/components/course/navbar";
import { useSession } from "next-auth/react";

export default function JobBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Hooks
  const router = useRouter();
  const { data: session } = useSession();
  // State to handle menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative bg-white flex items-center h-svh flex-col">
      <Head />
      <div
        className={`flex z-50 bg-white px-5 xl:px-0 flex-col items-center w-full shadow-sm`} // Added shadow class here
      >
        {/* <NavbarJobBoard /> */}
        {/* <Navbar
          getStartedPath={siteConfig.path.paths.signup}
          bgColor="bg-[#4E6CFF]"
          openState={menuOpen}
          toggleMenu={toggleMenu}
        /> */}
        <CourseNavbar openNav={toggleMenu} />
      </div>
      <main className="w-full flex-1 scrollbar-hide overflow-auto">
        {children}
      </main>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 md:hidden right-0 h-full w-full bg-white bg-herobg z-50 transform transition-transform duration-300 ${
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
