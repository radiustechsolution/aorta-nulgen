import { JobBoardHero } from "@/components/job-board/JobBoardHero";
import { JobPostComp } from "@/components/job-board/JobPostComp";
import { Footer } from "@/components/landing-page/footer";
import JobBoardLayout from "@/layouts/jobboard";
import { Button, Spinner } from "@nextui-org/react";
import React, { useState, useMemo, useEffect, useRef } from "react";

export default function JobBoard() {
  // Ref to track if the initial fetch has already occurred
  const isInitialRender = useRef(true);

  // State for search query and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [jobLevelFilter, setJobLevelFilter] = useState("All");
  const [departmentFilter, setDepartmentFilter] = useState("All");

  // State for jobs and pagination
  const [jobs, setJobs] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Function to fetch jobs with pagination
  const FetchJobs = async () => {
    if (loading || !hasMore) return; // Prevent multiple fetches if already loading or no more data
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/jobs?page=${page}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }

      const data = await response.json();
      console.log(data.data);

      // Check if more jobs exist for pagination
      setHasMore(data.data.length > 0);

      // Deduplicate by checking if the job already exists
      setJobs((prevJobs) => {
        const newJobs = data.data.filter(
          (newJob: any) => !prevJobs.some((job) => job.id === newJob.id)
        );
        return [...prevJobs, ...newJobs]; // Append only unique jobs
      });

      // Increment page number for next fetch
      setPage((prevPage) => prevPage + 1);
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
  }, []); // Empty dependency array

  // Filter the jobs array based on the selected filters and search query
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
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
        job.categories.some((category: any) =>
          category.toLowerCase().includes(departmentFilter.toLowerCase())
        );

      return (
        matchesSearch && matchesLocation && matchesJobLevel && matchesDepartment
      );
    });
  }, [jobs, searchQuery, locationFilter, jobLevelFilter, departmentFilter]);

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
              {loading && jobs.length < 1 && (
                <div className="flex items-center gap-2">
                  <Spinner size="sm" />
                  <p className="text-black text-[16px]">Fetching...</p>
                </div>
              )}
              {/* Display "Load More" button if there are more jobs to load */}
              {hasMore && jobs.length > 1 && (
                <Button
                  onClick={FetchJobs}
                  isLoading={loading}
                  className="bg-[#3670FF] text-white py-2 px-4 rounded mt-4"
                >
                  Load More
                </Button>
              )}
            </div>
          </div>
        </div>
        <Footer bgColor="bg-[#2a2a2f]" />
      </section>
    </JobBoardLayout>
  );
}
