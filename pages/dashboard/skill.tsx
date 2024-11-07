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
      <p className="text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        adipisci eum debitis reiciendis possimus corporis molestias, fuga
        voluptas ipsa unde consequatur a sed voluptatem, vitae eaque autem sunt
        natus incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officiis adipisci eum debitis reiciendis possimus corporis molestias,
        fuga voluptas ipsa unde consequatur a sed voluptatem, vitae eaque autem
        sunt natus incidunt. Lorem ipsum dolor sit amet consectetur adipisicing
      </p>
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
