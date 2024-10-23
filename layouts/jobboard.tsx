import { Head } from "./head";
import { Footer } from "@/components/landing-page/footer";
import NavbarJobBoard from "@/components/job-board/navbar";

export default function JobBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-white flex items-center flex-col">
      <Head />
      <div className="h-svh w-full items-center flex flex-col">
        <div
          className={`flex z-50 bg-white px-5 xl:px-0 flex-col items-center w-full shadow-md`} // Added shadow class here
        >
          <NavbarJobBoard />
        </div>
        <main className="w-full px-5 xl:px-0 max-w-[1100px] flex-1">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
