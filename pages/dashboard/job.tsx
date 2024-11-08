// pages/dashboard.tsx
import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { loadTranslations } from "@/lib/loadTranslations";
import { GetStaticPropsContext } from "next";
import DashboardLayout from "@/layouts/dashboard";

const DashboardJob = () => {
  // Hooks
  const { data: session, status } = useSession();
  const isInitialRender = useRef(true);

  // State
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState<any[]>([]);

  // Function to fetch jobs with pagination
  const FetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/user/jobs`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${session?.user.token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
      const data = await response.json();
      setJob(data.data);
      console.log(data.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch on component mount (only once)
  useEffect(() => {
    if (isInitialRender.current) {
      FetchJobs();
      isInitialRender.current = false;
    }
  }, []);

  return (
    <DashboardLayout>
      <p className={`text-black text-[26px]`}>Jobs</p>

      <div className="w-full bg-[#FAFAFA] gap-3 mt-5 md:gap-0 flex flex-col md:flex-row items-start md:items-center justify-between p-4 border border-[#C7C7C7] h-max">
        <div>
          <p className="text-black text-[16px] md:text-[20px] font-[500]">
            Frontend Developer Frontend Developer
          </p>
          <p className="text-black text-[16px]">Coinbase</p>
        </div>

        <button className="w-full md:w-[150px] cursor-pointer text-white text-[18px] py-2 bg-[#2016FF]">
          Submit
        </button>
      </div>
    </DashboardLayout>
  );
};

export default DashboardJob;

// Fetch the translations based on the locale
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await loadTranslations(locale || "en-US");

  return {
    props: {
      messages,
    },
  };
}
