import Image from "next/image";

const courseFilterObject = [
  {
    id: 0,
    title: "Data Science",
    icon: "/asset/course-icon/bg1.jpeg",
  },
  {
    id: 1,
    title: "Programming & Development",
    icon: "/asset/course-icon/bg2.jpeg",
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    icon: "/asset/course-icon/bg3.jpeg",
  },
  {
    id: 3,
    title: "Business",
    icon: "/asset/course-icon/bg4.jpeg",
  },
  {
    id: 4,
    title: "Autonomous Systems",
    icon: "/asset/course-icon/bg5.jpeg",
  },
  {
    id: 5,
    title: "Product Management",
    icon: "/asset/course-icon/bg6.jpeg",
  },
  {
    id: 6,
    title: "Cloud Computing",
    icon: "/asset/course-icon/bg7.jpeg",
  },
];

export const RecomendedForYouComp = () => {
  return (
    <div className="flex flex-col gap-7 w-full">
      <p className="text-[24px] px-5 lg:px-0 font-[500] leading-[32px] text-[#0b0b0b]">
        Courses Recommended for You
      </p>
      {/* Wrapper with snapping and horizontal scroll */}
      <div className="flex items-center gap-3 overflow-x-auto w-full xl:scrollbar-hide snap-x snap-mandatory">
        <div className="flex gap-3 w-full xl:flex-nowrap">
          {courseFilterObject.map((v) => (
            <div
              key={v.id}
              className={`h-[320px] ${v.id == 0 && "ml-5"} rounded-md cursor-pointer relative min-w-[190px] xl:flex-grow xl:basis-1/6 bg-gray-200 snap-none group overflow-hidden`}
            >
              <Image
                objectFit="cover"
                src={v.icon}
                quality={40}
                className="rounded-md"
                layout="fill"
                alt={v.title}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 group-hover:from-black/20 group-hover:to-black/50 transition-all duration-200 ease-in" />
              {/* Title */}
              <p className="absolute bottom-2 left-2 text-white font-semibold text-lg">
                {v.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
