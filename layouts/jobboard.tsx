import { Head } from "./head";
import { Footer } from "@/components/landing-page/footer";
import NavbarJobBoard from "@/components/job-board/navbar";

export default function JobBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-white flex items-center h-svh flex-col">
      <Head />
      <div
        className={`flex z-50 bg-white px-5 xl:px-0 flex-col items-center w-full shadow-sm`} // Added shadow class here
      >
        <NavbarJobBoard />
      </div>
      <main className="w-full flex-1 scrollbar-hide overflow-auto">
        {children}
      </main>
    </div>
  );
}
