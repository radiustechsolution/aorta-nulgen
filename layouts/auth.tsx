import { Navbar } from "@/components/onboard/navbar";
import { Head } from "./head";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-white flex items-center flex-col h-svh">
      <Head />
      <Navbar />
      <main className="bg-white w-full px-8 lg:px-0 flex-1 flex items-center flex-col">
        {children}
      </main>
    </div>
  );
}
