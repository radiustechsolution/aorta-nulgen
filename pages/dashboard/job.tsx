import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { loadTranslations } from "@/lib/loadTranslations";
import { GetStaticPropsContext } from "next";
import DashboardLayout from "@/layouts/dashboard";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/router";
import { siteConfig } from "@/config/site";

const DashboardJob = () => {
  // Hooks
  const { data: session, status } = useSession();
  const router = useRouter();

  // State
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState<any[]>([]);

  // Function to fetch jobs
  const FetchJobs = async () => {
    setLoading(true);
    try {
      if (session?.user?.token) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/user/jobs`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${session.user.token}`, // Use token from session
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data.data);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch jobs when the session is authenticated
  useEffect(() => {
    if (status === "authenticated") {
      FetchJobs(); // Only fetch jobs when the session is authenticated
    }
  }, [status]);

  return (
    <DashboardLayout>
      <p className="text-black text-[26px]">Jobs</p>

      {/* Loading state */}
      {loading && jobs.length < 1 && (
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center gap-2">
            <Spinner size="sm" />
            <p className="text-black text-[16px]">Fetching...</p>
          </div>
        </div>
      )}

      {/* No jobs */}
      {!loading && jobs.length < 1 && (
        <div className="w-full bg-[#FAFAFA] gap-3 mt-5 md:gap-0 p-4 border border-[#C7C7C7] h-max">
          <p className="text-center text-black">
            You haven&apos;t applied for any jobs yet.
          </p>
        </div>
      )}

      {/* Job list */}
      {jobs.map((v) => (
        <div
          key={v.id}
          className="w-full bg-[#FAFAFA] gap-3 mt-5 md:gap-0 flex flex-col md:flex-row items-start md:items-center justify-between p-4 border border-[#C7C7C7] h-max"
        >
          <div>
            <p className="text-black text-[16px] md:text-[20px] font-[500]">
              {v.job.position}
            </p>
            <p className="text-black text-[16px]">{v.job.company}</p>
          </div>

          <button className="w-full md:w-[150px] cursor-pointer text-white text-[18px] py-2 bg-[#2016FF]">
            Complete
          </button>
        </div>
      ))}

      {/* Link to job board */}
      <div className="flex flex-col items-center mt-8">
        <button
          onClick={() => router.push(siteConfig.path.paths.jobBoard)}
          className="w-full md:w-[40%] cursor-pointer font-[500] text-white text-[18px] py-2 bg-[#2016FF]"
        >
          Find Jobs
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
