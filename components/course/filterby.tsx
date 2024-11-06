import Image from "next/image";

const courseFilterObject = [
  {
    id: 0,
    title: "Data Science",
    icon: "/asset/course-icon/school-data-sci-one.svg",
  },
  {
    id: 1,
    title: "Programming ",
    icon: "/asset/course-icon/computer-mouse-two.svg",
  },
  {
    id: 2,
    title: "AI",
    icon: "/asset/course-icon/hand-plant-one.svg",
  },
  {
    id: 3,
    title: "Business",
    icon: "/asset/course-icon/person-shield-stars-two.svg",
  },
  {
    id: 4,
    title: "Autonomous",
    icon: "/asset/course-icon/school-ai-one.svg",
  },
  {
    id: 5,
    title: "Management",
    icon: "/asset/course-icon/school-autonomous-sys-one.svg",
  },
  {
    id: 6,
    title: "Computing",
    icon: "/asset/course-icon/school-business-one.svg",
  },
];

export const FilterByComp = () => {
  return (
    <div className="flex flex-col gap-7 w-full">
      <p className="text-[24px] px-5 lg:px-0 font-[500] leading-[32px] text-[#0b0b0b]">
        Explore courses by job function
      </p>
      {/* Add wrapper to handle horizontal scroll */}
      <div className="flex items-center gap-3 overflow-x-auto justify-between w-full">
        {courseFilterObject.map((course) => (
          <div
            key={course.id}
            className={`min-w-[160px] cursor-pointer hover:border-3 hover:border-[#00C5A1] p-2 ${course.id == 0 && "ml-5 lg:ml-0"} ${course.id == 6 && "mr-5 lg:mr-0"} h-[155px] bg-[#F0F5FF] rounded-sm flex flex-col items-center justify-center`}
          >
            <Image
              src={course.icon}
              width={60}
              height={60}
              alt={`Icon for ${course.title}`}
            />
            <p className="text-black opacity-75 text-center text-[16px]">
              {course.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
