// pages/dashboard.tsx
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { CourseHero } from "@/components/course/hero";
import { Footer } from "@/components/landing-page/footer";
import CourseLayout from "@/layouts/course";
import { loadTranslations } from "@/lib/loadTranslations";
import { GetStaticPropsContext } from "next";
import DashboardLayout from "@/layouts/dashboard";

const Dashboard = () => {
  // Hooks
  const { data: session, status }: any = useSession();

  if (status === "loading") {
    return <div></div>;
  }

  return (
    <DashboardLayout>
      <p className={`text-black text-[26px]`}>Profile</p>

      <form action="" className="mt-4 flex flex-col gap-7">
        {/* Double */}
        <div className="flex flex-col lg:flex-row items-center gap-3">
          {/* Fullname */}
          <div className="w-full flex flex-col gap-2">
            <p className="text-black text-[px] font-medium">Name</p>
            <input
              type="text"
              className="bg-transparent px-3 text-black text-[16px] border border-black w-full h-[50px] rounded-md"
              name=""
              value={session?.user.fullname}
              readOnly
              id=""
            />
          </div>
          {/* Email */}
          <div className="w-full flex flex-col gap-2">
            <p className="text-black text-[px] font-medium">Email Address</p>
            <input
              type="email"
              value={session?.user.email}
              className="bg-transparent px-3 text-black text-[16px] border border-black w-full h-[50px] rounded-md"
              name=""
              readOnly
              id=""
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-3">
          {/* Phone Number */}
          <div className="w-full flex flex-col gap-2">
            <p className="text-black text-[px] font-medium">Phone Number</p>
            <input
              type="email"
              value={session?.user.phone_number}
              className="bg-transparent px-3 text-black text-[16px] border border-black w-full lg:w-1/2 h-[50px] rounded-md"
              name=""
              readOnly
              id=""
            />
          </div>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default Dashboard;

// Fetch the translations based on the locale
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await loadTranslations(locale || "en-US");

  return {
    props: {
      messages,
    },
  };
}
