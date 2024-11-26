import CourseLayoutDetails from "@/layouts/courseLayout";
import { courseFilterObject } from "@/lib/objects";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { EzzraAiChatPage } from "./chat";

const CourseClass = () => {
  // Hooks
  const { data: session } = useSession();
  const router = useRouter();
  const { id, lesson } = router.query;

  // State
  const [isLoading, setIsLoading] = useState(true);
  const [course, setCourse] = useState<any>(null);
  const [currentLesson, setCurrentLesson] = useState<any>(null);
  const [isOpenEzzraAi, setIsOpenEzzraAi] = useState(false);

  // Effect to find course and lesson by id when the router is ready
  useEffect(() => {
    if (id) {
      const foundCourse: any = courseFilterObject
        .find((cObj) =>
          cObj.courses.find((c) => c.course === parseInt(id as string))
        )
        ?.courses.find((c) => c.course === parseInt(id as string));

      setCourse(foundCourse);

      if (foundCourse && lesson) {
        // Find the lesson from the lessons array
        const foundLesson = foundCourse.lessons.find(
          (l: any) => l.lesson === parseInt(lesson as string)
        );
        setCurrentLesson(foundLesson);
      }

      setIsLoading(false);
    }
  }, [id, lesson]);

  if (isLoading) {
    return (
      <CourseLayoutDetails>
        <section className="items-center justify-center flex">
          <div className="flex flex-col items-center gap-3">
            <p className="text-black text-xl">Loading...</p>
          </div>
        </section>
      </CourseLayoutDetails>
    );
  }

  if (!course) {
    return (
      <CourseLayoutDetails>
        <section className="items-center justify-center flex">
          <div className="flex flex-col items-center gap-3">
            <p className="text-black text-xl">404</p>
            <p className="text-black text-xl">Course was not found</p>
          </div>
        </section>
      </CourseLayoutDetails>
    );
  }

  if (!currentLesson) {
    return (
      <CourseLayoutDetails>
        <section className="items-center justify-center flex">
          <div className="flex flex-col items-center gap-3">
            <p className="text-black text-xl">Lesson was not found</p>
          </div>
        </section>
      </CourseLayoutDetails>
    );
  }

  return (
    <CourseLayoutDetails>
      <section className="flex items-start relative flex-col lg:flex-row h-full w-full">
        {/* Left */}
        <div className="h-full px-5 lg:px-16 w-full relative lg:w-[68%] border-[#F6F6F6] flex flex-col gap-7 py-6 scrollbar-hide overflow-y-scroll border-r-4">
          {/* Course Title */}
          <div>
            <p className="text-black text-[29px] font-medium">
              {currentLesson.title}
            </p>
          </div>

          {/* Open Ezzra Ai Chat */}
          <div
            role="presentation"
            onClick={() => setIsOpenEzzraAi(!isOpenEzzraAi)}
            className="absolute z-40 top-[8%] cursor-pointer py-3 w-[95px] lg:hidden text-right px-3 rounded-l-full bg-black right-0"
          >
            <p className="text-white font-semibold">Ezzra Ai</p>
          </div>

          {/* Main */}
          <div className="flex flex-col relative gap-10">
            {/* Tab Control (Not functioning yet) */}
            <div className="flex items-center gap-4 border-b-1 border-[#cacaca]">
              <p className="text-[17px] cursor-pointer pb-2 border-b-3 border-[#2016FF] font-semibold text-[#2016FF] w-[100px] text-center">
                Lesson
              </p>
              <p className="text-[17px] cursor-pointer pb-2 text-[black]">
                Downloads
              </p>
            </div>

            {/* Course Video from YouTube */}
            <div className="w-full border-1 p-2 sm:p-5 md:p-10 h-[200px] sm:h-[400px] md:h-[500px] xl:h-[560px] rounded-md">
              <iframe
                width="100%" // Makes the video responsive
                height="100%" // Adjust this as needed
                src={`${currentLesson.videoLink}?controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1`} // Prevents navigating to YouTube
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Lesson Description */}
            <div className="flex flex-col p-5 md:p-16 gap-2">
              <p className="text-[27px] text-black font-semibold">
                Lesson Description:
              </p>
              <p className="text-[16px] text-black">
                {currentLesson.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="px-5 h-full w-[32%] hidden lg:flex overflow-hidden">
          <EzzraAiChatPage />
        </div>

        <div
          className={`px-5 h-full z-30 ${isOpenEzzraAi ? "flex" : "hidden"} lg:hidden absolute w-full top-0 bg-white flex-col items-center overflow-hidden`}
        >
          <EzzraAiChatPage />
        </div>
      </section>
    </CourseLayoutDetails>
  );
};

export default CourseClass;
