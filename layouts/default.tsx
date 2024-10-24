import { useState, useEffect, useRef } from "react";
import { Footer } from "@/components/landing-page/footer";
import { Navbar } from "@/components/navbar";
import { Head } from "./head";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <div className="relative bg-white flex h-svh items-center flex-col">
      <Head />
      <div
        className={`flex z-50 ${
          isScrolled ? "bg-white" : "bg-bgPrimary"
        } px-5 xl:px-10 flex-col items-center w-full transition-all duration-300`}
      >
        <Navbar />
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
