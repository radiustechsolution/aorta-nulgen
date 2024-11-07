// pages/dashboard.tsx
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { loadTranslations } from "@/lib/loadTranslations";
import { GetStaticPropsContext } from "next";
import DashboardLayout from "@/layouts/dashboard";

const Notification = () => {
  // Hooks
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div></div>;
  }

  return (
    <DashboardLayout>
      <p className="text-black">
        Notification Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officiis adipisci eum debitis reiciendis possimus corporis molestias,
        fuga voluptas ipsa unde consequatur a sed voluptatem, vitae eaque autem
        sunt natus incidunt.
      </p>
    </DashboardLayout>
  );
};

export default Notification;

// Fetch the translations based on the locale
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await loadTranslations(locale || "en-US");

  return {
    props: {
      messages,
    },
  };
}
