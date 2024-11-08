// pages/dashboard.tsx
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { CourseHero } from "@/components/course/hero";
import { Footer } from "@/components/landing-page/footer";
import CourseLayout from "@/layouts/course";
import { loadTranslations } from "@/lib/loadTranslations";
import { GetStaticPropsContext } from "next";
import DashboardLayout from "@/layouts/dashboard";

const DashboardSkill = () => {
  // Hooks
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div></div>;
  }

  return (
    <DashboardLayout>
      <p className={`text-black text-[26px]`}>Skill / Course</p>
    </DashboardLayout>
  );
};

export default DashboardSkill;

// Fetch the translations based on the locale
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await loadTranslations(locale || "en-US");

  return {
    props: {
      messages,
    },
  };
}
