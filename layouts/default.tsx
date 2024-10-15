import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-white flex items-center flex-col">
      <Head />
      <div className="flex z-50 bg-bgPrimary px-5 xl:px-10 sticky top-0 flex-col items-center w-full">
        <Navbar />
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
}
