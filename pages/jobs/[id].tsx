import JobBoardLayout from "@/layouts/jobboard";
import { jobCard } from "@/lib/objects";
import Image from "next/image";
import { useRouter } from "next/router";
import { CiLocationOn } from "react-icons/ci";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { MdCategory, MdOutlineCategory, MdOutlineWork } from "react-icons/md";
import { RiTimeFill, RiTimeLine } from "react-icons/ri";
import { PiBagLight } from "react-icons/pi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";

export default function BlogDetails() {
  const router = useRouter();
  const { id } = router.query;
  // Find the company details by name
  const job = jobCard.find((c) => c.id.toLowerCase() === id);
  if (!job) {
    return (
      <div>
        <p></p>
      </div>
    );
  }

  const iconMap: { [key: string]: JSX.Element } = {
    location: <CiLocationOn size={14} color="#136EF5" />,
    category: <MdOutlineCategory size={14} color="#136EF5" />,
    level: <PiBagLight size={14} color="#136EF5" />,
    type: <RiTimeLine size={14} color="#136EF5" />,
  };

  return (
    <JobBoardLayout>
      <div className="w-full px-5 xl:px-0 flex flex-col items-center">
        {/* Back Button */}
        <div className="max-w-[1100px] w-full my-7">
          <div
            role="presentation"
            onClick={() => router.back()}
            className="flex cursor-pointer items-center gap-2"
          >
            <IoIosArrowRoundBack size={25} color="black" />
            <p className="text-black">See all jobs</p>
          </div>
        </div>
        <div className="max-w-[1100px] w-full flex justify-between items-start">
          {/* Left */}
          <div className="rounded-lg border flex flex-col gap-5 border-gray-200 overflow-hidden w-full md:w-[70%] ">
            {/* Top */}
            <div className="h-[400px] sm:h-[290px] relative w-full">
              <div className="absolute inset-0">
                <Image
                  src="/asset/job/job-page-hero.jpg"
                  layout="fill"
                  quality={70}
                  priority
                  objectFit="cover"
                  alt="hero background for job board"
                  className="z-0"
                />
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col px-6 md:px-9 w-full items-center justify-center h-full">
                <div className="max-w-[1100px] w-full">
                  <div className="max-w-[530px]">
                    <div className="flex flex-col sm:flex-row md:items-center gap-4">
                      <div className="h-[50px] md:h-[60px] w-[50px] md:w-[60px] rounded-md bg-[#136EF5] flex items-center justify-center">
                        <BiLogoCPlusPlus color="white" size={35} />
                      </div>
                      <div>
                        <p className="text-[14px] uppercase leading-[15px] text-[#a0a2b3]">
                          {job.company}
                        </p>
                        <p className="font-[700] leading-[30px] text-[16px] md:text-[20px] text-[#232535] ">
                          {job.position}
                        </p>
                      </div>
                    </div>

                    <p className="text-[15px] my-2 sm:my-6 text-[#484b62] leading-[26px] font-normal">
                      Explore various opportunities in top tech companies around
                      the world. Let us help you find the right fit for your
                      skills and aspirations.
                    </p>

                    <div className="flex items-center gap-1 flex-wrap">
                      {Object.entries(job.more).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex bg-white border border-gray-200 py-1 px-2 rounded-md w-max items-center gap-1"
                        >
                          {iconMap[key] || null}{" "}
                          {/* Display icon if exists in iconMap */}
                          <p className="text-[12px] text-black">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="px-6 md:px-9">
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                dolor minima eum laborum qui, porro dignissimos vero in incidunt
                error facere. Quis magnam quasi deleniti ipsum, quas nulla
                facilis porro! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Rem dolor minima eum laborum qui, porro
                dignissimos vero in incidunt error facere. Quis magnam quasi
                deleniti ipsum, quas nulla facilis porro! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Rem dolor minima eum laborum
                qui, porro dignissimos vero in incidunt error facere. Quis
                magnam quasi deleniti ipsum, quas nulla facilis porro! Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Rem dolor
                minima eum laborum qui, porro dignissimos vero in incidunt error
                facere. Quis magnam quasi deleniti ipsum, quas nulla facilis
                porro! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Rem dolor minima eum laborum qui, porro dignissimos vero in
                incidunt error facere. Quis magnam quasi deleniti ipsum, quas
                nulla facilis porro! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Rem dolor minima eum laborum qui, porro
                dignissimos vero in incidunt error facere. Quis magnam quasi
                deleniti ipsum, quas nulla facilis porro! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Rem dolor minima eum laborum
                qui, porro dignissimos vero in incidunt error facere. Quis
                magnam quasi deleniti ipsum, quas nulla facilis porro! Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Rem dolor
                minima eum laborum qui, porro dignissimos vero in incidunt error
                facere. Quis magnam quasi deleniti ipsum, quas nulla facilis
                porro! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Rem dolor minima eum laborum qui, porro dignissimos vero in
                incidunt error facere. Quis magnam quasi deleniti ipsum, quas
                nulla facilis porro! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Rem dolor minima eum laborum qui, porro
                dignissimos vero in incidunt error facere. Quis magnam quasi
                deleniti ipsum, quas nulla facilis porro! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Rem dolor minima eum laborum
                qui, porro dignissimos vero in incidunt error facere. Quis
                magnam quasi deleniti ipsum, quas nulla facilis porro! Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Rem dolor
                minima eum laborum qui, porro dignissimos vero in incidunt error
                facere. Quis magnam quasi deleniti ipsum, quas nulla facilis
                porro! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Rem dolor minima eum laborum qui, porro dignissimos vero in
                incidunt error facere. Quis magnam quasi deleniti ipsum, quas
                nulla facilis porro! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Rem dolor minima eum laborum qui, porro
                dignissimos vero in incidunt error facere. Quis magnam quasi
                deleniti ipsum, quas nulla facilis porro! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Rem dolor minima eum laborum
                qui, porro dignissimos vero in incidunt error facere. Quis
                magnam quasi deleniti ipsum, quas nulla facilis porro! Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Rem dolor
                minima eum laborum qui, porro dignissimos vero in incidunt error
                facere. Quis magnam quasi deleniti ipsum, quas nulla facilis
                porro! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Rem dolor minima eum laborum qui, porro dignissimos vero in
                incidunt error facere. Quis magnam quasi deleniti ipsum, quas
                nulla facilis porro! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Rem dolor minima eum laborum qui, porro
                dignissimos vero in incidunt error facere. Quis magnam quasi
                deleniti ipsum, quas nulla facilis porro! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Rem dolor minima eum laborum
                qui, porro dignissimos vero in incidunt error facere. Quis
                magnam quasi deleniti ipsum, quas nulla facilis porro! Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Rem dolor
                minima eum laborum qui, porro dignissimos vero in incidunt error
                facere. Quis magnam quasi deleniti ipsum, quas nulla facilis
                porro! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Rem dolor minima eum laborum qui, porro dignissimos vero in
                incidunt error facere. Quis magnam quasi deleniti ipsum, quas
                nulla facilis porro! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Rem dolor minima eum laborum qui, porro
                dignissimos vero in incidunt error facere. Quis magnam quasi
                deleniti ipsum, quas nulla facilis porro!
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="sticky top-10 hidden flex-col gap-4 md:flex w-[27%]">
            {/* First */}
            <div className="rounded-lg px-4 py-5 border border-gray-200 bg-white">
              {/* Top */}
              <div className="flex flex-col gap-2">
                <div className="h-[35px] w-[35px] rounded-md bg-[#136EF5] flex items-center justify-center">
                  <BiLogoCPlusPlus color="white" size={25} />
                </div>
                <div>
                  <p className="font-[700] leading-[30px] text-[17px] text-[#232535] ">
                    About {job.company}
                  </p>
                </div>
              </div>

              <p className="text-[16px] my-3 text-[#484b62] font-[400] leading-[26px]">
                Excepteur sint occaecat siter dolor cupidatat non proider sunt
                in culpa qui official ers.
              </p>

              <button className="bg-[#FBFBFC] rounded-md font-semibold border border-[#EAEBF4] w-full p-2">
                <p className="text-black text-[14px]">View Company</p>
              </button>
            </div>
            {/* Second */}
            <div className="rounded-lg px-4 py-5 border border-gray-200 bg-white">
              {/* Top */}
              <div className="flex flex-col gap-2">
                <div className="h-[35px] w-[35px] rounded-md border border-[#EAEBF4] bg-[#ffffff] flex items-center justify-center">
                  <IoNewspaperOutline color="#136EF5" size={20} />
                </div>
                <div>
                  <p className="font-[700] leading-[30px] text-[17px] text-[#232535] ">
                    Post a job today
                  </p>
                </div>
              </div>

              <p className="text-[16px] my-3 text-[#484b62] font-[400] leading-[26px]">
                I understand that this feature will not be included.
              </p>

              <button className="bg-[#136EF5] rounded-md font-semibold border w-full p-2">
                <p className="text-white text-[14px]">Post a featured job</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </JobBoardLayout>
  );
}
