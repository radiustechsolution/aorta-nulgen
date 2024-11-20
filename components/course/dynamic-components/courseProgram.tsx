import { title } from "@/components/primitives";

export const CourseProgram = () => {
  return (
    <section className="flex flex-col items-center py-16">
      <div className="max-w-[1250px] px-6 xl:px-0 w-full gap-4 flex flex-col">
        <p className={`${title({ size: "xs" })} text-black`}>
          Courses In This Program
        </p>
        <div className="bg-[#142580] w-full p-5 rounded-sm">
          <p className="text-[#BDEA05] text-[14px]">Course 1 • 40 minutes</p>
          <p className="text-white text-[25px] font-medium py-3">
            Welcome to SQL Nanodegree Program
          </p>
          <p className="max-w-[60%] text-white text-[17px]">
            Welcome to the SQL Nanodegree program! Learn more about the
            pre-requisites, structure of the program, and getting started!
          </p>
        </div>
      </div>
    </section>
  );
};
