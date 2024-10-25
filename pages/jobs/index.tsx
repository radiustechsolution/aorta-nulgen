import { JobBoardHero } from "@/components/job-board/JobBoardHero";
import { JobPostComp } from "@/components/job-board/JobPostComp";
import { Footer } from "@/components/landing-page/footer";
import JobBoardLayout from "@/layouts/jobboard";
import { jobCard } from "@/lib/objects";
import React from "react";

export default function JobBoard() {
  return (
    <JobBoardLayout>
      <section className="h-full w-full ">
        <div className="flex-1 flex pb-10 flex-col items-center gap-0 overflow-auto scrollbar-hide">
          <div className=" w-full h-full">
            {/* Hero */}
            <div className="h-[700px] md:h-[530px]">
              <JobBoardHero />
            </div>

            {/* Job Posts */}
            <div className="w-full px-5 xl:px-0 flex flex-col items-center">
              <div className="max-w-[1100px] flex flex-col gap-2 w-full">
                {jobCard.map((v) => (
                  <JobPostComp data={v} key={v.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer bgColor="bg-[#2a2a2f]" />
      </section>
    </JobBoardLayout>
  );
}
