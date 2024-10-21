import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { Footer } from "@/components/landing-page/footer";
import { Navbar } from "@/components/navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-white flex items-center flex-col h-svh">
      <Head />
      <div className="flex items-start flex-col lg:flex-row w-full h-full">
        <main className="bg-white w-full px-5 lg:px-0 lg:w-[70%] h-[95%] lg:h-full flex items-center flex-col">
          {children}
        </main>
        <div className="w-full lg:w-[30%] flex flex-col items-center bg-[#191E28] h-max lg:h-full">
          side
        </div>
      </div>
    </div>
  );
}
