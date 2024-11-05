import { useState, useEffect, useRef } from "react";
import { Footer } from "@/components/landing-page/footer";
import { Navbar } from "@/components/navbar";
import { Head } from "./head";
import { CourseNavbar } from "@/components/course/navbar";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null); // Ref to the main tag

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
        {children}
      </main>
    </div>
  );
}
