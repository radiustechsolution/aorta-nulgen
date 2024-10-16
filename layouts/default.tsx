import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { useState, useEffect } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-white flex items-center flex-col h-svh">
      <Head />
      <div
        className={`flex z-50 ${
          isScrolled ? "bg-white" : "bg-bgPrimary"
        } px-5 xl:px-10 sticky top-0 flex-col items-center w-full transition-all duration-300`}
      >
        <Navbar />
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
}
