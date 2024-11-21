import { title } from "@/components/primitives";
import { RatingComp } from "@/components/rating";
import Image from "next/image";
import router from "next/router";
import { IoBookOutline } from "react-icons/io5";

interface Types {
  id: number;
  title: string;
  icon: string;
  rating: number;
  duration: number;
  level: string;
  course_id: string;
  subtitle: string;
  skillsToLearn: any;
}

export const CourseOutlineComp = ({ data }: any) => {
  // Navigate to a Job
  const handleNavigate = (id: any) => {
    router.push(`/course/${id}`);
  };

  return (
    <section className="flex flex-col items-center py-12">
      <div className="max-w-[1250px] flex flex-col gap-12 px-6 xl:px-0 w-full">
        <p className={`${title({ size: "xs" })} text-black`}>
          Courses In This Program
        </p>

        {data.courses.map((v: any) => (
          <div key={v.id} className="flex flex-col gap-9">
            <div className=" gap-4 flex flex-col">
              <div className="bg-[#142580] w-full p-5 rounded-sm">
                <p className="text-[#BDEA05] text-[14px]">
                  Course {v.course} • {v.duration}
                </p>
                <p className="text-white text-[25px] font-medium py-3">
                  Welcome to {v.title}
                </p>
                <p className="w-full md:max-w-[60%] text-white text-[17px]">
                  {v.welcome}
                </p>
              </div>
            </div>

            {/* Wrapper with snapping and horizontal scroll */}
            <div className="flex items-center gap-3 overflow-x-auto w-full xl:scrollbar-hide snap-x snap-mandatory">
              <div className="flex gap-5 w-full flex-nowrap">
                {v.lessons.map((v: any) => (
                  <div
                    key={v.lesson}
                    //   onClick={() => handleNavigate(v.course_id)}
                    role="presentation"
                    className={`h-[234px] justify-between flex flex-col p-4 border border-[#C7C7C7] rounded-md flex-shrink-0 cursor-pointer relative min-w-[265px] max-w-[265px] snap-none group overflow-hidden`}
                  >
                    <div className="flex text-black items-center gap-2">
                      <IoBookOutline color="black" size={25} />
                      <p className="text-black text-[13px]">
                        Lesson {v.lesson}
                      </p>
                    </div>
                    {/* Title */}
                    <p className="font-medium text-[17px] leading-[24px] text-black">
                      {v.title.length > 39
                        ? `${v.title.substring(0, 36)}...`
                        : v.title}
                    </p>

                    <p className="text-black text-[14px]">
                      {v.description +
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil pariatur a totam unde"
                          .length >
                      20
                        ? `${v.description + "Lorem ipsum dolor sit amet consectetur adipisicing.".slice(0, 110)}...`
                        : v.description +
                          "Lorem ipsum dolor sit amet consectetur "}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
