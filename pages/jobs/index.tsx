import { JobBoardHero } from "@/components/job-board/JobBoardHero";
import { JobPostComp } from "@/components/job-board/JobPostComp";
import { Footer } from "@/components/landing-page/footer";
import JobBoardLayout from "@/layouts/jobboard";
import { jobCard } from "@/lib/objects";
import React, { useState, useMemo } from "react";

export default function JobBoard() {
  // State for search query and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [jobLevelFilter, setJobLevelFilter] = useState("All");
  const [departmentFilter, setDepartmentFilter] = useState("All");

  // Filter the jobCard array based on the selected filters and search query
  const filteredJobs = useMemo(() => {
    return jobCard.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLocation =
        locationFilter === "All" || job.location === locationFilter;

      const matchesJobLevel =
        jobLevelFilter === "All" ||
        job.more.level.toLowerCase() === jobLevelFilter.toLowerCase();

      const matchesDepartment =
        departmentFilter === "All" ||
        job.categories.some((category) =>
          category.toLowerCase().includes(departmentFilter.toLowerCase())
        );

      return (
        matchesSearch && matchesLocation && matchesJobLevel && matchesDepartment
      );
    });
  }, [searchQuery, locationFilter, jobLevelFilter, departmentFilter]);

  return (
    <JobBoardLayout>
      <section className="h-full w-full">
        <div className="flex-1 flex pb-10 flex-col items-center gap-0 overflow-auto scrollbar-hide">
          <div className="w-full h-full">
            {/* Hero with filters */}
            <div className="h-[700px] md:h-[530px]">
              <JobBoardHero
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                locationFilter={locationFilter}
                setLocationFilter={setLocationFilter}
                jobLevelFilter={jobLevelFilter}
                setJobLevelFilter={setJobLevelFilter}
                departmentFilter={departmentFilter}
                setDepartmentFilter={setDepartmentFilter}
              />
            </div>

            {/* Job Posts */}
            <div className="w-full px-5 xl:px-0 flex flex-col items-center">
              <div className="max-w-[1100px] flex flex-col gap-2 w-full">
                {filteredJobs.map((job) => (
                  <JobPostComp data={job} key={job.id} />
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
