import { useState, useEffect, useRef } from "react";
import { Footer } from "@/components/landing-page/footer";
import { Navbar } from "@/components/navbar";
import { Head } from "./head";
import { CourseNavbar } from "@/components/course/navbar";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useRouter } from "next/router";
import { dashboardLinks } from "@/lib/objects";
import { useSession } from "next-auth/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Hooks
  const router = useRouter(); // Next.js router to get the current route
  const mainRef = useRef<HTMLDivElement>(null); // Ref to the main tag
  const { data: session } = useSession();

  // State
  const [activeLink, setActiveLink] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Use useEffect to update the active link based on the current route
  useEffect(() => {
    const currentLink = dashboardLinks.find(
      (link) => router.pathname === link.link
    );
    if (currentLink) {
      setActiveLink(currentLink.id);
    }
  }, [router.pathname]); // Trigger whenever the route changes

  // Handle selection change in <select>
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLink = dashboardLinks.find((v) => v.id === +e.target.value);
    if (selectedLink) {
      router.push(selectedLink.link); // Navigate to the selected link
      setActiveLink(selectedLink.id); // Update the active link state
    }
  };

  return (
    <div className="relative bg-white flex h-svh items-center flex-col">
      <Head />
      <div
        className={`flex z-50 bg-white shadow-md px-5 xl:px-10 flex-col items-center w-full transition-all duration-300`}
      >
        <CourseNavbar />
      </div>
      <main
        ref={mainRef} // Attach ref to main
        className="w-full flex-1 scrollbar-hide overflow-auto"
      >
        <section className="bg-[#F6F6F6]">
          <div className="py-16 flex flex-col items-center">
            <div className="max-w-[1250px] px-5 xl:px-0 mb-4 w-full flex flex-col items-start">
              <h1 className="text-black text-[32px] font-medium">
                Welcome, {session?.user.fullname.split(" ")[0]}
              </h1>
            </div>

            <div className="max-w-[1250px] px-5 xl:px-0 w-full flex flex-col gap-7 md:flex-row justify-between">
              {/* Left - Sidebar for large screens */}
              <div className="hidden md:block sticky top-10 bg-white h-max w-full md:w-[400px]">
                {dashboardLinks.map((v) => (
                  <Link href={v.link} key={v.id}>
                    <div
                      className={`${
                        activeLink == v.id
                          ? "bg-[#E9E8FF] border-l-4 border-[#2016FF]"
                          : ""
                      } py-4 px-6 cursor-pointer`}
                    >
                      <p className="text-black text-[18px] font-medium">
                        {v.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Dropdown for smaller screens */}
              <div className="w-full block md:hidden">
                <div className="w-full px-4 bg-white border border-gray-300">
                  <select
                    className="w-full py-4 text-black bg-white rounded-md cursor-pointer"
                    value={activeLink}
                    onChange={handleSelectChange}
                  >
                    {dashboardLinks.map((link) => (
                      <option
                        key={link.id}
                        className={`text-black py-4 px-6 ${
                          activeLink === link.id ? "bg-[#E9E8FF]" : ""
                        }`}
                        value={link.id}
                      >
                        {link.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Right - Content */}
              <div className="bg-white w-full p-4 md:p-10 h-max">
                {children}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
